//SPDX-License-Identifier: MIT
pragma solidity ~0.8.17;

import "../registry/ENS.sol";
import "./ETHRegistrarController.sol";
import "./IETHRegistrarController.sol";
import "../resolvers/Resolver.sol";
import "./IBulkRenewal.sol";
import "./IPriceOracle.sol";

import "@openzeppelin/contracts/utils/introspection/IERC165.sol";

contract BulkRenewal is IBulkRenewal {
    using SafeERC20 for IERC20;

    bytes32 private constant ETH_NAMEHASH =
        0xa6ffbc01dce85b089ce59e53d7363ba0fd16b9ede2dd51ca82a2ffe8f39e5b15;

    ENS public immutable ens;

    constructor(ENS _ens) {
        ens = _ens;
    }

    function getController() internal view returns (ETHRegistrarController) {
        Resolver r = Resolver(ens.resolver(ETH_NAMEHASH));
        return
            ETHRegistrarController(
                r.interfaceImplementer(
                    ETH_NAMEHASH,
                    type(IETHRegistrarController).interfaceId
                )
            );
    }

    function rentPrice(string[] calldata names, uint256 duration)
        external
        view
        override
        returns (uint256 total)
    {
        ETHRegistrarController controller = getController();
        uint256 length = names.length;
        for (uint256 i = 0; i < length; ) {
            IPriceOracle.Price memory price = controller.rentPrice(
                names[i],
                duration
            );
            unchecked {
                ++i;
                total += (price.base + price.premium);
            }
        }
    }

    function renewAll(string[] calldata names, uint256 duration)
        external
        override
    {
        ETHRegistrarController controller = getController();
        uint256 length = names.length;
        uint256 total;
        for (uint256 i = 0; i < length; ) {
            IPriceOracle.Price memory price = controller.rentPrice(
                names[i],
                duration
            );
            uint256 totalPrice = price.base + price.premium;

            IERC20 priceToken = controller.priceToken();
            priceToken.safeTransferFrom(msg.sender, address(this), totalPrice);
            priceToken.safeApprove(address(controller), 0);
            priceToken.safeApprove(address(controller), totalPrice);

            controller.renew(names[i], duration);

            unchecked {
                ++i;
                total += totalPrice;
            }
        }
        // Send any excess funds back
        payable(msg.sender).transfer(address(this).balance);
    }

    function supportsInterface(bytes4 interfaceID)
        external
        pure
        returns (bool)
    {
        return
            interfaceID == type(IERC165).interfaceId ||
            interfaceID == type(IBulkRenewal).interfaceId;
    }
}
