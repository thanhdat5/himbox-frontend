import BigNumber from 'bignumber.js';
import { get } from 'lodash';
import { Web3Provider } from '@ethersproject/providers';
import { ACTION_STATUS } from '../constants';
import { getPoolContract } from '../utils/utils';
export interface IBuyNFT {
    ref?: string;
    amount: BigNumber;
    web3Provider: Web3Provider;
    account: string;
    chainId?: number;
}

export async function usePoolDeposit(
    { ref, amount, web3Provider, account }: IBuyNFT,
    callback: any,
) {

    if (!amount || !web3Provider || !account) {
        return callback({ status: ACTION_STATUS.DEPOSIT_PACKAGE_FAIL });
    }
    const amountInHex = '0x' + amount.toString(16);

    const poolContract = getPoolContract(web3Provider, account);

    callback({
        status: ACTION_STATUS.DEPOSIT_PACKAGE_SUBMITTING,
    });
    try {

        const method = poolContract.methods.deposit(ref, amountInHex);

        return method.send({ from: account }).on('error', (error: any) => {
            console.log(error);
            callback({
                status: ACTION_STATUS.DEPOSIT_PACKAGE_FAIL,
                message: get(error, 'message', ''),
            });
        })
            .then((receipt: any) => {
                if (receipt.status == true) {
                    callback({
                        status: ACTION_STATUS.DEPOSIT_PACKAGE_SUCCESS,
                        data: receipt.transactionHash,
                    });
                } else callback({ status: ACTION_STATUS.DEPOSIT_PACKAGE_FAIL });
            })
            .catch((err: any) => {
                console.log(err);
                callback({ status: ACTION_STATUS.DEPOSIT_PACKAGE_FAIL, message: get(err, 'message', '') });
            });
    } catch (err: any) {
        callback({
            status: ACTION_STATUS.DEPOSIT_PACKAGE_FAIL,
            message: err.message,
        });
    }
}
