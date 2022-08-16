import { LoginRequestModel } from "../../models";
import {
  LoginFailure,
  LoginRequest,
  LoginSuccess,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from "../types/login";

export const loginRequest = (payload: LoginRequestModel): LoginRequest => ({
  type: LOGIN_REQUEST,
  payload,
});

export const loginSuccess = (payload: any): LoginSuccess => ({
  type: LOGIN_SUCCESS,
  payload
});

export const loginFailure = (): LoginFailure => ({
  type: LOGIN_FAILURE,
});
