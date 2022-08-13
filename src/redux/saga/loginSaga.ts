import { all, call, put, takeLatest } from "redux-saga/effects";
import { ENDPOINTS } from "../../constants";
import { ShowErrorMessage } from "../../services/appService";
import { extractError } from "../../utils/helpers";
import { loginFailure, loginSuccess } from "../actions/loginActions";
import { LOGIN_REQUEST } from "../types/login";
import { apiCall } from "./api";

function* fetchLoginSaga(action: any): any {
  try {
    const data = yield call(
      apiCall,
      "POST",
      ENDPOINTS.LOGIN,
      action.payload
    );
    yield put(loginSuccess(data));
  } catch (e: any) {
    yield put(loginFailure());
    ShowErrorMessage({ message: extractError(e) });
  }
}

function* loginSaga() {
  yield all([takeLatest(LOGIN_REQUEST, fetchLoginSaga)]);
}

export default loginSaga;
