import { DepositRequestModel } from "../../models";

export const DEPOSIT_REQUEST = "DEPOSIT_REQUEST";
export const DEPOSIT_SUCCESS = "DEPOSIT_SUCCESS";
export const DEPOSIT_FAILURE = "DEPOSIT_FAILURE";

export interface DepositState {
  loading: boolean;
  success: boolean;
  error: string | null;
}

export interface DepositRequest {
  type: typeof DEPOSIT_REQUEST;
  payload: DepositRequestModel;
}

export type DepositSuccess = {
  type: typeof DEPOSIT_SUCCESS;
};

export type DepositFailure = {
  type: typeof DEPOSIT_FAILURE;
  payload: string | null;
};

export type DepositActions = DepositRequest | DepositSuccess | DepositFailure;
