import { all, fork } from "redux-saga/effects";
import dashboardSaga from "./dashboardSaga";
import forgotPasswordSaga from "./forgotPasswordSaga";
import loginSaga from "./loginSaga";
import packageSaga from "./packageSaga";
import signUpSaga from "./signUpSaga";
import todoSaga from "./todoSaga";
import userSaga from "./userSaga";
import verifySaga from "./verifySaga";
import withdrawSaga from "./withdrawSaga";

export function* rootSaga() {
  yield all([fork(loginSaga)]);
  yield all([fork(signUpSaga)]);
  yield all([fork(verifySaga)]);
  yield all([fork(forgotPasswordSaga)]);
  yield all([fork(withdrawSaga)]);
  yield all([fork(userSaga)]);
  yield all([fork(packageSaga)]);
  yield all([fork(dashboardSaga)]);
}
