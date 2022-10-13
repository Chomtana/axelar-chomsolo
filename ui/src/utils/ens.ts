import { BigNumber, Contract, ethers, Signer, utils } from "ethers";

import ENSRegistryABI from "../abi/ENSRegistry.json";
import ETHRegistrarControllerABI from "../abi/ETHRegistrarController.json";
import NameWrapperABI from "../abi/NameWrapper.json";
import PublicResolverABI from "../abi/PublicResolver.json";
import ERC20ABI from "../abi/IERC20.json";
import { AxelarQueryAPI, Environment, EvmChain, GasToken } from "@axelar-network/axelarjs-sdk";

const ADDRESS_ZERO = "0x0000000000000000000000000000000000000000";

export const ENS_ADDRESS = {
  5: {
    "WAXL": "0x23ee2343B892b1BB63503a4FAbc840E0e2C6810f",
    "ENSRegistry": "0x5611bFeAB50674a1A0D09d28a2372a8A2A727F95",
    "ETHRegistrarController": "0x22B20Ab1FC50f92E3CB384f237212257Fd56D640",
    "NameWrapper": "0xd032792b8d8B60bFc82fAa3AE5Fec62BECD67177",
    "PublicResolver": "0x7BB89F0Ba25c371E0B2dA2b50e0a513d512D1c3a",
    "RPC_URL": "https://goerli.infura.io/v3/8471ad43100b48029d2ecf04a763c230",
  },
  97: {
    "WAXL": "0xfC3B4feb754d8082F745940347600D373f03dcaC",
    "ENSRegistry": "0x2699581BB0d22aa9E848467858e14F4401A1E446",
    "ETHRegistrarController": "0x2EC6BeFf204Aa483ff03DD47d3B764063Fa2Bf2A",
    "NameWrapper": "0xFD2d987Cb5ef7dC5DBD86955fd4f0482c5B5a7Fc",
    "PublicResolver": "0x844cCDa95040f1Cd3E887BDc15C2B6eB376de77e",
    "RPC_URL": "https://data-seed-prebsc-2-s2.binance.org:8545",
  },
  43113: {
    "WAXL": "0xa8B51e6517f9A6Ab7b247bF10b71b1A738eD8E50",
    "ENSRegistry": "0x2699581BB0d22aa9E848467858e14F4401A1E446",
    "ETHRegistrarController": "0x2EC6BeFf204Aa483ff03DD47d3B764063Fa2Bf2A",
    "NameWrapper": "0xFD2d987Cb5ef7dC5DBD86955fd4f0482c5B5a7Fc",
    "PublicResolver": "0x844cCDa95040f1Cd3E887BDc15C2B6eB376de77e",
    "RPC_URL": "https://api.avax-test.network/ext/bc/C/rpc",
  },
  4002: {
    "WAXL": "0x66A5df72619982a2Ef49e8317079b6806d56f66B",
    "ENSRegistry": "0x2699581BB0d22aa9E848467858e14F4401A1E446",
    "ETHRegistrarController": "0x2EC6BeFf204Aa483ff03DD47d3B764063Fa2Bf2A",
    "NameWrapper": "0xFD2d987Cb5ef7dC5DBD86955fd4f0482c5B5a7Fc",
    "PublicResolver": "0x844cCDa95040f1Cd3E887BDc15C2B6eB376de77e",
    "RPC_URL": "https://rpc.testnet.fantom.network/",
  },
  1287: {
    "WAXL": "0xB4D56B6AD4DD2B48e68D2a26C25A04dC1c0eE393",
    "ENSRegistry": "0x7D35D5Bc1Ad11a82a2ea68f629Bb4a4632fE5777",
    "ETHRegistrarController": "0x96277aA0f41Bf47cAb788cCE3b710a8b2542cEc3",
    "NameWrapper": "0xed5696b468900Ba43Fe5E3f78eE76D5c8570Ed0f",
    "PublicResolver": "0xE5a7fE5464513806ad89D589716C9764289cc4c2",
    "RPC_URL": "https://rpc.testnet.moonbeam.network/",
  },
  80001: {
    "WAXL": "0x9c79782d2B13CAC0Fa2FB00D188104fe6f98E533",
    "ENSRegistry": "0x2EC6BeFf204Aa483ff03DD47d3B764063Fa2Bf2A",
    "ETHRegistrarController": "0xE6579A93488A6fa66FA4d3F8A35873d1aC730d46",
    "NameWrapper": "0xc488722f8a675B6b49DcB3D209B650d7185B75Df",
    "PublicResolver": "0xdE78d43279b0C72FD533193f1b67DedF92c9F374",
    "RPC_URL": "https://matic-mumbai.chainstacklabs.com",
  },
}

