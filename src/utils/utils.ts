import { get } from "lodash";
import { Contract } from '@ethersproject/contracts'
import { getAddress } from '@ethersproject/address'
import { AbiItem } from 'web3-utils';
import Web3 from "web3";
import { AddressZero } from '@ethersproject/constants'
import { provider } from 'web3-core';
import { JsonRpcSigner, Web3Provider } from '@ethersproject/providers'
import ERC20_ABI from '../constants/abi/dot.abi.json';
import HimBox_ABI from '../constants/abi/him-box-package.abi.json';
import { HIMBOX_POOL_CONTRACT } from "../_config";

export function isMetamaskAvailable() {
    return !!(get(window, 'ethereum.isMetaMask', null))
}

export function isBinanceExtensionAvailable() {
    return !!get(window, 'BinanceChain', null)
}

export function isTrustWalletAvailable() {
    return !!(get(window, 'ethereum.isTrust', null))
}

export default function getLibrary(provider: any): Web3Provider {
    const library = new Web3Provider(provider);
    library.pollingInterval = 3000;
    return library;
}

// account is not optional
export function getSigner(library: Web3Provider, account: string): JsonRpcSigner {
    return library.getSigner(account).connectUnchecked()
}

// account is optional
export function getProviderOrSigner(library: Web3Provider, account?: string): Web3Provider | JsonRpcSigner {
    return account ? getSigner(library, account) : library
}

// returns the check summed address if the address is valid, otherwise returns false
export function isAddress(value: any): string | false {
    try {
        return getAddress(value)
    } catch {
        return false
    }
}

// account is optional
export function getContract(address: string, ABI: any, library: Web3Provider, account?: string): Contract {
    if (!isAddress(address) || address === AddressZero) {
        throw Error(`Invalid 'address' parameter '${address}'.`)
    }

    return new Contract(address, ABI, getProviderOrSigner(library, account) as any)
}

export function getDotContract(tokenAddress: string, library: Web3Provider, account?: string): Contract {
    const parsed = isAddress(tokenAddress)
    if (!parsed) {
        throw Error(`Invalid 'address' parameter '${tokenAddress}'.`)
    }
    return getContract(tokenAddress, ERC20_ABI, library, account)
}

export function getPoolContract(library: Web3Provider, account?: string): Contract {
    return getContract(HIMBOX_POOL_CONTRACT, HimBox_ABI, library, account)
}

export function getTokenContractByProvider(tokenAddress: string, library: Web3Provider, account?: string) {
    const parsed = isAddress(tokenAddress)
    if (!parsed) {
        throw Error(`Invalid 'address' parameter '${tokenAddress}'.`)
    }
    // const web3 = new Web3(library.provider as provider);
    // return new web3.eth.Contract(ERC20_ABI as AbiItem[], tokenAddress);
}
