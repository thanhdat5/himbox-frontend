import { Web3Provider } from '@ethersproject/providers';

import { getContractV2, getDotContract } from '../utils/utils';
import { MAX_UINT } from '../literals';
import { ACTION_STATUS } from '../constants';
import { DOT_ADDRESS, HIMBOX_POOL_CONTRACT } from '../_config';
import ERC20_ABI from '../constants/abi/dot.abi.json';
import Web3 from 'web3';
import { get } from 'lodash';

export interface IApproveToken {
    web3Provider: any;
    account: any;
}

export const UseApprovePoolContract = (
    { web3Provider, account }: IApproveToken,
    callback: any,
) => {

    const tokenContract = getContractV2(web3Provider, ERC20_ABI, DOT_ADDRESS);

    callback({
        status: ACTION_STATUS.APPROVING,
    });

    try {
        return tokenContract.methods
            .approve(HIMBOX_POOL_CONTRACT, MAX_UINT)
            .send({ from: account })
            .on('error', (error: any) => {
                console.log(error);
                callback({
                    status: ACTION_STATUS.APPROVE_FAILS,
                    message: get(error, 'message', ''),
                });
            })
            .then((receipt: any) => {
                if (receipt.status == true) {
                    callback({
                        status: ACTION_STATUS.APPROVED,
                        data: receipt.transactionHash,
                    });
                } else callback({ status: ACTION_STATUS.DEPOSIT_PACKAGE_FAIL });
            })
            .catch((err: any) => {
                console.log(err);
                callback({ status: ACTION_STATUS.APPROVE_FAILS, message: get(err, 'message', '') });
            });
    } catch (err: any) {
        callback({
            status: ACTION_STATUS.APPROVE_FAILS,
            message: err.message,
        });
    }
};

