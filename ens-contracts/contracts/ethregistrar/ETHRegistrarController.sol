//SPDX-License-Identifier: MIT
pragma solidity ~0.8.17;

import {BaseRegistrarImplementation} from "./BaseRegistrarImplementation.sol";
import {StringUtils} from "./StringUtils.sol";
import {Resolver} from "../resolvers/Resolver.sol";
import {ReverseRegistrar} from "../registry/ReverseRegistrar.sol";
import {IETHRegistrarController, IPriceOracle} from "./IETHRegistrarController.sol";

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {IERC165} from "@openzeppelin/contracts/utils/introspection/IERC165.sol";
import {Address} from "@openzeppelin/contracts/utils/Address.sol";
import {INameWrapper} from "../wrapper/INameWrapper.sol";
import {ERC20Recoverable} from "../utils/ERC20Recoverable.sol";

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

import {IAxelarExecutable} from "@axelar-network/axelar-cgp-solidity/contracts/interfaces/IAxelarExecutable.sol";
import {IAxelarGasService} from "@axelar-network/axelar-cgp-solidity/contracts/interfaces/IAxelarGasService.sol";

error CommitmentTooNew(bytes32 commitment);
error CommitmentTooOld(bytes32 commitment);
error NameNotAvailable(string name);
error DurationTooShort(uint256 duration);
error ResolverRequiredWhenDataSupplied();
error UnexpiredCommitmentExists(bytes32 commitment);
error InsufficientValue();
error Unauthorised(bytes32 node);
error MaxCommitmentAgeTooLow();
error MaxCommitmentAgeTooHigh();
error NotDomainOwner();

/**
 * @dev A registrar controller for registering and renewing names at fixed cost.
 */
