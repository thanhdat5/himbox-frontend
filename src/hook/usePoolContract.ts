import { getContractV2 } from './../utils/utils';
import BigNumber from 'bignumber.js';
import { get } from 'lodash';
import { Web3Provider } from '@ethersproject/providers';
import { ACTION_STATUS } from '../constants';
import { getPoolContract } from '../utils/utils';
import HimBox_ABI from '../constants/abi/him-box-package.abi.json';
import { HIMBOX_POOL_CONTRACT } from '../_config';
export interface IBuyNFT {
    ref?: string;
    amount: any;
    web3Provider: any;
    account: any;
    chainId?: number;
}

export async function UsePoolDeposit(
    { ref, amount, web3Provider, account }: IBuyNFT,
    callback: any,
) {

    if (!amount || !web3Provider || !account) {
        return callback({ status: ACTION_STATUS.DEPOSIT_PACKAGE_FAIL });
    }
    const amountInHex = '0x' + amount.toString(16);

    const poolContract = getContractV2(web3Provider, HimBox_ABI, HIMBOX_POOL_CONTRACT);
    console.log('asasasasas', poolContract);

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
