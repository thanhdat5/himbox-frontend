import { WithdrawRequestModel } from "../../models";
import {
  WithdrawFailure,
  WithdrawRequest,
  WithdrawSuccess,
  WITHDRAW_FAILURE,
  WITHDRAW_REQUEST,
  WITHDRAW_SUCCESS
} from "../types/withdraw";

export const withdrawRequest = (
  payload: WithdrawRequestModel
): WithdrawRequest => ({
  type: WITHDRAW_REQUEST,
  payload,
});

export const withdrawSuccess = (): WithdrawSuccess => ({
  type: WITHDRAW_SUCCESS,
});

export const withdrawFailure = (payload: string | null): WithdrawFailure => ({
  type: WITHDRAW_FAILURE,
  payload,
});
