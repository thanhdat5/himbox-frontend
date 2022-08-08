import { all, call, put, takeLatest } from "redux-saga/effects";
import { loginFailure, loginSuccess } from "../actions/loginActions";
import { LOGIN_REQUEST } from "../types/login";
import { apiCall } from "./api";

function* fetchLoginSaga() {
  try {
    yield call(apiCall, "GET", "https://jsonplaceholder.typicode.com/todos");
    yield put(loginSuccess());
  } catch (e: any) {
    yield put(
      loginFailure(e.message)
    );
  }
}

function* loginSaga() {
  yield all([takeLatest(LOGIN_REQUEST, fetchLoginSaga)]);
}

export default loginSaga;
