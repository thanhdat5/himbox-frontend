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

export const loginSuccess = (): LoginSuccess => ({
  type: LOGIN_SUCCESS,
});

export const loginFailure = (payload: string | null): LoginFailure => ({
  type: LOGIN_FAILURE,
  payload,
});
