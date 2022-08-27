import { getContractV2 } from './../utils/utils';
import BigNumber from 'bignumber.js';
import { get } from 'lodash';
import { Web3Provider } from '@ethersproject/providers';
import { ACTION_STATUS } from '../constants';
import Private_Him_ABI from '../constants/abi/him-private-sale.abi.json';
import Usdt_ABI from '../constants/abi/usdt.abi.json';
import { USDT_ADDRESS, HIM_PRIVATE_SALE_CONTRACT, SUPPORTED_CHAIN_RPC } from '../_config';
import { MAX_UINT } from '../literals';
import { createWeb3WithNode } from '../utils/webUtils';
import { extractError } from '../utils/helpers';
export interface IBuyHIM {
    amount: any;
    web3Provider: any;
    account: any;
}

export interface IApproveToken {
    web3Provider: any;
    account: any;
}

export const UseApprovePoolHIMContract = (
    { web3Provider, account }: IApproveToken,
    callback: any,
) => {

    const tokenContract = getContractV2(web3Provider, Usdt_ABI, USDT_ADDRESS);

    callback({
        status: ACTION_STATUS.APPROVING,
    });

    try {
        return tokenContract.methods
            .approve(HIM_PRIVATE_SALE_CONTRACT, MAX_UINT)
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
            message: extractError(err.message),
        });
    }
};

export async function UseBuyHim(
    { amount, web3Provider, account }: IBuyHIM,
    callback: any,
) {

    if (!amount || !web3Provider || !account) {
        return callback({ status: ACTION_STATUS.BUY_HIM_FAIL });
    }
    const amountInHex = '0x' + amount.toString(16);

    const privateHimContract = getContractV2(web3Provider, Private_Him_ABI, HIM_PRIVATE_SALE_CONTRACT);

    callback({
        status: ACTION_STATUS.BUY_HIM_SUBMITTING,
    });
    try {

        const method = privateHimContract.methods.buy(amountInHex);

        return method.send({ from: account }).on('error', (error: any) => {
            console.log(error);
            callback({
                status: ACTION_STATUS.BUY_HIM_FAIL,
                message: get(error, 'message', ''),
            });
        })
            .then((receipt: any) => {
                if (receipt.status == true) {
                    callback({
                        status: ACTION_STATUS.BUY_HIM_SUCCESS,
                        txID: receipt.transactionHash,
                    });
                } else callback({ status: ACTION_STATUS.BUY_HIM_FAIL });
            })
            .catch((err: any) => {
                console.log(err);
                callback({ status: ACTION_STATUS.BUY_HIM_FAIL, message: get(err, 'message', '') });
            });
    } catch (err: any) {
        callback({
            status: ACTION_STATUS.BUY_HIM_FAIL,
            message: extractError(err.message),
        });
    }
}

export const getPrivateSaleHimInfo = async ({ web3Provider, account }: any) => {

    try {
        if (account) {
            const privateHimContract = getContractV2(web3Provider, Private_Him_ABI, HIM_PRIVATE_SALE_CONTRACT);
            return await privateHimContract.methods.info().call();
        } else {
            const web3Node: any = await createWeb3WithNode(SUPPORTED_CHAIN_RPC[0]);
            const privateHimContract = new web3Node.eth.Contract(Private_Him_ABI, HIM_PRIVATE_SALE_CONTRACT);
            const contractInfo = await privateHimContract.methods.info().call();
            return contractInfo;
        }
    } catch (error) {
        return null;
    }
}

export const getPrivateSaleConfigs = async ({ web3Provider, account }: any) => {

    try {
        if (account) {
            const privateHimContract = getContractV2(web3Provider, Private_Him_ABI, HIM_PRIVATE_SALE_CONTRACT);
            return await privateHimContract.methods.getConfigs().call();
        } else {
            const web3Node: any = await createWeb3WithNode(SUPPORTED_CHAIN_RPC[0]);
            const privateHimContract = new web3Node.eth.Contract(Private_Him_ABI, HIM_PRIVATE_SALE_CONTRACT);
            const contractInfo = await privateHimContract.methods.getConfigs().call();
            return contractInfo;
        }
    } catch (error) {
        return null;
    }
}

export const getPrivateSaleUserInfo = async ({ web3Provider, account }: any) => {

    try {
        const privateHimContract = getContractV2(web3Provider, Private_Him_ABI, HIM_PRIVATE_SALE_CONTRACT);
        return await privateHimContract.methods.infoUser(account).call();
    } catch (error) {
        return null;
    }
}
