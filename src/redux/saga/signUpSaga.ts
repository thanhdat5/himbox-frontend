import { all, call, put, takeLatest } from "redux-saga/effects";
import { signUpFailure, signUpSuccess } from "../actions/signUpActions";
import { SIGN_UP_REQUEST } from "../types/signUp";
import { apiCall } from "./api";

function* fetchSignUpSaga(action: any) {
  try {
    yield call(
      apiCall,
      "POST",
      "https://jsonplaceholder.typicode.com/todos",
      action.payload
    );
    yield put(signUpSuccess());
  } catch (e: any) {
    yield put(signUpFailure(e.message));
  }
}

function* signUpSaga() {
  yield all([takeLatest(SIGN_UP_REQUEST, fetchSignUpSaga)]);
}

export default signUpSaga;
