import BigNumber from 'bignumber.js';
import { Web3Provider } from '@ethersproject/providers';
import { getTokenContractByProvider } from '../utils/utils';
import { DOT_DECIMALS, HIMBOX_POOL_CONTRACT, HIM_PRIVATE_SALE_CONTRACT, USDT_DECIMALS } from '../_config';



export interface IAllowanceToken {
    currencyAddress: string;
    web3Provider: any;
    account: any;
}


export const getAllowanceToken = async ({ currencyAddress, web3Provider, account }: IAllowanceToken) => {
    const tokenContract = getTokenContractByProvider(currencyAddress, web3Provider, account);

    const allocationNumber = await tokenContract.methods.allowance(account, HIMBOX_POOL_CONTRACT).call();
    return new BigNumber(allocationNumber.toString())
        .dividedBy(10 ** DOT_DECIMALS)
        .toString();
}

export const getAllowanceHIMToken = async ({ currencyAddress, web3Provider, account }: IAllowanceToken) => {
    const tokenContract = getTokenContractByProvider(currencyAddress, web3Provider, account);

    const allocationNumber = await tokenContract.methods.allowance(account, HIM_PRIVATE_SALE_CONTRACT).call();
    return new BigNumber(allocationNumber.toString())
        .dividedBy(10 ** USDT_DECIMALS)
        .toString();
}