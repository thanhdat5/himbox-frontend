import { all, fork } from "redux-saga/effects";
import todoSaga from "./todoSaga";
import loginSaga from "./loginSaga";
import signUpSaga from "./signUpSaga";
import forgotPasswordSaga from "./forgotPasswordSaga";

export function* rootSaga() {
  yield all([fork(todoSaga)]);
  yield all([fork(loginSaga)]);
  yield all([fork(signUpSaga)]);
  yield all([fork(forgotPasswordSaga)]);
}
