import {
  RecoverPasswordRequestModel, VerifyCodeRequestModel
} from "../../models";

export const SEND_VERIFY_CODE_REQUEST = "SEND_VERIFY_CODE_REQUEST";
export const SEND_VERIFY_CODE_SUCCESS = "SEND_VERIFY_CODE_SUCCESS";
export const SEND_VERIFY_CODE_FAILURE = "SEND_VERIFY_CODE_FAILURE";

export const RECOVER_PASSWORD_REQUEST = "RECOVER_PASSWORD_REQUEST";
export const RECOVER_PASSWORD_SUCCESS = "RECOVER_PASSWORD_SUCCESS";
export const RECOVER_PASSWORD_FAILURE = "RECOVER_PASSWORD_FAILURE";

export interface ForgotPasswordState {
  loading: boolean;
  success: boolean;
  error: string | null;
  sentVerifyCode: boolean
}

export interface SendVerifyCodeRequest {
  type: typeof SEND_VERIFY_CODE_REQUEST;
  payload: VerifyCodeRequestModel;
}

export type SendVerifyCodeSuccess = {
  type: typeof SEND_VERIFY_CODE_SUCCESS;
};

export type SendVerifyCodeFailure = {
  type: typeof SEND_VERIFY_CODE_FAILURE;
  payload: string | null;
};

export interface RecoverPasswordRequest {
  type: typeof RECOVER_PASSWORD_REQUEST;
  payload: RecoverPasswordRequestModel;
}

export type RecoverPasswordSuccess = {
  type: typeof RECOVER_PASSWORD_SUCCESS;
};

export type RecoverPasswordFailure = {
  type: typeof RECOVER_PASSWORD_FAILURE;
  payload: string | null;
};

export type ForgotPasswordActions =
  | SendVerifyCodeRequest
  | SendVerifyCodeSuccess
  | SendVerifyCodeFailure
  | RecoverPasswordRequest
  | RecoverPasswordSuccess
  | RecoverPasswordFailure;
