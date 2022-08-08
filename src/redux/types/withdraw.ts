import { WithdrawRequestModel } from "../../models";

export const WITHDRAW_REQUEST = "WITHDRAW_REQUEST";
export const WITHDRAW_SUCCESS = "WITHDRAW_SUCCESS";
export const WITHDRAW_FAILURE = "WITHDRAW_FAILURE";

export interface WithdrawState {
  loading: boolean;
  success: boolean;
  error: string | null;
}

export interface WithdrawRequest {
  type: typeof WITHDRAW_REQUEST;
  payload: WithdrawRequestModel;
}

export type WithdrawSuccess = {
  type: typeof WITHDRAW_SUCCESS;
};

export type WithdrawFailure = {
  type: typeof WITHDRAW_FAILURE;
  payload: string | null;
};

export type WithdrawActions = WithdrawRequest | WithdrawSuccess | WithdrawFailure;
