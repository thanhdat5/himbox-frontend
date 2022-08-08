import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  recoverPasswordFailure,
  recoverPasswordSuccess, sendVerifyCodeFailure,
  sendVerifyCodeSuccess
} from "../actions/forgotPasswordActions";
import {
  RECOVER_PASSWORD_REQUEST, SEND_VERIFY_CODE_REQUEST
} from "../types/forgotPassword";
import { apiCall } from "./api";

function* fetchVerifyCodeSaga() {
  try {
    yield call(apiCall, "GET", "https://jsonplaceholder.typicode.com/todos");
    yield put(sendVerifyCodeSuccess());
  } catch (e: any) {
    yield put(sendVerifyCodeFailure(e.message));
  }
}
function* fetchRecoverPasswordSaga() {
  try {
    yield call(apiCall, "GET", "https://jsonplaceholder.typicode.com/todos");
    yield put(recoverPasswordSuccess());
  } catch (e: any) {
    yield put(recoverPasswordFailure(e.message));
  }
}

function* forgotPasswordSaga() {
  yield all([takeLatest(SEND_VERIFY_CODE_REQUEST, fetchVerifyCodeSaga)]);
  yield all([takeLatest(RECOVER_PASSWORD_REQUEST, fetchRecoverPasswordSaga)]);
}

export default forgotPasswordSaga;
