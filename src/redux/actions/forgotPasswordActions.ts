import {
  RecoverPasswordRequestModel,
  VerifyCodeRequestModel
} from "../../models";
import {
  SendVerifyCodeFailure,
  SendVerifyCodeRequest,
  SendVerifyCodeSuccess,
  SEND_VERIFY_CODE_FAILURE,
  SEND_VERIFY_CODE_REQUEST,
  SEND_VERIFY_CODE_SUCCESS,
  RecoverPasswordFailure,
  RecoverPasswordRequest,
  RecoverPasswordSuccess,
  RECOVER_PASSWORD_FAILURE,
  RECOVER_PASSWORD_REQUEST,
  RECOVER_PASSWORD_SUCCESS
} from "../types/forgotPassword";

export const sendVerifyCodeRequest = (
  payload: VerifyCodeRequestModel
): SendVerifyCodeRequest => ({
  type: SEND_VERIFY_CODE_REQUEST,
  payload,
});

export const sendVerifyCodeSuccess = (): SendVerifyCodeSuccess => ({
  type: SEND_VERIFY_CODE_SUCCESS,
});

export const sendVerifyCodeFailure = (
  payload: string | null
): SendVerifyCodeFailure => ({
  type: SEND_VERIFY_CODE_FAILURE,
  payload,
});

export const recoverPasswordRequest = (
  payload: RecoverPasswordRequestModel
): RecoverPasswordRequest => ({
  type: RECOVER_PASSWORD_REQUEST,
  payload,
});

export const recoverPasswordSuccess = (): RecoverPasswordSuccess => ({
  type: RECOVER_PASSWORD_SUCCESS,
});

export const recoverPasswordFailure = (
  payload: string | null
): RecoverPasswordFailure => ({
  type: RECOVER_PASSWORD_FAILURE,
  payload,
});