const CROSS_CHAIN_CONFIG = {
  5: {
    name: EvmChain.ETHEREUM,
    gasToken: GasToken.ETH,
  },
  97: {
    name: EvmChain.BINANCE,
    gasToken: GasToken.BINANCE,
  },
  43113: {
    name: EvmChain.AVALANCHE,
    gasToken: GasToken.AVAX,
  },
  4002: {
    name: EvmChain.FANTOM,
    gasToken: GasToken.FTM,
  },
  1287: {
    name: EvmChain.MOONBEAM,
    gasToken: GasToken.GLMR,
  },
  80001: {
    name: EvmChain.POLYGON,
    gasToken: GasToken.MATIC,
  },
}

export const COMMIT_TIME = 15; // 15 seconds for testnet

export const SUPPORTED_TOKENS = [
  {
    symbol: "WETH",
    address: "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6",
  },
  {
    symbol: "UNI",
    address: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
  }
]

export interface DomainChainData {
  chainId: number;
  address: string;
  name: string;
  enabled: boolean;
}

export interface DomainCompleteData {
  name: string;
  owner: string;
  expire: number;
  chains: DomainChainData[];
}

export function getENSRegistry(chainId, signer: Signer | ethers.providers.Provider): Contract {
  return new Contract(ENS_ADDRESS[chainId].ENSRegistry, ENSRegistryABI, signer);
}

export function getETHRegistrarController(chainId, signer: Signer | ethers.providers.Provider): Contract {
  return new Contract(ENS_ADDRESS[chainId].ETHRegistrarController, ETHRegistrarControllerABI, signer);
}

export function getNameWrapper(chainId, signer: Signer | ethers.providers.Provider): Contract {
  return new Contract(ENS_ADDRESS[chainId].NameWrapper, NameWrapperABI, signer);
}

export function getPublicResolver(chainId, signer: Signer | ethers.providers.Provider): Contract {
  return new Contract(ENS_ADDRESS[chainId].PublicResolver, PublicResolverABI, signer);
}

export function getWAXL(chainId, signer: Signer | ethers.providers.Provider): Contract {
  return new Contract(ENS_ADDRESS[chainId].WAXL, ERC20ABI, signer);
}

export function getProvider(chainId) {
  return new ethers.providers.JsonRpcProvider(ENS_ADDRESS[chainId].RPC_URL);
}

export function getNameHash(domain: string) {
  const parts = domain.split('.').reverse();
  let result = '0x0000000000000000000000000000000000000000000000000000000000000000';
  for (let part of parts) {
    result = utils.solidityKeccak256(['bytes32', 'bytes32'], [result, utils.keccak256(utils.toUtf8Bytes(part))])
  }
  return result;
}

export function getNameHashSimple(name: string) {
  const parts = name.split('.');
  if (parts.length > 1 && parts[parts.length] == 'axl') {
    name = parts.slice(0, -1).join('.');
  }
  return utils.keccak256(utils.toUtf8Bytes(name));
}

// Note: indexer is not implemented, I am using mocked one
export function getDomainsList(walletAddress: string): string[] {
  const data = window.localStorage.getItem("CHOMSOLO_AXLDOMAINS_LIST_" + walletAddress.toLowerCase());
  if (!data) return [];
  return JSON.parse(data)
}

export function addDomain(walletAddress: string, domain: string) {
  const domainsList = getDomainsList(walletAddress)
  domainsList.push(domain)
  window.localStorage.setItem("CHOMSOLO_AXLDOMAINS_LIST_" + walletAddress.toLowerCase(), JSON.stringify(domainsList));
}

export async function approveWAXL(chainId, signer: Signer, contractAddress: string) {
  const WAXL = getWAXL(chainId, signer);

  // Check allowance
  const allowance: BigNumber = await WAXL.allowance(await signer.getAddress(), contractAddress);
  // Don't do this in production
  if (allowance.gte(ethers.constants.MaxInt256)) {
    return;
  }

  await (await WAXL.approve(contractAddress, ethers.constants.MaxUint256)).wait();
}

export async function commitDomain(
  chainId,
  signer: Signer,
  name: string,
  duration: number,
  secret: string,
) {
  const params = [
    name,
    await signer.getAddress(),
    duration,
    secret,
    ENS_ADDRESS[chainId].PublicResolver,
    false,
    0,
    Math.floor(Date.now() / 1000) + duration,
  ];

  console.log(params)

  const nameHash = getNameHashSimple(name);

  const ETHRegistrarController = getETHRegistrarController(chainId, signer);

  console.log(ETHRegistrarController)

  const commitment = await ETHRegistrarController.makeCommitment(...params);
  // const commitment = await ETHRegistrarController.makeCommitment(
  //   "chom.axl",
  //   "0xf01Dd015Bc442d872275A79b9caE84A6ff9B2A27",
  //   31536000,
  //   "0x0000000000000000000000000000000000000000000000000000000036f6dc76",
  //   "0x62950cEd133FabD4417e68C92a8031Fa36a12eC6",
  //   false,
  //   0,
  //   1696959282,
  // );

  await (await ETHRegistrarController.commit(commitment, nameHash)).wait();

  return {
    commitment,
    params,
  }
}

