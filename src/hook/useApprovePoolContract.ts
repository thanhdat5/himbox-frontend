import { Web3Provider } from '@ethersproject/providers';

import { getDotContract } from '../utils/utils';
import { MAX_UINT } from '../literals';
import { ACTION_STATUS } from '../constants';
import { HIMBOX_POOL_CONTRACT } from '../_config';

export interface IApproveToken {
  currencyAddress: string;
  web3Provider: Web3Provider;
  account: string;
  chainId?: number;
}

export const useApprovePoolContract = (
  {  currencyAddress, web3Provider, account, chainId }: IApproveToken,
  callback: any,
) => {
  const contractAddress = HIMBOX_POOL_CONTRACT;

  if (!contractAddress) return callback({ status: ACTION_STATUS.APPROVE_FAILS });

  const tokenContract = getDotContract(currencyAddress, web3Provider, account);

  callback({
    status: ACTION_STATUS.APPROVING,
  });

  return tokenContract.methods
    .approve(contractAddress, MAX_UINT)
    .send({ from: account })
    .on('error', (error: any) => {
      console.log(error);
      callback({
        status: ACTION_STATUS.APPROVE_FAILS,
      });
    })
    .then((receipt: any) => {
      if (receipt.status == true) {
        callback({
          status: ACTION_STATUS.APPROVED,
        });
      } else callback({ status: ACTION_STATUS.APPROVE_FAILS });
    });
};

