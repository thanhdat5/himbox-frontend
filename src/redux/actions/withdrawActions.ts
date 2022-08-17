import {
  CancelWithdrawRequestModel,
  ConfirmWithdrawRequestModel,
  CreateWithdrawRequestModel,
} from "../../models";
import {
  GetListWithdrawFailure,
  GetListWithdrawRequest,
  GetListWithdrawSuccess,
  CreateWithdrawFailure,
  CreateWithdrawRequest,
  CreateWithdrawSuccess,
  ConfirmWithdrawFailure,
  ConfirmWithdrawRequest,
  ConfirmWithdrawSuccess,
  CancelWithdrawFailure,
  CancelWithdrawRequest,
  CancelWithdrawSuccess,
  GET_LIST_WITHDRAW_FAILURE,
  GET_LIST_WITHDRAW_REQUEST,
  GET_LIST_WITHDRAW_SUCCESS,
  CREATE_WITHDRAW_FAILURE,
  CREATE_WITHDRAW_REQUEST,
  CREATE_WITHDRAW_SUCCESS,
  CONFIRM_WITHDRAW_FAILURE,
  CONFIRM_WITHDRAW_REQUEST,
  CONFIRM_WITHDRAW_SUCCESS,
  CANCEL_WITHDRAW_FAILURE,
  CANCEL_WITHDRAW_REQUEST,
  CANCEL_WITHDRAW_SUCCESS,
  ResetWithdrawState,
  RESET_WITHDRAW_STATE,
} from "../types/withdraw";

export const resetWithdrawState = (): ResetWithdrawState => ({
  type: RESET_WITHDRAW_STATE,
});

export const getListWithdrawRequest = (): GetListWithdrawRequest => ({
  type: GET_LIST_WITHDRAW_REQUEST,
});

export const getListWithdrawSuccess = (): GetListWithdrawSuccess => ({
  type: GET_LIST_WITHDRAW_SUCCESS,
});

export const getListWithdrawFailure = (): GetListWithdrawFailure => ({
  type: GET_LIST_WITHDRAW_FAILURE,
});

export const createWithdrawRequest = (
  payload: CreateWithdrawRequestModel
): CreateWithdrawRequest => ({
  type: CREATE_WITHDRAW_REQUEST,
  payload,
});

export const createWithdrawSuccess = (payload: any): CreateWithdrawSuccess => ({
  type: CREATE_WITHDRAW_SUCCESS,
  payload,
});

export const createWithdrawFailure = (): CreateWithdrawFailure => ({
  type: CREATE_WITHDRAW_FAILURE,
});

export const confirmWithdrawRequest = (
  payload: ConfirmWithdrawRequestModel
): ConfirmWithdrawRequest => ({
  type: CONFIRM_WITHDRAW_REQUEST,
  payload,
});

export const confirmWithdrawSuccess = (): ConfirmWithdrawSuccess => ({
  type: CONFIRM_WITHDRAW_SUCCESS,
});

export const confirmWithdrawFailure = (): ConfirmWithdrawFailure => ({
  type: CONFIRM_WITHDRAW_FAILURE,
});

export const cancelWithdrawRequest = (
  payload: CancelWithdrawRequestModel
): CancelWithdrawRequest => ({
  type: CANCEL_WITHDRAW_REQUEST,
  payload,
});

export const cancelWithdrawSuccess = (): CancelWithdrawSuccess => ({
  type: CANCEL_WITHDRAW_SUCCESS,
});

export const cancelWithdrawFailure = (): CancelWithdrawFailure => ({
  type: CANCEL_WITHDRAW_FAILURE,
});
