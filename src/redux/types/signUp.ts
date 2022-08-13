import { SignUpRequestModel } from "../../models";
import { VerifyAccountSuccess } from "./verifyAccount";

export const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
export const VERIFY_REQUEST = "VERIFY_REQUEST";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";

export interface SignUpState {
  loading: boolean;
  success: boolean;
  userVerify: any;
  error?: string;
}

export interface SignUpRequest {
  type: typeof SIGN_UP_REQUEST;
  payload: SignUpRequestModel;
}

export type SignUpSuccess = {
  type: typeof SIGN_UP_SUCCESS;
  payload?: any
};

export type SignUpFailure = {
  type: typeof SIGN_UP_FAILURE;
  message?: string
};

export type VerifyRequest = {
  type: typeof VERIFY_REQUEST;
  payload: any
};

export type SignUpActions = SignUpRequest | SignUpSuccess | SignUpFailure | VerifyRequest | VerifyAccountSuccess;
