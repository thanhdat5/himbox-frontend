import { get } from "lodash";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { ENDPOINTS, HIMBOX_ACCESS_TOKEN, HIMBOX_REFRESH_TOKEN, HIMBOX_USER_ID, HIMBOX_WALLET, MESSAGES, ROUTES } from "../../constants";
import { ShowErrorMessage, ShowSuccessMessage } from "../../services/appService";
import { extractError } from "../../utils/helpers";
import { history } from "../../utils/history";
import { loginFailure, loginSuccess } from "../actions/loginActions";
import { LOGIN_REQUEST } from "../types/login";
import { VERIFY_REQUEST } from "../types/signUp";
import { GET_USER_INFO_REQUEST } from "../types/user";
import { apiCall } from "./api";

function* fetchLoginSaga(action: any): any {
  try {
    const res = yield call(
      apiCall,
      "POST",
      ENDPOINTS.LOGIN,
      action.payload
    );
    console.log('login data', res);
    if (res?.data?.code == 407) {
      yield put({
        type: VERIFY_REQUEST,
        payload: { username: action.payload.username, userId: res?.data?.data?.user_id }
      });
      ShowErrorMessage({ msg: get(res, 'data.msg', '') });
      // call api resend otp
      yield apiCall('POST', ENDPOINTS.RESEND_VERIFY_MAIL, {
        username: action.payload.username
      });
      ShowSuccessMessage(MESSAGES.VERIFY_GUIDE);
      yield put(loginFailure());
      history.push(ROUTES.VERIFY);
    } else {
      // login ok
      yield localStorage.setItem(HIMBOX_REFRESH_TOKEN, res?.data?.data?.refresh_token);
      yield localStorage.setItem(HIMBOX_ACCESS_TOKEN, res?.data?.data?.token?.access_token);
      yield localStorage.setItem(HIMBOX_USER_ID, res?.data?.data?.user_id);
      yield localStorage.setItem(HIMBOX_WALLET, res?.data?.data?.wallet);
      
      yield put({
        type: GET_USER_INFO_REQUEST
      });
      yield put(loginSuccess(res?.data?.data));
      history.push(ROUTES.DASHBOARD);
    }

  } catch (e: any) {
    console.log('111111111', extractError(e))
    yield put(loginFailure());
    ShowErrorMessage({ msg: extractError(e) });
  }
}

function* loginSaga() {
  yield all([takeLatest(LOGIN_REQUEST, fetchLoginSaga)]);
}

export default loginSaga;
