import { all, call, put, takeLatest } from "redux-saga/effects";
import { ENDPOINTS, MESSAGES, ROUTES } from "../../constants";
import { ShowErrorMessage, ShowSuccessMessage } from "../../services/appService";
import { extractError } from "../../utils/helpers";
import { history } from "../../utils/history";
import { signUpFailure, signUpSuccess } from "../actions/signUpActions";
import { SIGN_UP_REQUEST } from "../types/signUp";
import { apiCall } from "./api";

function* fetchSignUpSaga(action: any): any {
  try {
    const res = yield call(
      apiCall,
      "POST",
      ENDPOINTS.SIGN_UP,
      action.payload
    );
    yield put(signUpSuccess({ userId: res?.data?.data?.user_id, username: action.payload?.email }));
    ShowSuccessMessage(MESSAGES.VERIFY_GUIDE);
    history.push(ROUTES.VERIFY);
  } catch (e: any) {
    yield put(signUpFailure(extractError(e)));
    ShowErrorMessage({ message: extractError(e) });
  }
}

function* signUpSaga() {
  yield all([takeLatest(SIGN_UP_REQUEST, fetchSignUpSaga)]);
}

export default signUpSaga;
