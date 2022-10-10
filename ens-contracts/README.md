# ENS

[![Build Status](https://travis-ci.org/ensdomains/ens-contracts.svg?branch=master)](https://travis-ci.org/ensdomains/ens-contracts)

For documentation of the ENS system, see [docs.ens.domains](https://docs.ens.domains/).

## Deployments

### ETH Goerli

deploying "ENSRegistry" (tx: 0xf1e090849f77c6c63ee63a7cbd6363cac98c3c808f639f3899539415ce53c230)...: deployed at 0x52b8f0537dfeB9c7f8F3d4A0C868BB63F8fed044 with 743372 gas
deploying "Root" (tx: 0xa5e0d9fefe8a181e24f0b1347b79c6f5fe355612a2440179115064225ee6a8aa)...: deployed at 0xA6Ed5154094212d672476C475De9aF14434066B9 with 665132 gas
Setting owner of root node to root contract (tx: 0xa034cb98a7abd89172da8905ecc0f947541f4d6178dfcdd9c2f7825c1e58d66e)...
Transferring root ownership to final owner (tx: 0x386a248110444be6b82d970079ddf16abe8fd197b56df644e89eaa4106a95175)...
Setting final owner as controller on root contract (tx: 0x1fcc577bfddec3573ad2e6b2eec27b629838233c772e3ef9811b1ab101407b01)...
deploying "BaseRegistrarImplementation" (tx: 0xb173a7233ff48e0272e877a7d041a343a1125f8259f31f4de60cad40e53baacc)...: deployed at 0x5F37E5eBc0Aa637C3312cA9dAf3C5C35435882e8 with 2119237 gas
Adding owner as controller to registrar (tx: 0x33a04153c57a87acc6cc2787fabd891f4a160f4fd16ae133c2cfa904945a8698)...
Setting owner of eth node to registrar on root (tx: 0x27e5e77e16c56f34b1a5ce986de7f9874082e98bb20c0d50ce93bcaf35e5023a)...
deploying "DummyOracle" (tx: 0x45e1467538c2fa1807a2dd7e6e93439555f837e7e722724062853525e28f72fa)...: deployed at 0x2f1439268FFB8dFc17c8bdAF5b97A8a5E9400723 with 114009 gas
deploying "StablePriceOracleUSD" (tx: 0x1baac2d231ca73aeba19c30fbb17ab0b0e5e8e66c063ccbaf0a0c0b07018aae7)...: deployed at 0xc560611aC4570D8E55Fca5485bDAD3a19427A465 with 510468 gas
deploying "StaticMetadataService" (tx: 0x007c6c107fc1371c1972ba81fe7611cc1e8474c5b118e948060ba1b022e1f52e)...: deployed at 0xb9B9baEbC70D769be5AFc9f800AE134F3dd05362 with 240222 gas
deploying "NameWrapper" (tx: 0xf5611e532950b6c9e24ba635331e6981ad0e5adea44a88927c7a1d3e9372ea0e)...: deployed at 0x65Cf117A5FE8E1Dc4a5578cF98CB9A3a0a12FFb7 with 5274613 gas
Adding NameWrapper as controller on registrar (tx: 0xf93eb84d6868de057aa57aa9e974654e6f8e02b22fcec84a1f89a8aa6392f7cb)...
deploying "ReverseRegistrar" (tx: 0xb45922bd69e8390bc9da3a7eedbe60574762a8beb42803cef2eb05aa6033d6fd)...: deployed at 0xAC7d84bE0F3bcFB57c476d924fC5437a7D4b6664 with 1011553 gas
Setting owner of .reverse to owner on root (tx: 0x92757c73a90ae84c7c5eb3be001a7e7fe1d083895ff6693109707a5ed88c4273)...
Setting owner of .addr.reverse to ReverseRegistrar on registry (tx: 0x772fd46070d0a9d23ef6ea3a37d87fd996f09dc28b3dec4fcc4bf763e38c332e)...
deploying "LegacyETHRegistrarController" (tx: 0x75999d4a5c2df53a25b783a9ee504b336fc0dd735e793c442f91dff77ff0e7e9)...: deployed at 0xA4E95fFfDd3115e8e9d6b2897fD1E89ff4B1680E with 1854059 gas
Adding controller as controller on registrar (tx: 0x8bace3110fb58f86c523427688f2e005a0ecf08062317f77583176e4e0260e37)...
Setting controller of ReverseRegistrar to controller (tx: 0xb429e2246cbbf39f0e774948c7bd12c7841b138ca5ff33712b44b138f244322f)...
Running unwrapped name registrations...
ETHRegistrarController address 0xad63ED718aA7885Eb3f02fB4c0B9d6bD440d0cdF
Adding ETHRegistrarController as a controller of NameWrapper (tx: 0xf7a978dd302bb8f9d4ffe8f830b828b703c4e29dbdc8862beeccf6194b6ea38f)...
Adding ETHRegistrarController as a controller of ReverseRegistrar (tx: 0x1bf8061fe03bd6cd35de4a02641a337ebe6438be66b368816739da7538d56ad4)...
PublicResolver address 0x62950cEd133FabD4417e68C92a8031Fa36a12eC6
Setting default resolver on ReverseRegistrar to PublicResolver (tx: 0xbf0230124f7424200ac5f1724dd1e370134817c0d61a9793d29f99d9e4979fec)...
Setting NameWrapper interface ID 0x1aded71e on .axl resolver (tx: 0xb7bc8daefbf5ac451034aeeef0bc196d57fa5e2a4e80270b3928f22fafae6f17)...
Setting ETHRegistrarController interface ID 0x1aded71e on .eth resolver (tx: 0xbc0e2bf1b8e61e07e780e375e4a6dd84be7ccd860af3f40966729ad90ca17eb9)...

## npm package

This repo doubles as an npm package with the compiled JSON contracts

```js
import {
  BaseRegistrar,
  BaseRegistrarImplementation,
  BulkRenewal,
  ENS,
  ENSRegistry,
  ENSRegistryWithFallback,
  ETHRegistrarController,
  FIFSRegistrar,
  LinearPremiumPriceOracle,
  PriceOracle,
  PublicResolver,
  Resolver,
  ReverseRegistrar,
  StablePriceOracle,
  TestRegistrar
} from '@ensdomains/ens-contracts'
```

## Importing from solidity

```
// Registry
import '@ensdomains/ens-contracts/contracts/registry/ENS.sol';
import '@ensdomains/ens-contracts/contracts/registry/ENSRegistry.sol';
import '@ensdomains/ens-contracts/contracts/registry/ENSRegistryWithFallback.sol';
import '@ensdomains/ens-contracts/contracts/registry/ReverseRegistrar.sol';
import '@ensdomains/ens-contracts/contracts/registry/TestRegistrar.sol';
// EthRegistrar
import '@ensdomains/ens-contracts/contracts/ethregistrar/BaseRegistrar.sol';
import '@ensdomains/ens-contracts/contracts/ethregistrar/BaseRegistrarImplementation.sol';
import '@ensdomains/ens-contracts/contracts/ethregistrar/BulkRenewal.sol';
import '@ensdomains/ens-contracts/contracts/ethregistrar/ETHRegistrarController.sol';
import '@ensdomains/ens-contracts/contracts/ethregistrar/LinearPremiumPriceOracle.sol';
import '@ensdomains/ens-contracts/contracts/ethregistrar/PriceOracle.sol';
import '@ensdomains/ens-contracts/contracts/ethregistrar/StablePriceOracle.sol';
// Resolvers
import '@ensdomains/ens-contracts/contracts/resolvers/PublicResolver.sol';
import '@ensdomains/ens-contracts/contracts/resolvers/Resolver.sol';
```

##  Accessing to binary file.

If your environment does not have compiler, you can access to the raw hardhat artifacts files at `node_modules/@ensdomains/ens-contracts/artifacts/contracts/${modName}/${contractName}.sol/${contractName}.json`


## Contracts

## Registry

The ENS registry is the core contract that lies at the heart of ENS resolution. All ENS lookups start by querying the registry. The registry maintains a list of domains, recording the owner, resolver, and TTL for each, and allows the owner of a domain to make changes to that data. It also includes some generic registrars.

### ENS.sol

Interface of the ENS Registry.

### ENSRegistry

Implementation of the ENS Registry, the central contract used to look up resolvers and owners for domains.

### ENSRegistryWithFallback

The new impelmentation of the ENS Registry after [the 2020 ENS Registry Migration](https://docs.ens.domains/ens-migration-february-2020/technical-description#new-ens-deployment).

### FIFSRegistrar

Implementation of a simple first-in-first-served registrar, which issues (sub-)domains to the first account to request them.

### ReverseRegistrar

Implementation of the reverse registrar responsible for managing reverse resolution via the .addr.reverse special-purpose TLD.


### TestRegistrar

Implementation of the `.test` registrar facilitates easy testing of ENS on the Ethereum test networks. Currently deployed on Ropsten network, it provides functionality to instantly claim a domain for test purposes, which expires 28 days after it was claimed.


## EthRegistrar

Implements an [ENS](https://ens.domains/) registrar intended for the .eth TLD.

These contracts were audited by ConsenSys dilligence; the audit report is available [here](https://github.com/ConsenSys/ens-audit-report-2019-02).

### BaseRegistrar

BaseRegistrar is the contract that owns the TLD in the ENS registry. This contract implements a minimal set of functionality:

 - The owner of the registrar may add and remove controllers.
 - Controllers may register new domains and extend the expiry of (renew) existing domains. They can not change the ownership or reduce the expiration time of existing domains.
 - Name owners may transfer ownership to another address.
 - Name owners may reclaim ownership in the ENS registry if they have lost it.
 - Owners of names in the interim registrar may transfer them to the new registrar, during the 1 year transition period. When they do so, their deposit is returned to them in its entirety.

This separation of concerns provides name owners strong guarantees over continued ownership of their existing names, while still permitting innovation and change in the way names are registered and renewed via the controller mechanism.

### EthRegistrarController

EthRegistrarController is the first implementation of a registration controller for the new registrar. This contract implements the following functionality:

 - The owner of the registrar may set a price oracle contract, which determines the cost of registrations and renewals based on the name and the desired registration or renewal duration.
 - The owner of the registrar may withdraw any collected funds to their account.
 - Users can register new names using a commit/reveal process and by paying the appropriate registration fee.
 - Users can renew a name by paying the appropriate fee. Any user may renew a domain, not just the name's owner.

The commit/reveal process is used to avoid frontrunning, and operates as follows:

 1. A user commits to a hash, the preimage of which contains the name to be registered and a secret value.
 2. After a minimum delay period and before the commitment expires, the user calls the register function with the name to register and the secret value from the commitment. If a valid commitment is found and the other preconditions are met, the name is registered.

The minimum delay and expiry for commitments exist to prevent miners or other users from effectively frontrunnig registrations.

### SimplePriceOracle

SimplePriceOracle is a trivial implementation of the pricing oracle for the EthRegistrarController that always returns a fixed price per domain per year, determined by the contract owner.

### StablePriceOracle

StablePriceOracle is a price oracle implementation that allows the contract owner to specify pricing based on the length of a name, and uses a fiat currency oracle to set a fixed price in fiat per name.

## Resolvers

Resolver implements a general-purpose ENS resolver that is suitable for most standard ENS use-cases. The public resolver permits updates to ENS records by the owner of the corresponding name.

PublicResolver includes the following profiles that implements different EIPs.

- ABIResolver = EIP 205 - ABI support (`ABI()`).
- AddrResolver = EIP 137 - Contract address interface. EIP 2304 - Multicoin support (`addr()`).
- ContentHashResolver = EIP 1577 - Content hash support (`contenthash()`).
- InterfaceResolver = EIP 165 - Interface Detection (`supportsInterface()`).
- NameResolver = EIP 181 - Reverse resolution (`name()`).
- PubkeyResolver = EIP 619 - SECP256k1 public keys (`pubkey()`).
- TextResolver = EIP 634 - Text records (`text()`).
- DNSResolver = Experimental support is available for hosting DNS domains on the Ethereum blockchain via ENS. [The more detail](https://veox-ens.readthedocs.io/en/latest/dns.html) is on the old ENS doc.

## Developer guide

### How to setup

```
git clone https://github.com/ensdomains/ens-contracts
cd ens-contracts
yarn
```

### How to run tests

```
yarn test
```

### How to publish

```
yarn pub
```

### Release flow

Smart contract development tends to take a long release cycle. To prevent unnecesarily dependency conflicts, please create a feature branch (`features/$BRNACH_NAME`) and raise a PR against the feature branch. The feature branch must be merged into master only after the smart contracts are deployed to the Ethereum mainnet.
