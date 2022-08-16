import { getMyPackageFailure, getMyPackageSuccess } from './../actions/packageActions';
import { GET_MY_PACKAGE_REQUEST, GET_HIMBOX_PRICE } from './../types/package';
import { AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { ENDPOINTS, PACKAGE_TYPES } from "../../constants";
import { ShowErrorMessage } from "../../services/appService";
import {
  confirmParticipateFailure, confirmParticipateSuccess, getPackagesByProfitFailure, getPackagesByProfitSuccess, getPackageStatisticsFailure, getPackageStatisticsSuccess
} from "../actions/packageActions";
import {
  CONFIRM_PARTICIPATE_REQUEST, GET_PACKAGES_BY_PROFIT_REQUEST, GET_PACKAGE_STATISTICS_REQUEST
} from "../types/package";
import { apiCall } from "./api";
import { get } from 'lodash';

function* fetchPackageStatisticsSaga(action: any) {
  try {
    const res: AxiosResponse<any> = yield call(
      apiCall,
      "GET",
      ENDPOINTS.ALL_PACKAGES,
      { to_profit: PACKAGE_TYPES.TYPE_10 }
    );
    console.log('fetchPackageStatisticsSaga', res.data.data);
    yield put(getPackageStatisticsSuccess(res.data));
  } catch (e: any) {
    yield put(getPackageStatisticsFailure());
    ShowErrorMessage(e);
  }
}

function* fetchMyPackageSaga(action: any) {
  try {
    const res: AxiosResponse<any> = yield call(
      apiCall,
      "GET",
      ENDPOINTS.MY_PACKAGE
    );
    console.log('fetchMyPackageSaga', res.data.data);
    yield put(getMyPackageSuccess(res.data.data));
  } catch (e: any) {
    yield put(getMyPackageFailure());
    ShowErrorMessage(e);
  }
}

function* fetchGetPackagesByProfitSaga(action: any) {

  try {
    const priceReq: AxiosResponse<any> = yield call(apiCall, "GET", ENDPOINTS.HIMBOX_PRICE);
    const packageReq: AxiosResponse<any> = yield call(apiCall, "GET", ENDPOINTS.ALL_PACKAGES, { to_profit: action.payload });
    const res: AxiosResponse<any> = yield Promise.all([priceReq, packageReq]);
    const priceRes: any = get(res, '[0].data.data', []);
    const packageRes: any = get(res, '[1].data.data', []);
    yield put({
      type: GET_HIMBOX_PRICE,
      payload: priceRes
    });
    yield put(getPackagesByProfitSuccess(packageRes));
  } catch (e: any) {
    yield put(getPackagesByProfitFailure());
    ShowErrorMessage(e);
  }
}
function* fetchConfirmParticipateSaga(action: any) {
  try {
    yield call(
      apiCall,
      "POST",
      "https://jsonplaceholder.typicode.com/todos",
      action.payload
    );
    yield put(confirmParticipateSuccess());
  } catch (e: any) {
    yield put(confirmParticipateFailure());
    ShowErrorMessage(e);
  }
}

function* packageSaga() {
  yield all([
    takeLatest(GET_PACKAGE_STATISTICS_REQUEST, fetchPackageStatisticsSaga),
  ]);
  yield all([
    takeLatest(GET_MY_PACKAGE_REQUEST, fetchMyPackageSaga),
  ]);
  yield all([
    takeLatest(GET_PACKAGES_BY_PROFIT_REQUEST, fetchGetPackagesByProfitSaga),
  ]);
  yield all([
    takeLatest(CONFIRM_PARTICIPATE_REQUEST, fetchConfirmParticipateSaga),
  ]);
}

export default packageSaga;
