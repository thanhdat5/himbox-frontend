import {
  UserChangePasswordRequestModel,
  UserEnable2FARequestModel,
  UserEnable2FAResponseModel,
  UserGenerate2FARequestModel,
  UserInfoResponseModel,
  UserUpdateInforRequestModel,
} from "../../models";

import {
  ChangePasswordFailure,
  ChangePasswordRequest,
  ChangePasswordSuccess,
  CHANGE_PASSWORD_FAILURE,
  CHANGE_PASSWORD_REQUEST,
  CHANGE_PASSWORD_SUCCESS,
  Disable2FAFailure,
  Disable2FARequest,
  Disable2FASuccess,
  DISABLE_2FA_FAILURE,
  DISABLE_2FA_REQUEST,
  DISABLE_2FA_SUCCESS,
  Enable2FAFailure,
  Enable2FARequest,
  Enable2FASuccess,
  ENABLE_2FA_FAILURE,
  ENABLE_2FA_REQUEST,
  ENABLE_2FA_SUCCESS,
  Generate2FAFailure,
  Generate2FARequest,
  Generate2FASuccess,
  GENERATE_2FA_FAILURE,
  GENERATE_2FA_REQUEST,
  GENERATE_2FA_SUCCESS,
  GetUserInfoFailure,
  GetUserInfoRequest,
  GetUserInfoSuccess,
  GET_USER_INFO_FAILURE,
  GET_USER_INFO_REQUEST,
  GET_USER_INFO_SUCCESS,
  RESET_USER_STATE,
  UpdateUserInfoFailure,
  UpdateUserInfoRequest,
  UpdateUserInfoSuccess,
  UPDATE_USER_INFO_FAILURE,
  UPDATE_USER_INFO_REQUEST,
  UPDATE_USER_INFO_SUCCESS,
} from "../types/user";

export const resetUserState = () => ({
  type: RESET_USER_STATE,
});
export const getUserInfoRequest = (): GetUserInfoRequest => ({
  type: GET_USER_INFO_REQUEST,
});

export const getUserInfoSuccess = (
  payload: UserInfoResponseModel
): GetUserInfoSuccess => ({
  type: GET_USER_INFO_SUCCESS,
  payload,
});

export const getUserInfoFailure = (): GetUserInfoFailure => ({
  type: GET_USER_INFO_FAILURE,
});

export const updateUserInfoRequest = (
  payload: UserUpdateInforRequestModel
): UpdateUserInfoRequest => ({
  type: UPDATE_USER_INFO_REQUEST,
  payload,
});

export const updateUserInfoSuccess = (): UpdateUserInfoSuccess => ({
  type: UPDATE_USER_INFO_SUCCESS,
});

export const updateUserInfoFailure = (): UpdateUserInfoFailure => ({
  type: UPDATE_USER_INFO_FAILURE,
});

export const changePasswordRequest = (
  payload: UserChangePasswordRequestModel
): ChangePasswordRequest => ({
  type: CHANGE_PASSWORD_REQUEST,
  payload,
});

export const changePasswordSuccess = (): ChangePasswordSuccess => ({
  type: CHANGE_PASSWORD_SUCCESS,
});

export const changePasswordFailure = (): ChangePasswordFailure => ({
  type: CHANGE_PASSWORD_FAILURE,
});

export const enable2FARequest = (
  payload: UserEnable2FARequestModel
): Enable2FARequest => ({
  type: ENABLE_2FA_REQUEST,
  payload,
});

export const enable2FASuccess = (): Enable2FASuccess => ({
  type: ENABLE_2FA_SUCCESS,
});

export const enable2FAFailure = (): Enable2FAFailure => ({
  type: ENABLE_2FA_FAILURE,
});

export const disable2FARequest = (
  payload: UserEnable2FARequestModel
): Disable2FARequest => ({
  type: DISABLE_2FA_REQUEST,
  payload,
});

export const disable2FASuccess = (): Disable2FASuccess => ({
  type: DISABLE_2FA_SUCCESS,
});

export const disable2FAFailure = (): Disable2FAFailure => ({
  type: DISABLE_2FA_FAILURE,
});

export const generate2FARequest = (
  payload: UserGenerate2FARequestModel
): Generate2FARequest => ({
  type: GENERATE_2FA_REQUEST,
  payload,
});

export const generate2FASuccess = (
  payload: UserEnable2FAResponseModel
): Generate2FASuccess => ({
  type: GENERATE_2FA_SUCCESS,
  payload,
});

export const generate2FAFailure = (): Generate2FAFailure => ({
  type: GENERATE_2FA_FAILURE,
});
