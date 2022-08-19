import { all, call, put, takeLatest } from "redux-saga/effects";
import { ShowErrorMessage } from "../../services/appService";
import { depositFailure, depositSuccess } from "../actions/depositActions";
import { DEPOSIT_REQUEST } from "../types/deposit";
import { apiCall } from "./api";

function* fetchDepositSaga(action: any) {
  // try {
  //   yield call(
  //     apiCall,
  //     "POST",
  //     "https://jsonplaceholder.typicode.com/todos",
  //     action.payload
  //   );
  //   yield put(depositSuccess());
  // } catch (e: any) {
  //   yield put(depositFailure());
  //   ShowErrorMessage(e);
  // }
}

function* depositSaga() {
  yield all([takeLatest(DEPOSIT_REQUEST, fetchDepositSaga)]);
}

export default depositSaga;
