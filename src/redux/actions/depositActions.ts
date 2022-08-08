import { DepositRequestModel } from "../../models";
import {
    DepositFailure,
    DepositRequest,
    DepositSuccess,
    DEPOSIT_FAILURE,
    DEPOSIT_REQUEST,
    DEPOSIT_SUCCESS
} from "../types/deposit";

export const depositRequest = (
  payload: DepositRequestModel
): DepositRequest => ({
  type: DEPOSIT_REQUEST,
  payload,
});

export const depositSuccess = (): DepositSuccess => ({
  type: DEPOSIT_SUCCESS,
});

export const depositFailure = (): DepositFailure => ({
  type: DEPOSIT_FAILURE,
});
