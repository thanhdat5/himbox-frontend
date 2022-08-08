import { SignUpRequestModel } from "../../models";

export const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";

export interface SignUpState {
  loading: boolean;
  success: boolean;
}

export interface SignUpRequest {
  type: typeof SIGN_UP_REQUEST;
  payload: SignUpRequestModel;
}

export type SignUpSuccess = {
  type: typeof SIGN_UP_SUCCESS;
};

export type SignUpFailure = {
  type: typeof SIGN_UP_FAILURE;
};

export type SignUpActions = SignUpRequest | SignUpSuccess | SignUpFailure;
