import { BigNumber, Contract, ethers, Signer, utils } from "ethers";

import ENSRegistryABI from "../abi/ENSRegistry.json";
import ETHRegistrarControllerABI from "../abi/ETHRegistrarController.json";
import NameWrapperABI from "../abi/NameWrapper.json";
import PublicResolverABI from "../abi/PublicResolver.json";
import ERC20ABI from "../abi/IERC20.json";

const ADDRESS_ZERO = "0x0000000000000000000000000000000000000000";

export const ENS_ADDRESS = {
  5: {
    "WAXL": "0x23ee2343B892b1BB63503a4FAbc840E0e2C6810f",
    "ENSRegistry": "0xf7AEB7f57B3Ae41dAE3793545A6BF792C4c18688",
    "ETHRegistrarController": "0x156980EC73fC9ff9fcF73e03c09365e7b3E45d7D",
    "NameWrapper": "0xbb8e47057b41035c52C4Cc066b9E298de660Cc72",
    "PublicResolver": "0x7e82FA9f9718a23cA4813D434C035b3Ca5C58Cc2",
    "RPC_URL": "https://goerli.infura.io/v3/8471ad43100b48029d2ecf04a763c230",
  },
  // 97: {
  //   "WAXL": "0xfC3B4feb754d8082F745940347600D373f03dcaC",
  //   "ENSRegistry": "",
  //   "ETHRegistrarController": "",
  //   "NameWrapper": "",
  //   "PublicResolver": "",
  //   "RPC_URL": "https://data-seed-prebsc-2-s3.binance.org:8545",
  // },
  // 43113: {
  //   "WAXL": "0xa8B51e6517f9A6Ab7b247bF10b71b1A738eD8E50",
  //   "ENSRegistry": "",
  //   "ETHRegistrarController": "",
  //   "NameWrapper": "",
  //   "PublicResolver": "",
  //   "RPC_URL": "https://api.avax-test.network/ext/bc/C/rpc",
  // },
  // 4002: {
  //   "WAXL": "0x66A5df72619982a2Ef49e8317079b6806d56f66B",
  //   "ENSRegistry": "",
  //   "ETHRegistrarController": "",
  //   "NameWrapper": "",
  //   "PublicResolver": "",
  //   "RPC_URL": "https://rpc.testnet.fantom.network/",
  // },
  // 1287: {
  //   "WAXL": "0xB4D56B6AD4DD2B48e68D2a26C25A04dC1c0eE393",
  //   "ENSRegistry": "",
  //   "ETHRegistrarController": "",
  //   "NameWrapper": "",
  //   "PublicResolver": "",
  //   "RPC_URL": "https://rpc.testnet.moonbeam.network/",
  // },
  // 80001: {
  //   "WAXL": "0x9c79782d2B13CAC0Fa2FB00D188104fe6f98E533",
  //   "ENSRegistry": "",
  //   "ETHRegistrarController": "",
  //   "NameWrapper": "",
  //   "PublicResolver": "",
  //   "RPC_URL": "https://matic-mumbai.chainstacklabs.com",
  // },
}

export const COMMIT_TIME = 10; // 10 seconds for testnet

export interface DomainChainData {
  chainId: number;
  address: string;
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
  await (await ETHRegistrarController.register(...commitmentParams, { gasLimit: 10000000 })).wait();
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
  return await PublicResolver.addr(node);
}

export async function setDomainAddress(chainId, signer: Signer, domain: string, address: string) {
  const node = getNameHash(domain);

  const PublicResolver = getPublicResolver(chainId, signer);
  await (await PublicResolver.setAddr(node, address)).wait();
}

export async function getDomainAvailability(domain: string) {
  return await getDomainOwner(domain) === ADDRESS_ZERO;
}

export async function getDomainData(domain): Promise<DomainCompleteData> {
  const nameHash = getNameHash(domain);

  let owner = ADDRESS_ZERO;
  let globalExpiry = 0;
  const chains: DomainChainData[] = [];

  for (const chainId in ENS_ADDRESS) {
    const NameWrapper = getNameWrapper(chainId, getProvider(chainId));
    const { domainOwner, fuses, expiry } = await NameWrapper.getData(nameHash);
    if (domainOwner != ADDRESS_ZERO) {
      owner = domainOwner;
      globalExpiry = expiry;

      const address = await getDomainAddress(chainId, domain);

      chains.push({
        address,
        chainId: parseInt(chainId),
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
