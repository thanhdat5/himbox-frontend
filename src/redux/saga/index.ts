import { all, fork } from "redux-saga/effects";
import depositSaga from "./depositSaga";
import forgotPasswordSaga from "./forgotPasswordSaga";
import loginSaga from "./loginSaga";
import signUpSaga from "./signUpSaga";
import todoSaga from "./todoSaga";
import withdrawSaga from "./withdrawSaga";

export function* rootSaga() {
  yield all([fork(todoSaga)]);
  yield all([fork(loginSaga)]);
  yield all([fork(signUpSaga)]);
  yield all([fork(forgotPasswordSaga)]);
  yield all([fork(depositSaga)]);
  yield all([fork(withdrawSaga)]);
}
