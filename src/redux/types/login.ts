import { LoginRequestModel } from "../../models";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const TFA_ACTION = "TFA_ACTION";

export interface LoginState {
  loading: boolean;
  success: boolean;
  userInfo: any;
  showTfa: boolean;
}

export interface LoginRequest {
  type: typeof LOGIN_REQUEST;
  payload: LoginRequestModel;
}

export type LoginSuccess = {
  type: typeof LOGIN_SUCCESS;
  payload: any;
};

export type LoginFailure = {
  type: typeof LOGIN_FAILURE;
};

export type TfaAction = {
  type: typeof TFA_ACTION;
  payload?: boolean;
};

export type LoginActions = LoginRequest | LoginSuccess | LoginFailure | TfaAction;
