import {
  UserChangePasswordRequestModel,
  UserEnable2FARequestModel,
  UserInfoRequestModel,
  UserInfoResponseModel,
  UserUpdateInforRequestModel
} from "../../models";
import { LOGIN_SUCCESS } from "./login";

export const GET_USER_INFO_REQUEST = "GET_USER_INFO_REQUEST";
export const GET_USER_INFO_SUCCESS = "GET_USER_INFO_SUCCESS";
export const GET_USER_INFO_FAILURE = "GET_USER_INFO_FAILURE";

export const UPDATE_USER_INFO_REQUEST = "UPDATE_USER_INFO_REQUEST";
export const UPDATE_USER_INFO_SUCCESS = "UPDATE_USER_INFO_SUCCESS";
export const UPDATE_USER_INFO_FAILURE = "UPDATE_USER_INFO_FAILURE";

export const CHANGE_PASSWORD_REQUEST = "CHANGE_PASSWORD_REQUEST";
export const CHANGE_PASSWORD_SUCCESS = "CHANGE_PASSWORD_SUCCESS";
export const CHANGE_PASSWORD_FAILURE = "CHANGE_PASSWORD_FAILURE";

export const ENABLE_2FA_REQUEST = "ENABLE_2FA_REQUEST";
export const ENABLE_2FA_SUCCESS = "ENABLE_2FA_SUCCESS";
export const ENABLE_2FA_FAILURE = "ENABLE_2FA_FAILURE";

export interface UserState {
  loading: boolean;
  updateInfoSuccess: boolean;
  changePasswordSuccess: boolean;
  enable2FASuccess: boolean;
  userInfo: UserInfoResponseModel | null;
}

export interface GetUserInfoRequest {
  type: typeof GET_USER_INFO_REQUEST;
  payload: UserInfoRequestModel;
}

export type LoginSuccess = {
  type: typeof LOGIN_SUCCESS;
  payload: any;
};

export type GetUserInfoSuccess = {
  type: typeof GET_USER_INFO_SUCCESS;
  payload: UserInfoResponseModel;
};

export type GetUserInfoFailure = {
  type: typeof GET_USER_INFO_FAILURE;
};

export interface UpdateUserInfoRequest {
  type: typeof UPDATE_USER_INFO_REQUEST;
  payload: UserUpdateInforRequestModel;
}

export type UpdateUserInfoSuccess = {
  type: typeof UPDATE_USER_INFO_SUCCESS;
};

export type UpdateUserInfoFailure = {
  type: typeof UPDATE_USER_INFO_FAILURE;
};

export interface ChangePasswordRequest {
  type: typeof CHANGE_PASSWORD_REQUEST;
  payload: UserChangePasswordRequestModel;
}

export type ChangePasswordSuccess = {
  type: typeof CHANGE_PASSWORD_SUCCESS;
};

export type ChangePasswordFailure = {
  type: typeof CHANGE_PASSWORD_FAILURE;
};

export interface Enable2FARequest {
  type: typeof ENABLE_2FA_REQUEST;
  payload: UserEnable2FARequestModel;
}

export type Enable2FASuccess = {
  type: typeof ENABLE_2FA_SUCCESS;
};

export type Enable2FAFailure = {
  type: typeof ENABLE_2FA_FAILURE;
};

export type UserActions =
  | GetUserInfoRequest
  | LoginSuccess
  | GetUserInfoSuccess
  | GetUserInfoFailure
  | UpdateUserInfoRequest
  | UpdateUserInfoSuccess
  | UpdateUserInfoFailure
  | ChangePasswordRequest
  | ChangePasswordSuccess
  | ChangePasswordFailure
  | Enable2FARequest
  | Enable2FASuccess
  | Enable2FAFailure;