export async function registerDomain(
  chainId,
  signer: Signer,
  commitmentParams: any[],
) {
  const ETHRegistrarController = getETHRegistrarController(chainId, signer);
  await (await ETHRegistrarController.register(...commitmentParams)).wait();
}

export async function getDomainExistsInChain(chainId, domain: string) {
  const node = getNameHash(domain);
  const NameWrapper = getNameWrapper(chainId, getProvider(chainId));
  const owner = await NameWrapper.ownerOf(node);
  return owner != ADDRESS_ZERO;
}

export async function getDomainOwnerAndChainInfo(domain: string) {
  const node = getNameHash(domain);

  // Iterate over all chains
  let result = ADDRESS_ZERO;
  const chains: number[] = [];

  for (const chainId in ENS_ADDRESS) {
    const NameWrapper = getNameWrapper(chainId, getProvider(chainId));
    const owner = await NameWrapper.ownerOf(node);

    if (owner != ADDRESS_ZERO) {
      result = owner;
      chains.push(parseInt(chainId));
    }
  }

  return {
    owner: result,
    chains: chains,
  }
}

export async function getDomainOwner(domain: string) {
  return (await getDomainOwnerAndChainInfo(domain)).owner;
}

export async function getDomainAddress(chainId, domain: string): Promise<string> {
  const node = getNameHash(domain);

  const PublicResolver = getPublicResolver(chainId, getProvider(chainId));
  console.log(PublicResolver)
  return await PublicResolver['addr(bytes32)'](node);
}

export async function setDomainAddress(chainId, signer: Signer, domain: string, address: string) {
  const node = getNameHash(domain);

  const PublicResolver = getPublicResolver(chainId, signer);
  await (await PublicResolver['setAddr(bytes32,address)'](node, address)).wait();
}

export async function getDomainAvailability(domain: string) {
  return await getDomainOwner(domain) === ADDRESS_ZERO;
}

export async function getDomainData(domain): Promise<DomainCompleteData> {
  const nameHash = getNameHash(domain);

  console.log(nameHash)

  let owner = ADDRESS_ZERO;
  let globalExpiry = 0;
  const chains: DomainChainData[] = [];

  for (const chainId in ENS_ADDRESS) {
    const NameWrapper = getNameWrapper(chainId, getProvider(chainId));
    console.log(BigNumber.from(nameHash).toString())
    const [ domainOwner, fuses, expiry ] = await NameWrapper.getData(BigNumber.from(nameHash).toString());
    console.log([ domainOwner, fuses, expiry ])
    if (domainOwner != ADDRESS_ZERO) {
      owner = domainOwner;
      globalExpiry = expiry;

      const address = await getDomainAddress(chainId, domain);

      chains.push({
        address,
        chainId: parseInt(chainId),
        name: CROSS_CHAIN_CONFIG[chainId].name,
        enabled: true,
      });
    } else {
      chains.push({
        address: ADDRESS_ZERO,
        chainId: parseInt(chainId),
        name: CROSS_CHAIN_CONFIG[chainId].name,
        enabled: false,
      });
    }
  }

  return {
    chains,
    owner,
    expire: globalExpiry * 1000,
    name: domain,
  }
}

export async function bridgeDomain(name, signer, sourceChainId, destinationChainId) {
  const sdk = new AxelarQueryAPI({
    environment: Environment.TESTNET,
  });

  const ETHRegistrarController = getETHRegistrarController(sourceChainId, signer);

  const gasFee = await sdk.estimateGasFee(
    CROSS_CHAIN_CONFIG[sourceChainId].name,
    CROSS_CHAIN_CONFIG[destinationChainId].name,
    CROSS_CHAIN_CONFIG[sourceChainId].gasToken,
  );

  let destinationChainNameHotfix = CROSS_CHAIN_CONFIG[destinationChainId].name;

  if (destinationChainNameHotfix.toLowerCase() == 'ethereum') {
    destinationChainNameHotfix = 'ethereum-2';
  }

  const tx = await ETHRegistrarController.bridgeDomain(name, destinationChainNameHotfix, ENS_ADDRESS[destinationChainId].ETHRegistrarController, ENS_ADDRESS[destinationChainId].PublicResolver, { value: gasFee })

  return tx;
}

export async function setSubnodeOwner(chainId, signer, parentDomain, subname, owner) {
  const NameWrapper = getNameWrapper(chainId, signer);
  const nameHash = getNameHash(parentDomain);

  const [ domainOwner, fuses, expiry ] = await NameWrapper.getData(BigNumber.from(nameHash).toString());

  await (await NameWrapper.setSubnodeOwner(nameHash, subname, owner, 0, expiry)).wait();
}
