import { BigNumber, Contract, ethers } from "ethers";
import {
  Multicall,
  ContractCallResults,
  ContractCallContext,
} from 'ethereum-multicall';

import ERC20ABI from "../abi/IERC20.json"
import { getBalancesForEthereumAddress, getBalancesForEthereumAddresses, Token } from "ethereum-erc20-token-balances-multicall";
import { getDomainData, getProvider } from "./ens";

export const BANK_ADDRESS = "0x79A3840E610590A78d94EC428E9d1AFbDC225F8e";

export const SUPPORTED_TOKENS = {
  5: [
    {
      symbol: "WAXL",
      address: "0x23ee2343B892b1BB63503a4FAbc840E0e2C6810f",
    },
    {
      symbol: "WBNB",
      address: "0xA9A2D8F279ABC436a18DBB1df3FB233039935D0A",
    },
    {
      symbol: "WAVAX",
      address: "0x2a87806561C550ba2dA9677c5323413E6e539740",
    },
  ],
  97: [
    {
      symbol: "WAXL",
      address: "0xfC3B4feb754d8082F745940347600D373f03dcaC",
    },
    {
      symbol: "WBNB",
      address: "0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd",
    },
    {
      symbol: "WAVAX",
      address: "0x1B29EC62efC689c462b4E0512457175793cEc9e6",
    },
  ],
  43113: [
    {
      symbol: "WAXL",
      address: "0xa8B51e6517f9A6Ab7b247bF10b71b1A738eD8E50",
    },
    {
      symbol: "WBNB",
      address: "0xd020f566723e8402f925A891605c02ce7AF2477F",
    },
    {
      symbol: "WAVAX",
      address: "0xd00ae08403B9bbb9124bB305C09058E32C39A48c",
    },
  ],
  4002: [
    {
      symbol: "WAXL",
      address: "0x66A5df72619982a2Ef49e8317079b6806d56f66B",
    },
    {
      symbol: "WBNB",
      address: "0x8DA729FC44366eFE36d522B865FeC34653e85F6e",
    },
    {
      symbol: "WAVAX",
      address: "0x8776aDD48553518641a589C39792cc409d4C8B84",
    },
  ],
  1287: [
    {
      symbol: "WAXL",
      address: "0xB4D56B6AD4DD2B48e68D2a26C25A04dC1c0eE393",
    },
    {
      symbol: "WBNB",
      address: "0x8d0BBbA567Ae73a06A8678e53Dc7ADD0AF6b7039",
    },
    {
      symbol: "WAVAX",
      address: "0x64aae6319934995Bf30e67EBBBA9750256E07283",
    },
  ],
  80001: [
    {
      symbol: "WAXL",
      address: "0x9c79782d2B13CAC0Fa2FB00D188104fe6f98E533",
    },
    {
      symbol: "WBNB",
      address: "0x55fDE07dEF3261a41fC59B783D27A6357e8A86Df",
    },
    {
      symbol: "WAVAX",
      address: "0x6DD60c05FdA1255A44Ffaa9A8200b5b179A578D6",
    },
  ],
}

const MULTICALL_ADDRESSES = {
  5: '0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696',
  97: '0x73CCde5acdb9980f54BcCc0483B28B8b4a537b4A',
  43113: '0x3D015943d2780fE97FE3f69C97edA2CCC094f78c',
  4002: '0x8450866a99Aa24ffeeFd35f56366E115AAfAa8a1',
  1287: '0xe753A84ac191cCB04454E0cF5CB982Fe178aC7da',
  80001: '0xe9939e7Ea7D7fb619Ac57f648Da7B1D425832631',
}

export const DEFAULT_CHAIN_NAME = "goerli";
export const DEFAULT_CHAIN_ID = 5;

let providerReadOnly = new ethers.providers.InfuraProvider(DEFAULT_CHAIN_NAME, "8d49be66bd44413d8205327c236b48d5");

const multicall = new Multicall({ ethersProvider: providerReadOnly, tryAggregate: true });

export interface BankAccountData {
  chainId: number;
  name: string;
  address: string;
  tokens: Token[];
}

export async function getBankAccountTokens(address: string, chainId) {
  const balances = await getBalancesForEthereumAddress({
    // erc20 tokens you want to query!
    contractAddresses: SUPPORTED_TOKENS[chainId].map(x => x.address),
    // ethereum address of the user you want to get the balances for
    ethereumAddress: address,
    // your ethers provider
    providerOptions: {
      ethersProvider: getProvider(chainId),
    },
    multicallCustomContractAddress: MULTICALL_ADDRESSES[chainId],
  });

  return balances.tokens;
}

// export async function getMultipleBankAccountTokens(addresses: string[]) {
//   const balances = await getBalancesForEthereumAddresses({
//     // erc20 tokens you want to query!
//     contractAddresses: SUPPORTED_TOKENS.map(x => x.address),
//     // ethereum address of the user you want to get the balances for
//     ethereumAddresses: addresses,
//     // your ethers provider
//     providerOptions: {
//       ethersProvider: providerReadOnly,
//     },
//   });

//   return balances;
// }

export function getBankTokenAddress(symbol: string, chainId) {
  return SUPPORTED_TOKENS[chainId].find(x => x.symbol == symbol)?.address;
}

export function getBankTokenContract(symbol: string, chainId): Contract | null {
  const address = getBankTokenAddress(symbol, chainId);
  if (!address) return null;
  return new Contract(address, ERC20ABI, getProvider(chainId));
}

export async function getAllBankAccounts(domain: string) {
  const data = await getDomainData(domain);

  const result: BankAccountData[] = [];

  for (const chain of data.chains) {
    if (!chain.enabled) continue;

    console.log(chain.chainId);

    const tokens = await getBankAccountTokens(chain.address, chain.chainId);

    result.push({
      chainId: chain.chainId,
      name: chain.name,
      address: chain.address,
      tokens: tokens,
    })
  }

  return result;
}

// export async function createBankAccount(signer: any, name: string) {
//   const bank = new ethers.Contract(BANK_ADDRESS, BankABI, signer);
//   return await bank.createBankAccount(name).then(tx => tx.wait());
// }

// export async function deposit(signer: any, tokenAddress: string, address: string, amount: string | BigNumber) {
//   const token = new ethers.Contract(tokenAddress, ERC20ABI, signer);
//   return await token.transfer(address, amount).then(tx => tx.wait());
// }

// export async function withdraw(signer: any, bankAccountAddress: string, tokenAddress: string, walletAddress: string, amount: string | BigNumber) {
//   const bankAccount = new ethers.Contract(bankAccountAddress, BankAccountABI, signer);
//   return await bankAccount.transfer(tokenAddress, walletAddress, amount).then(tx => tx.wait());
// }

// export async function batchTransfer(signer: any, bankAccountAddress: string, tokenAddresses: string[], to: string[], amount: (string | BigNumber)[]) {
//   const bankAccount = new ethers.Contract(bankAccountAddress, BankAccountABI, signer);
//   return await bankAccount.batchTransfer(tokenAddresses, to, amount).then(tx => tx.wait());
// }