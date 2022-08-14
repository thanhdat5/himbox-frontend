import { get } from "lodash";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { ENDPOINTS, ROUTES } from "../../constants";
import { ShowErrorMessage, ShowSuccessMessage } from "../../services/appService";
import { extractError } from "../../utils/helpers";
import { history } from "../../utils/history";
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
    console.log('111111111', e)
    yield put(loginFailure());
    if (get(e, 'response.data.code', 0) == 407) {
      history.push(ROUTES.VERIFY, { fromLogin: true });
    }
    ShowErrorMessage({ message: extractError(e) });
  }
}

function* loginSaga() {
  yield all([takeLatest(LOGIN_REQUEST, fetchLoginSaga)]);
}

export default loginSaga;
