import {
  UserChangePasswordRequestModel,
  UserEnable2FARequestModel,
  UserInfoRequestModel,
  UserInfoResponseModel,
  UserUpdateInforRequestModel
} from "../../models";

import {
  ChangePasswordFailure,
  ChangePasswordRequest,
  ChangePasswordSuccess,
  CHANGE_PASSWORD_FAILURE,
  CHANGE_PASSWORD_REQUEST,
  CHANGE_PASSWORD_SUCCESS,
  Enable2FAFailure,
  Enable2FARequest,
  Enable2FASuccess,
  ENABLE_2FA_FAILURE,
  ENABLE_2FA_REQUEST,
  ENABLE_2FA_SUCCESS,
  GetUserInfoFailure,
  GetUserInfoRequest,
  GetUserInfoSuccess,
  GET_USER_INFO_FAILURE,
  GET_USER_INFO_REQUEST,
  GET_USER_INFO_SUCCESS,
  UpdateUserInfoFailure,
  UpdateUserInfoRequest,
  UpdateUserInfoSuccess,
  UPDATE_USER_INFO_FAILURE,
  UPDATE_USER_INFO_REQUEST,
  UPDATE_USER_INFO_SUCCESS
} from "../types/user";

export const getUserInfoRequest = (
  payload: UserInfoRequestModel
): GetUserInfoRequest => ({
  type: GET_USER_INFO_REQUEST,
  payload,
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
