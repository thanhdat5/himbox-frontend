import { GET_HIM_SALE_CONFIGS_REQUEST, GET_HIM_SALE_CONFIGS_SUCCESS, GET_HIM_SALE_INFO_REQUEST, GET_HIM_SALE_USER_INFO_REQUEST, GET_HIM_SALE_INFO_SUCCESS, GET_HIM_SALE_USER_INFO_SUCCESS } from './../types/himPool';
import { get } from "lodash";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { getPrivateSaleConfigs, getPrivateSaleHimInfo, getPrivateSaleUserInfo } from '../../hook/useHimContract';

function* fetchHimPoolSaleConfigs(action: any): any {
    const { library, account } = action.data;
    try {
        const res: any = yield getPrivateSaleConfigs({ web3Provider: library?.provider, account });
        yield put({
            type: GET_HIM_SALE_CONFIGS_SUCCESS,
            payload: res
        });
    } catch (e: any) {

    }
}

function* fetchHimSaleInfo(action: any): any {
    const { library, account } = action.data;
    try {
        const res: any = yield getPrivateSaleHimInfo({ web3Provider: library?.provider, account });
        yield put({
            type: GET_HIM_SALE_INFO_SUCCESS,
            payload: res
        });
    } catch (e: any) {

    }
}

function* fetchHimSaleUserInfo(action: any): any {
    const { library, account } = action.data;
    try {
        const res: any = yield getPrivateSaleUserInfo({ web3Provider: library?.provider, account });
        yield put({
            type: GET_HIM_SALE_USER_INFO_SUCCESS,
            payload: res
        });
    } catch (e: any) {

    }
}

function* himPoolSaga() {
    yield all([
        takeLatest(GET_HIM_SALE_CONFIGS_REQUEST, fetchHimPoolSaleConfigs),
    ]);
    yield all([
        takeLatest(GET_HIM_SALE_INFO_REQUEST, fetchHimSaleInfo),
    ]);
    yield all([
        takeLatest(GET_HIM_SALE_USER_INFO_REQUEST, fetchHimSaleUserInfo),
    ]);
}

export default himPoolSaga;