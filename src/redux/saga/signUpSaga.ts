import { all, call, put, takeLatest } from "redux-saga/effects";
import { signUpFailure, signUpSuccess } from "../actions/signUpActions";
import { SIGN_UP_REQUEST } from "../types/signUp";
import { apiCall } from "./api";

function* fetchSignUpSaga() {
  try {
    yield call(apiCall, "GET", "https://jsonplaceholder.typicode.com/todos");
    yield put(signUpSuccess());
  } catch (e: any) {
    yield put(signUpFailure(e.message));
  }
}

function* signUpSaga() {
  yield all([takeLatest(SIGN_UP_REQUEST, fetchSignUpSaga)]);
}

export default signUpSaga;
