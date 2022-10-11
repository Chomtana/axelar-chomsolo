# ENS

[![Build Status](https://travis-ci.org/ensdomains/ens-contracts.svg?branch=master)](https://travis-ci.org/ensdomains/ens-contracts)

For documentation of the ENS system, see [docs.ens.domains](https://docs.ens.domains/).

## Deployments

### ETH Goerli

starting
deploying "ENSRegistry" (tx: 0x0bb8e1c5777cd7a91d8f200e040118353f7c045c372199c7d1bc0f28533d3553)...: deployed at 0x9fa32a25F4478C78D62414e0118DC85BAA8506B2 with 743372 gas
deploying "Root" (tx: 0x59de2442a1de0b557f9c43219af1e1c680189cd4f4b45df5bd45e2417b2dbf9d)...: deployed at 0xFfebbb091C722f51Cc8348D9A4dB40b3732E6C9E with 665132 gas
Setting owner of root node to root contract (tx: 0xea89900c38cc388171240d21f47b1d27d41d3975317c4e41cb43ef8be5db4cdb)...
Transferring root ownership to final owner (tx: 0x7b1ec1c481353ca881261713270c4e10c17270ba6a8ef234a86939b431e28bbc)...
Setting final owner as controller on root contract (tx: 0x165fc8a7b96abf94338b012324c76fc14045097bc8e5136271385f207d4cdbc2)...
deploying "BaseRegistrarImplementation" (tx: 0x51f6e49a81160c9220f2429b980ed028937edb2f82f23fcced1c9e7aa75a1468)...: deployed at 0x645EDA75D5Fc4c56f973d8992632B12Bb8F066C4 with 2119237 gas
Adding owner as controller to registrar (tx: 0x68d5ae5f39882f50ccb2eaae2b6af4ae1eeb8986467662362eba7fbac04b4a30)...
deploying "DummyOracle" (tx: 0xcd6fb8a5c860d3b490fbeac479822df5fb17adea4d94e4dcf7c2458140d00077)...: deployed at 0xbC0f504531274F66d46274b337c053315cd442b0 with 114009 gas
deploying "StablePriceOracleUSD" (tx: 0x363c0470e52c361b439fd7bc97fc0b2bf820dbc32425cebdfe633a00b6e843cc)...: deployed at 0x68a75AB4Db117918Bf236cd3D6d20b9Dd8FECEb2 with 532591 gas
deploying "StaticMetadataService" (tx: 0x33364da2685fc478af5793c0afd46a4366c3f5e2462b6e47d57a672d52846855)...: deployed at 0xFd8802437404c74FD95c0572Ad362e69D8a64A62 with 240222 gas
deploying "NameWrapper" (tx: 0xd8c6e941073f8ee81df42639e9bc99b757d4a2115864bf4c51a800afce550223)...: deployed at 0xED5e7987891006EFc72F9B0b24D3134Bde0270bb with 5274625 gas
Adding NameWrapper as controller on registrar (tx: 0x43ea2b09139494ebfc4116df14404fd85f1d297ee01eae85d7a0991db6a5000d)...
deploying "ReverseRegistrar" (tx: 0xdd0dae6d55e5db9a5d10b16f6a99d9a913fcad29bf37aa0661f60088eff6a5ee)...: deployed at 0x84e97E976C654E2Af64ff829e2EaB814D0Fb5147 with 1011553 gas
Setting owner of .reverse to owner on root (tx: 0xef40da74bbd1d6ceff4e54ba20603394f6657c7d94a51c656ac3d95ac68df19f)...
Setting owner of .addr.reverse to ReverseRegistrar on registry (tx: 0xad371eaba7b0de74ce3b0e7222c3fa8e39abd5eb11d1280e6a7df51444610dc6)...
deploying "LegacyETHRegistrarController" (tx: 0x72b42c76b8c19841a87c232bbfda222d5defe877bfce16a99021da39eaea8be9)...: deployed at 0xaF1bF9bb91Ac06516e84c87A22F4D59fa36dc9Fa with 1854059 gas
Adding controller as controller on registrar (tx: 0xf9eb1d3d7be97f022792040bd457355267755a3d9d12c9c3a6fc87d33969c0fa)...
Setting controller of ReverseRegistrar to controller (tx: 0x4824a17ae2511b0e2b7fe504d48c6842b54d1540d2dccf86381fe2b9edbd7b01)...
Running unwrapped name registrations...
ETHRegistrarController address 0x673bD3fAdD64AE5dA7b6E74Ab0eA899586cd5eD8
Adding ETHRegistrarController as a controller of NameWrapper (tx: 0x7337d2250749a24a3c29516b9d8462343f9b848dc54e6c34a80d794464a1b9a6)...
Adding ETHRegistrarController as a controller of ReverseRegistrar (tx: 0xd7d334686a11a99096319aa25dc2dd8341b7f3caafc001b194f92f8f9b546cc1)...
PublicResolver address 0x3aC5105c124a1710096ADa0d9074bf31e9E06977
Setting default resolver on ReverseRegistrar to PublicResolver (tx: 0xa99ae86c90d587c0806e842c3819312d851245fab8fcf0da4b3564e9be9a1297)...
Setting NameWrapper interface ID 0x1aded71e on .axl resolver (tx: 0xa45cf1df2bb722bafa45a1cdf7f3bca896605abda22c1426fbd3fd9bacbe9ebe)...
Setting ETHRegistrarController interface ID 0x1aded71e on .eth resolver (tx: 0xdf0801bee4997f01f1eef92c5386d6c3f1edf11700232d15940e50b6d5612cab)...
Setting owner of eth node to registrar on root (tx: 0x4590602df1a3a918de57b864a37bdcd86fb06472ed76e26262ecc6e68092df0b)...

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
