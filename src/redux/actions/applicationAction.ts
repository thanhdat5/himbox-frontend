import { SET_LATEST_BLOCK_NUMBER } from './../types/application';

export const setLastBlockNumber = (payload: any): any => ({
    type: SET_LATEST_BLOCK_NUMBER,
    payload
});