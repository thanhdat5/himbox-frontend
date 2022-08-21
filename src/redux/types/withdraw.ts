import {
  CancelWithdrawRequestModel,
  ConfirmWithdrawRequestModel,
  CreateWithdrawRequestModel,
  WithdrawalTransactionsResponseModel
} from "../../models";

export const RESET_WITHDRAW_STATE = "RESET_WITHDRAW_STATE";

export const GET_LIST_WITHDRAW_REQUEST = "GET_LIST_WITHDRAW_REQUEST";
export const GET_LIST_WITHDRAW_SUCCESS = "GET_LIST_WITHDRAW_SUCCESS";
export const GET_LIST_WITHDRAW_FAILURE = "GET_LIST_WITHDRAW_FAILURE";

export const GET_LIST_COMMISSION_REQUEST = "GET_LIST_COMMISSION_REQUEST";
export const GET_LIST_COMMISSION_SUCCESS = "GET_LIST_COMMISSION_SUCCESS";
export const GET_LIST_COMMISSION_FAILURE = "GET_LIST_COMMISSION_FAILURE";

export const GET_TEAM_REWARD_REQUEST = "GET_TEAM_REWARD_REQUEST";
export const GET_TEAM_REWARD_SUCCESS = "GET_TEAM_REWARD_SUCCESS";
export const GET_TEAM_REWARD_FAILURE = "GET_TEAM_REWARD_FAILURE";

export const GET_LEADERSHIP_HISTORY_REQUEST = "GET_LEADERSHIP_HISTORY_REQUEST";
export const GET_LEADERSHIP_HISTORY_SUCCESS = "GET_LEADERSHIP_HISTORY_SUCCESS";
export const GET_LEADERSHIP_HISTORY_FAILURE = "GET_LEADERSHIP_HISTORY_FAILURE";

export const GET_LIST_STAKE_REQUEST = "GET_LIST_STAKE_REQUEST";
export const GET_LIST_STAKE_SUCCESS = "GET_LIST_STAKE_SUCCESS";
export const GET_LIST_STAKE_FAILURE = "GET_LIST_STAKE_FAILURE";

export const CREATE_WITHDRAW_REQUEST = "CREATE_WITHDRAW_REQUEST";
export const CREATE_WITHDRAW_SUCCESS = "CREATE_WITHDRAW_SUCCESS";
export const CREATE_WITHDRAW_FAILURE = "CREATE_WITHDRAW_FAILURE";

export const CONFIRM_WITHDRAW_REQUEST = "CONFIRM_WITHDRAW_REQUEST";
export const CONFIRM_WITHDRAW_SUCCESS = "CONFIRM_WITHDRAW_SUCCESS";
export const CONFIRM_WITHDRAW_FAILURE = "CONFIRM_WITHDRAW_FAILURE";

export const CANCEL_WITHDRAW_REQUEST = "CANCEL_WITHDRAW_REQUEST";
export const CANCEL_WITHDRAW_SUCCESS = "CANCEL_WITHDRAW_SUCCESS";
export const CANCEL_WITHDRAW_FAILURE = "CANCEL_WITHDRAW_FAILURE";

export interface WithdrawState {
  loadingList: boolean;
  loading: boolean;
  success: boolean;
  confirmSuccess: boolean;
  cancelSuccess: boolean;
  withdrawRequest: any;
  withdrawalTransactions: WithdrawalTransactionsResponseModel[];
  commissionTransactions: any[];
  stakeTransactions: any[];
  teamReward: any[];
  leadershipHistory: any[];
}

export interface ResetWithdrawState {
  type: typeof RESET_WITHDRAW_STATE;
}

export interface GetListWithdrawRequest {
  type: typeof GET_LIST_WITHDRAW_REQUEST;
}

export type GetListWithdrawSuccess = {
  type: typeof GET_LIST_WITHDRAW_SUCCESS;
  payload: WithdrawalTransactionsResponseModel[];
};

export type GetListWithdrawFailure = {
  type: typeof GET_LIST_WITHDRAW_FAILURE;
};

export interface CreateWithdrawRequest {
  type: typeof CREATE_WITHDRAW_REQUEST;
  payload: CreateWithdrawRequestModel;
}

export type CreateWithdrawSuccess = {
  type: typeof CREATE_WITHDRAW_SUCCESS;
  payload: any;
};

export type CreateWithdrawFailure = {
  type: typeof CREATE_WITHDRAW_FAILURE;
};

export interface ConfirmWithdrawRequest {
  type: typeof CONFIRM_WITHDRAW_REQUEST;
  payload: ConfirmWithdrawRequestModel;
}

export type ConfirmWithdrawSuccess = {
  type: typeof CONFIRM_WITHDRAW_SUCCESS;
};

export type ConfirmWithdrawFailure = {
  type: typeof CONFIRM_WITHDRAW_FAILURE;
};

export interface CancelWithdrawRequest {
  type: typeof CANCEL_WITHDRAW_REQUEST;
  payload: CancelWithdrawRequestModel;
}

export type CancelWithdrawSuccess = {
  type: typeof CANCEL_WITHDRAW_SUCCESS;
};

export type GetListCommissionSuccess = {
  type: typeof GET_LIST_COMMISSION_SUCCESS;
  payload: any
};

export type GetListStakeSuccess = {
  type: typeof GET_LIST_STAKE_SUCCESS;
  payload: any
};

export type GetTeamRewardSuccess = {
  type: typeof GET_TEAM_REWARD_SUCCESS;
  payload: any
};

export type GetLeadershipHistorySuccess = {
  type: typeof GET_LEADERSHIP_HISTORY_SUCCESS;
  payload: any
};

export type CancelWithdrawFailure = {
  type: typeof CANCEL_WITHDRAW_FAILURE;
};

export type WithdrawActions =
  | ResetWithdrawState
  | GetListWithdrawRequest
  | GetListWithdrawSuccess
  | GetListWithdrawFailure
  | CreateWithdrawRequest
  | CreateWithdrawSuccess
  | CreateWithdrawFailure
  | ConfirmWithdrawRequest
  | ConfirmWithdrawSuccess
  | ConfirmWithdrawFailure
  | CancelWithdrawRequest
  | CancelWithdrawSuccess
  | GetListCommissionSuccess
  | GetListStakeSuccess
  | GetTeamRewardSuccess
  | GetLeadershipHistorySuccess
  | CancelWithdrawFailure;
