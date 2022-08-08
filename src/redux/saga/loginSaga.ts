import { all, call, put, takeLatest } from "redux-saga/effects";
import { loginFailure, loginSuccess } from "../actions/loginActions";
import { LOGIN_REQUEST } from "../types/login";
import { apiCall } from "./api";

function* fetchLoginSaga(action: any) {
  try {
    yield call(
      apiCall,
      "POST",
      "https://jsonplaceholder.typicode.com/todos",
      action.payload
    );
    yield put(loginSuccess());
  } catch (e: any) {
    yield put(loginFailure(e.message));
  }
}

function* loginSaga() {
  yield all([takeLatest(LOGIN_REQUEST, fetchLoginSaga)]);
}

export default loginSaga;
