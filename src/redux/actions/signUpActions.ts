import { SignUpRequestModel } from "../../models";
import {
  SignUpFailure,
  SignUpRequest,
  SignUpSuccess,
  SIGN_UP_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS
} from "../types/signUp";

export const signUpRequest = (payload: SignUpRequestModel): SignUpRequest => ({
  type: SIGN_UP_REQUEST,
  payload,
});

export const signUpSuccess = (payload: any): SignUpSuccess => ({
  type: SIGN_UP_SUCCESS,
  payload
});

export const signUpFailure = (msg: string = ''): SignUpFailure => ({
  type: SIGN_UP_FAILURE,
  message: msg
});
