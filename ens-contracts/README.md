# ENS

[![Build Status](https://travis-ci.org/ensdomains/ens-contracts.svg?branch=master)](https://travis-ci.org/ensdomains/ens-contracts)

For documentation of the ENS system, see [docs.ens.domains](https://docs.ens.domains/).

## Deployments

### ETH Goerli

starting
deploying "ENSRegistry" (tx: 0x22aca70edba822bfa1213dd11b191d094d756486a9f844a67f9a584c3a5d8ba8)...: deployed at 0x5611bFeAB50674a1A0D09d28a2372a8A2A727F95 with 743372 gas
deploying "Root" (tx: 0x57f18823844b138f9e648b5162a1ede665eb6b35a281dac34691f88db947b315)...: deployed at 0xE2d9138F2798581132794F5594d05094da516d26 with 665132 gas
Setting owner of root node to root contract (tx: 0x913ab47df04674862c4ab96952de8fba5374ba86a7187670eb0270cea8f3a005)...
Transferring root ownership to final owner (tx: 0xc1a9010ab285cf2246b34708bba81b83799557b377153e1cc54f5e4081ff8870)...
Setting final owner as controller on root contract (tx: 0x847e4e78cebb97d1a5a2985b89f7095e1aa6cff25b6afa5350e8383e06533447)...
deploying "BaseRegistrarImplementation" (tx: 0x58504e24503eacbc64fff375df5d52f32e4e2c1b33d1eeb03b59709e3a38b1f1)...: deployed at 0x0955066A09756DFffBC290BEb4fF85D3DF5a4336 with 2119237 gas
Adding owner as controller to registrar (tx: 0x043e62704b340ca01c0e7f8cbefebafa10375eb0a33d6496ab9ff6a4da6132d8)...
deploying "DummyOracle" (tx: 0x652c0fd67ba1eee6c27b2dd97b7dd27e4007ceccb3a80aae6f818fdacd56c09f)...: deployed at 0x6300cFbd36d7545Ab2933392925735217b84173d with 114009 gas
deploying "StablePriceOracleUSD" (tx: 0xac0ef958d201ef3136dc97ac4d8aa8b39bd59aa828d0750cec403f127ec8615d)...: deployed at 0xF9B25b4106ff1d94720Dff402f66322c8a73e064 with 532591 gas
deploying "StaticMetadataService" (tx: 0xb47ac6dd2a1c4bf9411d54cf780cd934a7ee09e7e57438cd7445812d2f1e6ee4)...: deployed at 0x625f76EafB6c6b303485306aFAB76067F0e63BB3 with 240222 gas
deploying "NameWrapper" (tx: 0xbbea2e223fe9bd3904670381d55c9546e52066e2aca3f2250c9da36046cb76ef)...: deployed at 0xd032792b8d8B60bFc82fAa3AE5Fec62BECD67177 with 5274625 gas
Adding NameWrapper as controller on registrar (tx: 0x2e739e31ed21b67e77e65930170b3305ebd6714a24d8608651d2629c97dad808)...
deploying "ReverseRegistrar" (tx: 0x7fc00a1b8f27aa44fb4f9ba5d24cb593961571f07472f8dc544442a26a5737bb)...: deployed at 0xF6769c9aC171fe37041D2C05efb3496F293937DF with 1011553 gas
Setting owner of .reverse to owner on root (tx: 0x49c71d93c88a1f62401d981273d5d27d9801e5d4b094e8ed5d0b630126e08bfc)...
Setting owner of .addr.reverse to ReverseRegistrar on registry (tx: 0x6dbca5f0e2c9cb4ba4b863a4489f44caae539e9f4cdaa1933b02d3c0e39afa5a)...
deploying "LegacyETHRegistrarController" (tx: 0xa97c0b5789b179a6d9b4e8d1af5bc13a6d7160e2ea6123bfe9f1609033e71a54)...: deployed at 0x57426e6Ae4677816927905aB0328c185DcE6C62C with 1854059 gas
Adding controller as controller on registrar (tx: 0xbfb547cc3ca533e4703eac1b2353e8ba6ba1a7f96079fd9c39ff216a9bd664fa)...
Setting controller of ReverseRegistrar to controller (tx: 0x064e0d5236788ab553a4badb282c46e223aa784369850ed1ef788abec183586e)...
Running unwrapped name registrations...
ETHRegistrarController address 0x22B20Ab1FC50f92E3CB384f237212257Fd56D640
Adding ETHRegistrarController as a controller of NameWrapper (tx: 0xa2a1ff314f057ac7fb21a1f6be6e4b4cd9264de30289ef9acaa8069345a650fc)...
Adding ETHRegistrarController as a controller of ReverseRegistrar (tx: 0x88e80fabe670574575de183223f66296cdb8911009f385dc8bddee843600b658)...
PublicResolver address 0x7BB89F0Ba25c371E0B2dA2b50e0a513d512D1c3a
Setting default resolver on ReverseRegistrar to PublicResolver (tx: 0x06253abf7a71193d9c28a9d9297e6ad3a01f3b67129487048352e0f19b2014c9)...
Setting NameWrapper interface ID 0x1aded71e on .axl resolver (tx: 0x8c1a9cfe6c885b26a7afda0b238c0304d2b5f0dcbe8e929862aa08f2d76d49d7)...
Setting ETHRegistrarController interface ID 0x1aded71e on .eth resolver (tx: 0xfa03385348bc3d054f523c30f1b03caf422449db946018479db4f24b4b0c098b)...
Setting owner of eth node to registrar on root (tx: 0x4f6ab21ea4c9f4df32fc317eba82c0e0af64dd44e8e82f678495a9f3711feee0)...

## Moonbase

starting
deploying "ENSRegistry" (tx: 0x20aaf46c4f32cf3cfadd3c3439a15f3673bbe8ce06a8b6f4abef4fdcbead815e)...: deployed at 0x7D35D5Bc1Ad11a82a2ea68f629Bb4a4632fE5777 with 743372 gas
deploying "Root" (tx: 0xb2156e5969f2f6e4d046d9c8969e001b637ddb290e8467839e5d1aac9141d1ed)...: deployed at 0x3F0184acC8ac3f1c74dcCd78fA851B25AA3638c2 with 665132 gas
Setting owner of root node to root contract (tx: 0xf0e54bc5547a58bb88731444948e3a5e23ddad2a9c5460a954d76b45b0c677d2)...
Transferring root ownership to final owner (tx: 0x814f76634a4eb8ae9f8bc306075eca35e048a657d9ed0b5fbb2873c3f9866fe5)...
Setting final owner as controller on root contract (tx: 0xdf2cbac585d2a0a5bdda14e8c812214abf10c86a0e7fda72bf2958bf22301b31)...
deploying "BaseRegistrarImplementation" (tx: 0x1d8eb5d6ff5a4f30ff0d55772979773831bd8d40152f2485ff0bb9471251a0da)...: deployed at 0x092423a50857Ee9493a1b2eaD79DF2e6D0899c12 with 2119237 gas
Adding owner as controller to registrar (tx: 0x2b50a688b0a9c1d91e15762428ba617e45c290b74dc517eecc277ac9ad17d55e)...
deploying "DummyOracle" (tx: 0xe9ac1e1c53a72cb1f4a6d7cb11e20c3cddea6d9490fce740dd366e41c0db1057)...: deployed at 0xC1ab3d8bB321434C320837C32deA70dcfc6c85C2 with 114009 gas
deploying "StablePriceOracleUSD" (tx: 0x79e2faf59e48040e390b34e4377b5b618538448e44c43f99325e8af53d83c267)...: deployed at 0xbba7C056ac1E06fc08C451EeAA13893B0E8A1c34 with 532591 gas
deploying "StaticMetadataService" (tx: 0x9ce3b4875221a080a140be81464cb05883f638c195e2e648aee1ed992ce8d021)...: deployed at 0x9149CF9e73f67B259490ec533c635fCFf28D53eA with 240222 gas
deploying "NameWrapper" (tx: 0x9a709276af3d70c3c86ab3f340e9fb99a00e4657ed6bc953d55bdfe8feeabb82)...: deployed at 0xed5696b468900Ba43Fe5E3f78eE76D5c8570Ed0f with 5274625 gas
Adding NameWrapper as controller on registrar (tx: 0xed45fc49222f3190ad50ac0da5f6d875402fba024b61aee1e127a199af9e857b)...
deploying "ReverseRegistrar" (tx: 0x99936616cbb04c3467287499f2725c2a5d14ccebb1e0e7803e8ade30b04c8bde)...: deployed at 0xE6579A93488A6fa66FA4d3F8A35873d1aC730d46 with 1011553 gas
Setting owner of .reverse to owner on root (tx: 0x0c3c9740f02bafc028a7e170e9876b98b439905dc67ca02d3feffaf722891fa4)...
Setting owner of .addr.reverse to ReverseRegistrar on registry (tx: 0x569f8e2660a2354dc53badd97d5ae44f26ca96133f576980a88e8523f192fecd)...
deploying "LegacyETHRegistrarController" (tx: 0x14d36c0b0fec9219544b3ce52b0bd2e2a01a623ca05d18c6fc294f13d44ee6d2)...: deployed at 0xdE78d43279b0C72FD533193f1b67DedF92c9F374 with 1854059 gas
Adding controller as controller on registrar (tx: 0x6e5b49249fa67eff275125c1d7b14b54776de577df4d257136f75c50dab655da)...
Setting controller of ReverseRegistrar to controller (tx: 0x46c021b3b085115c57f3711a8c1ef9f309ab3f0cc6254f8d4eb92fae6f2e7c1f)...
Running unwrapped name registrations...
ETHRegistrarController address 0x96277aA0f41Bf47cAb788cCE3b710a8b2542cEc3
Adding ETHRegistrarController as a controller of NameWrapper (tx: 0x4bc155a01b4231b46eec9e2ceb99cf41290ef9a205f737bf1690f9de4e493c26)...
Adding ETHRegistrarController as a controller of ReverseRegistrar (tx: 0xdfc4756edeaa1a1c52cf9389f89fe362627087aa865b334e1ecc5472e763925b)...
PublicResolver address 0xE5a7fE5464513806ad89D589716C9764289cc4c2
Setting default resolver on ReverseRegistrar to PublicResolver (tx: 0xabc36b5f4cc2270465c36b5fdece2e581831bf80c95426ec9869ded1751daa9b)...
Setting NameWrapper interface ID 0x1aded71e on .axl resolver (tx: 0xddb5464220b27539bd643fc32ee5006688e6b615447e1eddecdc8716087aa6ab)...
Setting ETHRegistrarController interface ID 0x1aded71e on .eth resolver (tx: 0x7c668e472d45c561f743d147af5edc7b389a23f40ff94d835a7908e74e757a94)...
Setting owner of eth node to registrar on root (tx: 0xa9bfdf94c1284bfb93f69d48675901188b0815ff92b64689a1e15fc24e16ff81)...

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
