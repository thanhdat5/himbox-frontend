import BigNumber from 'bignumber.js';
import { Web3Provider } from '@ethersproject/providers';
import { getTokenContractByProvider } from '../utils/utils';
import { HIMBOX_POOL_CONTRACT } from '../_config';



export interface IAllowanceToken {
    currencyAddress: string;
    web3Provider: any;
    account: any;
}


export const getAllowanceToken = async ({ currencyAddress, web3Provider, account }: IAllowanceToken) => {
    const tokenContract = getTokenContractByProvider(currencyAddress, web3Provider, account);

    const allocationNumber = await tokenContract.methods.allowance(account, HIMBOX_POOL_CONTRACT).call();
    return new BigNumber(allocationNumber.toString())
        .dividedBy(10 ** 18)
        .toString();
}