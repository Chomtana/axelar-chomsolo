import { Contract, Signer, utils } from "ethers";

import ENSRegistryABI from "../abi/ENSRegistry.json";
import ETHRegistrarControllerABI from "../abi/ETHRegistrarController.json";
import NameWrapperABI from "../abi/NameWrapper.json";
import PublicResolverABI from "../abi/PublicResolver.json";

export const ENS_ADDRESS = {
  5: {
    "ENSRegistry": "0x7a04Ea1F1707e2Ef3db4AD0fB24DCe4692a770cc",
    "ETHRegistrarController": "0xed5696b468900ba43fe5e3f78ee76d5c8570ed0f",
    "NameWrapper": "0xe4b95BcD24d220c1A17E0B8a060c7c18e7B8A551",
    "PublicResolver": "0xbabae30B81d09Bb76B0f7FBa54a7Ab86f5891D07",
  }
}

export const COMMIT_TIME = 10; // 10 seconds for testnet

export function getENSRegistry(chainId, signer: Signer): Contract {
  return new Contract(ENS_ADDRESS[chainId].ENSRegistry, ENSRegistryABI, signer);
}

export function getETHRegistrarController(chainId, signer: Signer): Contract {
  return new Contract(ENS_ADDRESS[chainId].ETHRegistrarController, ETHRegistrarControllerABI, signer);
}

export function getNameWrapper(chainId, signer: Signer): Contract {
  return new Contract(ENS_ADDRESS[chainId].NameWrapper, NameWrapperABI, signer);
}

export function getPublicResolver(chainId, signer: Signer): Contract {
  return new Contract(ENS_ADDRESS[chainId].PublicResolver, PublicResolverABI, signer);
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

  const nameHash = getNameHashSimple(name);

  const ETHRegistrarController = getETHRegistrarController(chainId, signer);

  const commitment = await ETHRegistrarController.makeCommitment(...params);

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

