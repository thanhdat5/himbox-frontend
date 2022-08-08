import { all, call, put, takeLatest } from "redux-saga/effects";
import { withdrawFailure, withdrawSuccess } from "../actions/withdrawActions";
import { WITHDRAW_REQUEST } from "../types/withdraw";
import { apiCall } from "./api";

function* fetchWithdrawSaga(action: any) {
  try {
    yield call(
      apiCall,
      "POST",
      "https://jsonplaceholder.typicode.com/todos",
      action.payload
    );
    yield put(withdrawSuccess());
  } catch (e: any) {
    yield put(withdrawFailure(e.message));
  }
}

function* withdrawSaga() {
  yield all([takeLatest(WITHDRAW_REQUEST, fetchWithdrawSaga)]);
}

export default withdrawSaga;
