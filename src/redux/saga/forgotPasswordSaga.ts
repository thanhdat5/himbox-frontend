import { all, call, put, takeLatest } from "redux-saga/effects";
import { ShowErrorMessage } from "../../services/appService";
import {
  recoverPasswordFailure,
  recoverPasswordSuccess,
  sendVerifyCodeFailure,
  sendVerifyCodeSuccess
} from "../actions/forgotPasswordActions";
import {
  RECOVER_PASSWORD_REQUEST,
  SEND_VERIFY_CODE_REQUEST
} from "../types/forgotPassword";
import { apiCall } from "./api";

function* fetchVerifyCodeSaga(action: any) {
  // try {
  //   yield call(
  //     apiCall,
  //     "POST",
  //     "https://jsonplaceholder.typicode.com/todos",
  //     action.payload
  //   );
  //   yield put(sendVerifyCodeSuccess());
  // } catch (e: any) {
  //   yield put(sendVerifyCodeFailure());
  //   ShowErrorMessage(e);
  // }
}
function* fetchRecoverPasswordSaga(action: any) {
  // try {
  //   yield call(
  //     apiCall,
  //     "POST",
  //     "https://jsonplaceholder.typicode.com/todos",
  //     action.payload
  //   );
  //   yield put(recoverPasswordSuccess());
  // } catch (e: any) {
  //   yield put(recoverPasswordFailure());
  //   ShowErrorMessage(e);
  // }
}

function* forgotPasswordSaga() {
  yield all([takeLatest(SEND_VERIFY_CODE_REQUEST, fetchVerifyCodeSaga)]);
  yield all([takeLatest(RECOVER_PASSWORD_REQUEST, fetchRecoverPasswordSaga)]);
}

export default forgotPasswordSaga;
