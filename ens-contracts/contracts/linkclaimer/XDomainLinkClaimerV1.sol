pragma solidity >=0.8.4;

import "../registry/ENS.sol";
import "../wrapper/INameWrapper.sol";
import "./IXDomainLinkClaimer.sol";

error NotTLDOwner();

contract XDomainLinkClaimerV1 is IXDomainLinkClaimer {
  ENS public immutable rootEns;
  INameWrapper public immutable rootNameWrapper;
  bytes32 public immutable rootNode;

  ENS public immutable linkEns;
  bytes32 public immutable linkParentNode;

  constructor(ENS _rootEns, INameWrapper _rootNameWrapper, bytes32 _rootNode, ENS _linkEns, bytes32 _linkParentNode) {
    rootEns = _rootEns;
    rootNameWrapper = _rootNameWrapper;
    linkEns = _linkEns;
    rootNode = _rootNode;
    linkParentNode = _linkParentNode;
  }

  function claimDomain(string calldata label) public returns(bytes32 linkNode) {
    bytes32 labelHash = keccak256(bytes(label));

    bytes32 node = keccak256(abi.encodePacked(rootNode, labelHash));
    linkNode = keccak256(abi.encodePacked(linkParentNode, labelHash));

    if (
      (rootEns.owner(node) != address(rootNameWrapper) && rootEns.owner(node) != msg.sender) || 
      (rootEns.owner(node) == address(rootNameWrapper) && rootNameWrapper.ownerOf(uint256(labelHash)) != msg.sender)
    ) revert NotTLDOwner();

    linkEns.setSubnodeOwner(linkParentNode, labelHash, msg.sender);
  }
}