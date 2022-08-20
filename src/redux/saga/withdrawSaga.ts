import { AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { ENDPOINTS } from "../../constants";
import { ShowErrorMessage, ShowSuccessMessage } from "../../services/appService";
import { extractError } from "../../utils/helpers";
import {
  cancelWithdrawFailure,
  cancelWithdrawSuccess,
  confirmWithdrawFailure,
  confirmWithdrawSuccess,
  createWithdrawFailure,
  createWithdrawSuccess,
  getListWithdrawFailure,
  getListWithdrawRequest,
  getListWithdrawSuccess
} from "../actions/withdrawActions";
import {
  CANCEL_WITHDRAW_REQUEST,
  CONFIRM_WITHDRAW_REQUEST,
  CREATE_WITHDRAW_REQUEST,
  GET_LIST_COMMISSION_FAILURE,
  GET_LIST_COMMISSION_REQUEST,
  GET_LIST_COMMISSION_SUCCESS,
  GET_LIST_STAKE_FAILURE,
  GET_LIST_STAKE_REQUEST,
  GET_LIST_STAKE_SUCCESS,
  GET_LIST_WITHDRAW_REQUEST
} from "../types/withdraw";
import { apiCall } from "./api";

function* fetchGetListWithdrawSaga(action: any) {
  try {
    const res: AxiosResponse<any> = yield call(
      apiCall,
      "GET",
      ENDPOINTS.GET_LIST_WITHDRAW,
      { limit: 10000000, page: 1 }
    );
    // console.log('las sao', res);
    yield put(getListWithdrawSuccess(res.data.data));
  } catch (e: any) {
    yield put(getListWithdrawFailure());
    // ShowErrorMessage({ message: extractError(e) });
  }
}

function* fetchGetListCommissionSaga(action: any) {
  try {
    const res: AxiosResponse<any> = yield call(
      apiCall,
      "GET",
      ENDPOINTS.GET_LIST_COMMISSION,
      { limit: 10000000, page: 1 }
    );
    // console.log('las sao', res);
    yield put({
      type: GET_LIST_COMMISSION_SUCCESS,
      payload: res.data.data
    });
  } catch (e: any) {
    yield put({
      type: GET_LIST_COMMISSION_FAILURE
    });
  }
}

function* fetchGetListStakeSaga(action: any) {
  try {
    const res: AxiosResponse<any> = yield call(
      apiCall,
      "GET",
      ENDPOINTS.GET_LIST_STAKE,
      { limit: 10000000, page: 1 }
    );
    // console.log('las sao', res);
    yield put({
      type: GET_LIST_STAKE_SUCCESS,
      payload: res.data.data
    });
  } catch (e: any) {
    yield put({ type: GET_LIST_STAKE_FAILURE });
  }
}
function* fetchCreateWithdrawSaga(action: any) {
  try {
    const res: AxiosResponse<any> = yield call(
      apiCall,
      "POST",
      ENDPOINTS.CREATE_WITHDRAW,
      action.payload
    );
    yield put(createWithdrawSuccess(res.data.data));
  } catch (e: any) {
    yield put(createWithdrawFailure());
    ShowErrorMessage({ message: extractError(e) });
  }
}
function* fetchConfirmWithdrawSaga(action: any) {
  try {
    yield call(apiCall, "POST", ENDPOINTS.CONFIRM_WITHDRAW, action.payload);
    ShowSuccessMessage('The request has been confirmed successfully!');
    yield put(confirmWithdrawSuccess());
  } catch (e: any) {
    yield put(confirmWithdrawFailure());
    ShowErrorMessage({ message: extractError(e) });
  }
}
function* fetchCancelWithdrawSaga(action: any) {
  try {
    yield call(apiCall, "POST", ENDPOINTS.CANCEL_WITHDRAW, action.payload);
    ShowSuccessMessage('The request has been cancelled successfully!');
    yield put(cancelWithdrawSuccess());
    yield put(getListWithdrawRequest());
  } catch (e: any) {
    yield put(cancelWithdrawFailure());
    ShowErrorMessage({ message: extractError(e) });
  }
}

function* withdrawSaga() {
  yield all([takeLatest(GET_LIST_WITHDRAW_REQUEST, fetchGetListWithdrawSaga)]);
  yield all([takeLatest(GET_LIST_COMMISSION_REQUEST, fetchGetListCommissionSaga)]);
  yield all([takeLatest(GET_LIST_STAKE_REQUEST, fetchGetListStakeSaga)]);
  yield all([takeLatest(CREATE_WITHDRAW_REQUEST, fetchCreateWithdrawSaga)]);
  yield all([takeLatest(CONFIRM_WITHDRAW_REQUEST, fetchConfirmWithdrawSaga)]);
  yield all([takeLatest(CANCEL_WITHDRAW_REQUEST, fetchCancelWithdrawSaga)]);
}

export default withdrawSaga;