contract ETHRegistrarController is
    Ownable,
    IETHRegistrarController,
    IERC165,
    ERC20Recoverable,
    IAxelarExecutable
{
    using SafeERC20 for IERC20;
    using StringUtils for *;
    using Address for address;

    uint256 public constant MIN_REGISTRATION_DURATION = 28 days;
    bytes32 private constant ETH_NODE =
        0x93cdeb708b7545dc668eb9280176169d1c33cfd8ed6f04690a0bcc88a93fc4ae;
    uint64 private constant MAX_EXPIRY = type(uint64).max;
    BaseRegistrarImplementation immutable base;
    IPriceOracle public immutable prices;
    uint256 public immutable minCommitmentAge;
    uint256 public immutable maxCommitmentAge;
    ReverseRegistrar public immutable reverseRegistrar;
    INameWrapper public immutable nameWrapper;
    IERC20 public immutable priceToken;
    IAxelarGasService public immutable axelarGasService;

    mapping(bytes32 => uint256) public commitments;

    event NameRegistered(
        string name,
        bytes32 indexed label,
        address indexed owner,
        uint256 baseCost,
        uint256 premium,
        uint256 expires
    );
    event NameRenewed(
        string name,
        bytes32 indexed label,
        uint256 cost,
        uint256 expires
    );

    constructor(
        BaseRegistrarImplementation _base,
        IPriceOracle _prices,
        uint256 _minCommitmentAge,
        uint256 _maxCommitmentAge,
        ReverseRegistrar _reverseRegistrar,
        INameWrapper _nameWrapper,
        IERC20 _priceToken,
        address _axelarGateway,
        IAxelarGasService _axelarGasService
    ) IAxelarExecutable(_axelarGateway) {
        if (_maxCommitmentAge <= _minCommitmentAge) {
            revert MaxCommitmentAgeTooLow();
        }

        if (_maxCommitmentAge > block.timestamp) {
            revert MaxCommitmentAgeTooHigh();
        }

        base = _base;
        prices = _prices;
        minCommitmentAge = _minCommitmentAge;
        maxCommitmentAge = _maxCommitmentAge;
        reverseRegistrar = _reverseRegistrar;
        nameWrapper = _nameWrapper;
        priceToken = _priceToken;
        axelarGasService = _axelarGasService;
    }

    function rentPrice(string memory name, uint256 duration)
        public
        view
        override
        returns (IPriceOracle.Price memory price)
    {
        bytes32 label = keccak256(bytes(name));
        price = prices.price(name, base.nameExpires(uint256(label)), duration);
    }

    function valid(string memory name) public pure returns (bool) {
        return name.strlen() >= 3;
    }

    function available(string memory name) public view override returns (bool) {
        bytes32 label = keccak256(bytes(name));
        return valid(name) && base.available(uint256(label));
    }

    function makeCommitment(
        string memory name,
        address owner,
        uint256 duration,
        bytes32 secret,
        address resolver,
        bytes[] calldata data,
        bool reverseRecord,
        uint32 fuses,
        uint64 wrapperExpiry
    ) public pure override returns (bytes32) {
        bytes32 label = keccak256(bytes(name));
        if (data.length > 0 && resolver == address(0)) {
            revert ResolverRequiredWhenDataSupplied();
        }
        return
            keccak256(
                abi.encode(
                    label,
                    owner,
                    duration,
                    resolver,
                    data,
                    secret,
                    reverseRecord,
                    fuses,
                    wrapperExpiry
                )
            );
    }

    function commit(bytes32 commitment) public override {
        if (commitments[commitment] + maxCommitmentAge >= block.timestamp) {
            revert UnexpiredCommitmentExists(commitment);
        }
        commitments[commitment] = block.timestamp;
    }

    function register(
        string calldata name,
        address owner,
        uint256 duration,
        bytes32 secret,
        address resolver,
        bytes[] calldata data,
        bool reverseRecord,
        uint32 fuses,
        uint64 wrapperExpiry
    ) public {
        IPriceOracle.Price memory price = rentPrice(name, duration);

        priceToken.safeTransferFrom(msg.sender, address(this), price.base + price.premium);

        _consumeCommitment(
            name,
            duration,
            makeCommitment(
                name,
                owner,
                duration,
                secret,
                resolver,
                data,
                reverseRecord,
                fuses,
                wrapperExpiry
            )
        );

        _register(
            name,
            owner,
            duration,
            resolver,
            data,
            reverseRecord,
            fuses,
            wrapperExpiry,
            price
        );
    }

    function _register(
        string memory name,
        address owner,
        uint256 duration,
        address resolver,
        bytes[] memory data,
        bool reverseRecord,
        uint32 fuses,
        uint64 wrapperExpiry,
        IPriceOracle.Price memory price
    ) internal {
        uint256 expires = nameWrapper.registerAndWrapETH2LD(
            name,
            owner,
            duration,
            resolver,
            fuses,
            wrapperExpiry
        );

        if (data.length > 0) {
            _setRecords(resolver, keccak256(bytes(name)), data);
        }

        if (reverseRecord) {
            _setReverseRecord(name, resolver, msg.sender);
        }

        emit NameRegistered(
            name,
            keccak256(bytes(name)),
            owner,
            price.base,
            price.premium,
            expires
        );
    }

    function renew(string calldata name, uint256 duration)
        external
        override
    {
        _renew(name, duration, 0, 0);
    }

    function renewWithFuses(
        string calldata name,
        uint256 duration,
        uint32 fuses,
        uint64 wrapperExpiry
    ) external payable {
        bytes32 labelhash = keccak256(bytes(name));
        bytes32 nodehash = keccak256(abi.encodePacked(ETH_NODE, labelhash));
        if (!nameWrapper.isTokenOwnerOrApproved(nodehash, msg.sender)) {
            revert Unauthorised(nodehash);
        }
        _renew(name, duration, fuses, wrapperExpiry);
    }

    function _renew(
        string calldata name,
        uint256 duration,
        uint32 fuses,
        uint64 wrapperExpiry
    ) internal {
        bytes32 labelhash = keccak256(bytes(name));
        bytes32 nodehash = keccak256(abi.encodePacked(ETH_NODE, labelhash));
        uint256 tokenId = uint256(labelhash);
        IPriceOracle.Price memory price = rentPrice(name, duration);
        
        priceToken.safeTransferFrom(msg.sender, address(this), price.base);

        uint256 expires;
        if (nameWrapper.isWrapped(nodehash)) {
            expires = nameWrapper.renew(
                tokenId,
                duration,
                fuses,
                wrapperExpiry
            );
        } else {
            expires = base.renew(tokenId, duration);
        }

        emit NameRenewed(name, labelhash, price.base, expires);
    }

    function withdraw() public {
        payable(owner()).transfer(address(this).balance);
    }

    function withdrawERC20(IERC20 token) public {
        token.safeTransfer(owner(), token.balanceOf(address(this)));
    }

    function supportsInterface(bytes4 interfaceID)
        external
        pure
        returns (bool)
    {
        return
            interfaceID == type(IERC165).interfaceId ||
            interfaceID == type(IETHRegistrarController).interfaceId;
    }

    /* Internal functions */

    function _consumeCommitment(
        string memory name,
        uint256 duration,
        bytes32 commitment
    ) internal {
        // Require an old enough commitment.
        if (commitments[commitment] + minCommitmentAge > block.timestamp) {
            revert CommitmentTooNew(commitment);
        }

        // If the commitment is too old, or the name is registered, stop
        if (commitments[commitment] + maxCommitmentAge <= block.timestamp) {
            revert CommitmentTooOld(commitment);
        }
        if (!available(name)) {
            revert NameNotAvailable(name);
        }

        delete (commitments[commitment]);

        if (duration < MIN_REGISTRATION_DURATION) {
            revert DurationTooShort(duration);
        }
    }

    function _setRecords(
        address resolverAddress,
        bytes32 label,
        bytes[] memory data
    ) internal {
        // use hardcoded .eth namehash
        bytes32 nodehash = keccak256(abi.encodePacked(ETH_NODE, label));
        Resolver resolver = Resolver(resolverAddress);
        resolver.multicallWithNodeCheck(nodehash, data);
    }

    function _setReverseRecord(
        string memory name,
        address resolver,
        address owner
    ) internal {
        reverseRegistrar.setNameForAddr(
            msg.sender,
            owner,
            resolver,
            string.concat(name, ".eth")
        );
    }

    struct SiblingData {
        uint128 chainId;
        string chainName;
        string bridgeAddress;
    }

    mapping(uint128 => SiblingData) public siblings;
    mapping(bytes32 => uint128) public chainNameLookup;

    event AddSibling(uint128 indexed chainId, string chainName, string bridgeAddress);
    function addSibling(uint128 chainId, string memory chainName, string memory bridgeAddress) public onlyOwner {
        siblings[chainId] = SiblingData({
            chainId: chainId,
            chainName: chainName,
            bridgeAddress: bridgeAddress
        });
        chainNameLookup[keccak256(bytes(chainName))] = chainId;

        emit AddSibling(chainId, chainName, bridgeAddress);
    }

    function _execute(
        string memory sourceChain,
        string memory sourceAddress,
        bytes calldata payload
    ) internal virtual override {
        require(keccak256(bytes(sourceAddress)) == keccak256(bytes(siblings[chainNameLookup[keccak256(bytes(sourceChain))]].bridgeAddress)), "WRONG_SENDER");

        // Decode payload
        (
            string memory name,
            address owner,
            uint32 fuses,
            uint64 wrapperExpiry
        ) = abi.decode(payload, (string, address, uint32, uint64));

        if (wrapperExpiry > block.timestamp) {
            // Only pay on source chain
            IPriceOracle.Price memory price = IPriceOracle.Price({
                base: 0,
                premium: 0 
            });

            // Only register domain to the expiry on the source chain
            uint256 duration = wrapperExpiry - block.timestamp;

            // TODO: resolver is not known now
            address resolver = address(0);

            _register(
                name,
                owner,
                duration,
                resolver,
                new bytes[](0),
                false,
                fuses,
                wrapperExpiry,
                price
            );
        }
    }

    function _executeWithToken(
        string memory sourceChain,
        string memory sourceAddress,
        bytes calldata payload,
        string memory tokenSymbol,
        uint256 amount
    ) internal virtual override {
        _execute(sourceChain, sourceAddress, payload);
    }

    function bridgeDomain(string memory name, string memory destinationChain, string memory destinationAddress) public payable {
        bytes32 labelHash = keccak256(bytes(name));

        (address domainOwner, uint32 fuses, uint64 expiry) = nameWrapper.getData(uint256(labelHash));

        if (domainOwner != msg.sender) revert NotDomainOwner();

        bytes memory payload = abi.encode(name, domainOwner, fuses, expiry);

        axelarGasService.payNativeGasForContractCall{value: msg.value}(
            address(this),
            destinationChain,
            destinationAddress,
            payload,
            msg.sender
        );
        gateway.callContract(destinationChain, destinationAddress, payload);
    }
}
