pragma solidity >=0.8.4;

interface IXDomainLinkClaimer {
  function claimDomain(string calldata label) external returns(bytes32 claimedNode);
}