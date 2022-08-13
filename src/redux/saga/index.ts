import { all, fork } from "redux-saga/effects";
import dashboardSaga from "./dashboardSaga";
import depositSaga from "./depositSaga";
import forgotPasswordSaga from "./forgotPasswordSaga";
import loginSaga from "./loginSaga";
import notificationSaga from "./notificationSaga";
import packageSaga from "./packageSaga";
import signUpSaga from "./signUpSaga";
import todoSaga from "./todoSaga";
import userSaga from "./userSaga";
import verifySaga from "./verifySaga";
import withdrawSaga from "./withdrawSaga";

export function* rootSaga() {
  yield all([fork(todoSaga)]);
  yield all([fork(loginSaga)]);
  yield all([fork(signUpSaga)]);
  yield all([fork(verifySaga)]);
  yield all([fork(forgotPasswordSaga)]);
  yield all([fork(depositSaga)]);
  yield all([fork(withdrawSaga)]);
  yield all([fork(notificationSaga)]);
  yield all([fork(userSaga)]);
  yield all([fork(packageSaga)]);
  yield all([fork(dashboardSaga)]);
}
