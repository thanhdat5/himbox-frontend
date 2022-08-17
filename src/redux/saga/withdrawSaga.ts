import { AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { ENDPOINTS } from "../../constants";
import { ShowErrorMessage, ShowSuccessMessage } from "../../services/appService";
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
  GET_LIST_WITHDRAW_REQUEST
} from "../types/withdraw";
import { apiCall } from "./api";

function* fetchGetListWithdrawSaga(action: any) {
  try {
    const res: AxiosResponse<any> = yield call(
      apiCall,
      "GET",
      ENDPOINTS.GET_LIST_WITHDRAW,
      action.payload
    );
    yield put(getListWithdrawSuccess(res.data.data));
  } catch (e: any) {
    yield put(getListWithdrawFailure());
    ShowErrorMessage(e);
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
    yield put(createWithdrawSuccess(res.data));
  } catch (e: any) {
    yield put(createWithdrawFailure());
    ShowErrorMessage(e);
  }
}
function* fetchConfirmWithdrawSaga(action: any) {
  try {
    yield call(apiCall, "POST", ENDPOINTS.CONFIRM_WITHDRAW, action.payload);
    yield put(confirmWithdrawSuccess());
  } catch (e: any) {
    yield put(confirmWithdrawFailure());
    ShowErrorMessage(e);
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
    ShowErrorMessage(e);
  }
}

function* withdrawSaga() {
  yield all([takeLatest(GET_LIST_WITHDRAW_REQUEST, fetchGetListWithdrawSaga)]);
  yield all([takeLatest(CREATE_WITHDRAW_REQUEST, fetchCreateWithdrawSaga)]);
  yield all([takeLatest(CONFIRM_WITHDRAW_REQUEST, fetchConfirmWithdrawSaga)]);
  yield all([takeLatest(CANCEL_WITHDRAW_REQUEST, fetchCancelWithdrawSaga)]);
}

export default withdrawSaga;
