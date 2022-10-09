# ENS

[![Build Status](https://travis-ci.org/ensdomains/ens-contracts.svg?branch=master)](https://travis-ci.org/ensdomains/ens-contracts)

For documentation of the ENS system, see [docs.ens.domains](https://docs.ens.domains/).

## Deployments

### ETH Goerli

deploying "ENSRegistry" (tx: 0x3e2562da9819e3ad4720ad15ff3bed2c3ccc371f13d5351ed9fb98bfbc6ea05c)...: deployed at 0x7a04Ea1F1707e2Ef3db4AD0fB24DCe4692a770cc with 743372 gas
deploying "Root" (tx: 0xa4d4c92dc9a8428e14bab5d96b1bc280dc2cc0e8a6b3047e31f52d4d14900975)...: deployed at 0x8c11DeE090e6811b1b0e2c8c388397760B00e874 with 665132 gas
Setting owner of root node to root contract (tx: 0xf83db3c54e4975eee72ce37cf55f8ee243ffce9aa50d79bdc570663182e846a7)...
Transferring root ownership to final owner (tx: 0xe1609ba5b3db09e0fe2575fb9be27798427391dc66500ce6ffd97fcd14d0039c)...
Setting final owner as controller on root contract (tx: 0xcff21f5b1da45c6602d2f5b6be060ab850cba1ea6b958d9af9cc09658860d931)...
deploying "BaseRegistrarImplementation" (tx: 0x8931aedfcffc9cc0db1d735886e766a63c38bd9fa520949f2764c5f4ce17e1fa)...: deployed at 0x844cCDa95040f1Cd3E887BDc15C2B6eB376de77e with 2119237 gas
Adding owner as controller to registrar (tx: 0x64eeb55b570748034e4b6cffd4e3cd72e263e2a1ca3901d0916d43cccd156176)...
Setting owner of eth node to registrar on root (tx: 0xe25f49ac580b675024253e37492e9422563f171c1fc5358589331f432fb179eb)...
deploying "DummyOracle" (tx: 0x9655baee66e336f4cf06abee5bf5433b502004aa1297e6b152295ba09825f336)...: deployed at 0x7D35D5Bc1Ad11a82a2ea68f629Bb4a4632fE5777 with 114009 gas
deploying "StablePriceOracleUSD" (tx: 0x375ffdbf7933bab47195096387ec1d7d665b8adb0a065a85547b3a26ec8fccb1)...: deployed at 0x3F0184acC8ac3f1c74dcCd78fA851B25AA3638c2 with 510468 gas
deploying "StaticMetadataService" (tx: 0x5a8d2aeef8722d508273d99f4dddc0384081e39ad90f9fbfa5a9cbdfc5bffaf3)...: deployed at 0x06a9E59c99E7340Ab1aA152D78AF153Ea9b69Def with 240222 gas
deploying "NameWrapper" (tx: 0x0d9d5755c28b2206ab54936d97690cdbfa054d217d3764893c1743f6f7dd1ffe)...: deployed at 0xe4b95BcD24d220c1A17E0B8a060c7c18e7B8A551 with 5274625 gas
Adding NameWrapper as controller on registrar (tx: 0xe3f25ca4177b843f7555095a181e53fa67c445be12026375499120582fd79f48)...
deploying "ReverseRegistrar" (tx: 0x98d9916cd73fc2a3eb7e37149bcea77488604ee108cb12257420bc7bf3cd9812)...: deployed at 0xc488722f8a675B6b49DcB3D209B650d7185B75Df with 1011553 gas
Setting owner of .reverse to owner on root (tx: 0x9aa8177f5c4569f52fb157f939e14b697f97231cf6d29b37e8fba4532498eb1b)...
Setting owner of .addr.reverse to ReverseRegistrar on registry (tx: 0x95d1b0c03fb15f414fce0cf2d12f65a8d9970e80bd2930a369a7f9da66900bf9)...
deploying "LegacyETHRegistrarController" (tx: 0xd5a68ae7cadd15083fbf9e3abfe5e588cdb8c39857ad4316a6ecef49b55121c0)...: deployed at 0xC1ab3d8bB321434C320837C32deA70dcfc6c85C2 with 1854059 gas
Adding controller as controller on registrar (tx: 0x3d43c06ef89eacd9879fb8df13a81a33f98a280f4d87768835768c271a4fc580)...
Setting controller of ReverseRegistrar to controller (tx: 0x1d861188a622f3cddc0a95db8532c44ae97a3e861bc827409bc248fac5dc76d5)...
Running unwrapped name registrations...
Adding ETHRegistrarController as a controller of NameWrapper (tx: 0x2e9ecc0216e79eee8d8d46fb75f9d359b354975c2dfb3955110ff352462a618f)...
Adding ETHRegistrarController as a controller of ReverseRegistrar (tx: 0xfe486041a466f16db68bfcded5adf2c74214471ce4ca078a1497ad2072a60aeb)...
Setting default resolver on ReverseRegistrar to PublicResolver (tx: 0x7afe46867d9c90d5f6feca253e2af118bdb234ab4dab7750fdef089f830f025f)...
Setting NameWrapper interface ID 0x1aded71e on .axl resolver (tx: 0x085d7d7d5f020392aa103398201e8c912a7e30d977c068b7c6aae8b03bb93ec1)...
Setting ETHRegistrarController interface ID 0x1aded71e on .eth resolver (tx: 0x195de145fe65c2a0313ba329fe8e9b210d03942b5d5b494bb81924ab29590b7e)...

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
