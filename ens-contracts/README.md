# ENS

[![Build Status](https://travis-ci.org/ensdomains/ens-contracts.svg?branch=master)](https://travis-ci.org/ensdomains/ens-contracts)

For documentation of the ENS system, see [docs.ens.domains](https://docs.ens.domains/).

## Deployments

### ETH Goerli

deploying "ENSRegistry" (tx: 0x1652e016cbcd321d60d1d5f0384779fc70ded1567ffbbd10481e27e0ef4fdf33)...: deployed at 0xf7AEB7f57B3Ae41dAE3793545A6BF792C4c18688 with 743372 gas
deploying "Root" (tx: 0xc90ad20b14f4074ba50ef0037987d8db93f46097030f296619bd3a484fe7c2ce)...: deployed at 0xA64120b3E2Cf1B5B7c187A1D63Ebe24e4Ea74cc5 with 665132 gas
Setting owner of root node to root contract (tx: 0xe80acbf2d21aaccad294757128b05883330b1ecb8e8a602e8d672c03d6e533a8)...
Transferring root ownership to final owner (tx: 0x452b3cb2f15f2263e892ccfd9d161d837c4e2d08ad4b18b2c5db1fd838dfad0e)...
Setting final owner as controller on root contract (tx: 0x576edf85053b19287a0c1163ce6425259a0fc68a454552d8a986d14f2132dc20)...
deploying "BaseRegistrarImplementation" (tx: 0x18ec28db046a96d11644229dfb91e7fe3111b7f7c74e9994c6081076511bbba7)...: deployed at 0xB3253e807c7f96A6F7DD682eFdDd4DD04d024367 with 2119237 gas
Adding owner as controller to registrar (tx: 0x0ab8d3a2f624a73220cbc89974b664eb6cebb942197dfe634d5a44353cf492a1)...
Setting owner of eth node to registrar on root (tx: 0xb77e4440e11ea4223c5c30e9ac9922de259c9717ca1b3fdb3acae2311c971d44)...
deploying "DummyOracle" (tx: 0x219be17e8ab7adaadcf526237936386e14cd005ea089f1cfc0d2350d17e1d667)...: deployed at 0xEe684460f8153948a927929973bFE69aE9c75E9f with 114009 gas
deploying "StablePriceOracleUSD" (tx: 0x9b95f1d302264d6fee53fb7463ecb3002708f8e0d55df32d6473e8b52e3ebe13)...: deployed at 0xb5D38cBac62702AeB8a07F97Dd9e7bD48f75a3e7 with 532591 gas
deploying "StaticMetadataService" (tx: 0xbed416f0d5471acd7220495eb3460a04046215c1b317cf436391cf39d5d2d8d1)...: deployed at 0xa3E4062dcb9bb1822ABC945Ea705244ad2f72698 with 240222 gas
deploying "NameWrapper" (tx: 0xc60a594bc935195b19e9742519f208870a681d460fcf323952473c4e2c90f22a)...: deployed at 0xbb8e47057b41035c52C4Cc066b9E298de660Cc72 with 5274625 gas
Adding NameWrapper as controller on registrar (tx: 0x248888b94fa00abd598a3ad2a006c4cc30d963d8d880190e74dea95653f7d026)...
deploying "ReverseRegistrar" (tx: 0x64aa194f37edfd016e08a3ec381965bf98a6d0078ef87cc0128e1dd476745d25)...: deployed at 0x92150B26308B241308EAFa027eF2f40E43383040 with 1011553 gas
Setting owner of .reverse to owner on root (tx: 0x46bf3bf841efd5b1eb76133f92e66a50da8ac77a9c634f0c724cda40f60e281f)...
Setting owner of .addr.reverse to ReverseRegistrar on registry (tx: 0x5467a56187b05ca4dcb22be153880c09e8d64fce0e0e6859e1fdd08591d05abf)...
deploying "LegacyETHRegistrarController" (tx: 0xe2186587bcdd3da169c2f11e2f6469386fb586f637794aee7eb3e2f269eb161c)...: deployed at 0x9E75c4770846bFcaDb50251BC57A3899578B64EB with 1854059 gas
Adding controller as controller on registrar (tx: 0x8b0cf5fc31ece6b2f06dde916b09292034d8b380550957bf429ea231cc065811)...
Setting controller of ReverseRegistrar to controller (tx: 0xef1c29aa6b25d54e867689d5115b288b1b4c9776102fd04474713f3c095f1d04)...
Running unwrapped name registrations...
ETHRegistrarController address 0x156980EC73fC9ff9fcF73e03c09365e7b3E45d7D
Adding ETHRegistrarController as a controller of NameWrapper (tx: 0xec1808a38d2bb4a72d5bdb573189b4d66d49f9ffdf127e4622591a0d43e8ce74)...
Adding ETHRegistrarController as a controller of ReverseRegistrar (tx: 0x395c2177780fe15562421332d0b361f02c81ad4ef33228c11c2f76a1b076fb0d)...
PublicResolver address 0x7e82FA9f9718a23cA4813D434C035b3Ca5C58Cc2
Setting default resolver on ReverseRegistrar to PublicResolver (tx: 0x0837bdc647660e5167aac0b4e618c675f4cab7f1f51fee22bd5b8e53b94308b5)...
Setting NameWrapper interface ID 0x1aded71e on .axl resolver (tx: 0x313dcb4d38882c19caec27db67f192227492d9361986464b280e93209108e66a)...
Setting ETHRegistrarController interface ID 0x1aded71e on .eth resolver (tx: 0xffee3402175247bac2260d01cc9ec502738ea80dde119455f8d6e6b51124b487)...

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
