import { AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { ENDPOINTS } from "../../constants";
import {
  ShowErrorMessage,
  ShowSuccessMessage,
} from "../../services/appService";
import { extractError } from "../../utils/helpers";
import {
  changePasswordFailure,
  changePasswordSuccess,
  disable2FAFailure,
  disable2FASuccess,
  enable2FAFailure,
  enable2FASuccess,
  generate2FAFailure,
  generate2FASuccess,
  getUserInfoFailure,
  getUserInfoSuccess,
  updateUserInfoFailure,
  updateUserInfoSuccess,
} from "../actions/userActions";
import {
  CHANGE_PASSWORD_REQUEST,
  DISABLE_2FA_REQUEST,
  ENABLE_2FA_REQUEST,
  GENERATE_2FA_REQUEST,
  GET_USER_INFO_REQUEST,
  UPDATE_USER_INFO_REQUEST,
} from "../types/user";
import { apiCall } from "./api";

function* fetchGetUserInfoSaga(action: any) {
  try {
    const res: AxiosResponse<any> = yield call(
      apiCall,
      "GET",
      ENDPOINTS.PROFILE
    );
    yield put(getUserInfoSuccess(res.data?.data));
  } catch (e: any) {
    yield put(getUserInfoFailure());
    ShowErrorMessage({ message: extractError(e) });
  }
}
function* fetchChangePasswordSaga(action: any) {
  try {
    yield call(apiCall, "PUT", ENDPOINTS.CHANGE_PASSWORD, action.payload);
    ShowSuccessMessage("Change password success!");
    yield put(changePasswordSuccess());
  } catch (e: any) {
    yield put(changePasswordFailure());
    ShowErrorMessage({ message: extractError(e) });
  }
}
function* fetchUpdateInfoSaga(action: any) {
  try {
    yield call(
      apiCall,
      "POST",
      "https://jsonplaceholder.typicode.com/todos",
      action.payload
    );
    ShowSuccessMessage("Update success!");
    yield put(updateUserInfoSuccess());
  } catch (e: any) {
    yield put(updateUserInfoFailure());
    ShowErrorMessage({ message: extractError(e) });
  }
}
function* fetchDisable2FASaga(action: any) {
  try {
    const res: AxiosResponse<any> = yield call(
      apiCall,
      "POST",
      ENDPOINTS.TFA_DEACTIVE,
      action.payload
    );
    ShowSuccessMessage(res?.data?.msg);
    yield put(disable2FASuccess());
  } catch (e: any) {
    yield put(disable2FAFailure());
    ShowErrorMessage({ message: extractError(e) });
  }
}
function* fetchEnable2FASaga(action: any) {
  try {
    const res: AxiosResponse<any> = yield call(
      apiCall,
      "POST",
      ENDPOINTS.TFA_ACTIVE,
      action.payload
    );
    ShowSuccessMessage(res?.data?.msg);
    yield put(enable2FASuccess());
  } catch (e: any) {
    yield put(enable2FAFailure());
    ShowErrorMessage({ message: extractError(e) });
  }
}

function* fetchGenerate2FASaga(action: any) {
  try {
    const res: AxiosResponse<any> = yield call(
      apiCall,
      "POST",
      ENDPOINTS.TFA_GENERATION,
      action.payload
    );
    yield put(generate2FASuccess(res.data?.data));
  } catch (e: any) {
    yield put(generate2FAFailure());
    ShowErrorMessage({ message: extractError(e) });
  }
}

function* forgotPasswordSaga() {
  yield all([takeLatest(GET_USER_INFO_REQUEST, fetchGetUserInfoSaga)]);
  yield all([takeLatest(CHANGE_PASSWORD_REQUEST, fetchChangePasswordSaga)]);
  yield all([takeLatest(UPDATE_USER_INFO_REQUEST, fetchUpdateInfoSaga)]);
  yield all([takeLatest(ENABLE_2FA_REQUEST, fetchEnable2FASaga)]);
  yield all([takeLatest(DISABLE_2FA_REQUEST, fetchDisable2FASaga)]);
  yield all([takeLatest(GENERATE_2FA_REQUEST, fetchGenerate2FASaga)]);
}

export default forgotPasswordSaga;
