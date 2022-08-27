import { Contract } from '@ethersproject/contracts'

import { useMemo } from 'react'

import HimBox_ABI from '../constants/abi/him-box-package.abi.json';
import DOT_ABI from '../constants/abi/dot.abi.json';
import USDT_ABI from '../constants/abi/usdt.abi.json';
import { getContract } from '../utils/utils'
import { useActiveWeb3React } from './index'


// returns null on errors
function useContract(address: string | undefined, ABI: any, withSignerIfPossible = true): Contract | null {
    const { library, account } = useActiveWeb3React()
    return useMemo(() => {
        if (!address || !ABI || !library) return null
        try {
            return getContract(address, ABI, library, withSignerIfPossible && account ? account : undefined)
        } catch (error) {
            console.error('Failed to get contract', error)
            return null
        }
    }, [address, ABI, library, withSignerIfPossible, account])
}

export function useDotContract(tokenAddress?: string, withSignerIfPossible?: boolean): Contract | null {
    return useContract(tokenAddress, DOT_ABI, withSignerIfPossible)
}

export function useUsdtContract(tokenAddress?: string, withSignerIfPossible?: boolean): Contract | null {
    return useContract(tokenAddress, USDT_ABI, withSignerIfPossible)
}

export function useHimBoxContract(tokenAddress?: string, withSignerIfPossible?: boolean): Contract | null {
    return useContract(tokenAddress, HimBox_ABI, withSignerIfPossible)
}


