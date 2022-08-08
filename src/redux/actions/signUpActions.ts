import { SignUpRequestModel } from "../../models";
import {
  SignUpFailure,
  SignUpRequest,
  SignUpSuccess,
  SIGN_UP_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
} from "../types/signUp";

export const signUpRequest = (payload: SignUpRequestModel): SignUpRequest => ({
  type: SIGN_UP_REQUEST,
  payload,
});

export const signUpSuccess = (): SignUpSuccess => ({
  type: SIGN_UP_SUCCESS,
});

export const signUpFailure = (payload: string | null): SignUpFailure => ({
  type: SIGN_UP_FAILURE,
  payload,
});
