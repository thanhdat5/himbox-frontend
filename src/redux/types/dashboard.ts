import {
  DashboardLevelsRequestModel, DashboardLevelsResponseModel, DashboardRanksRequestModel, DashboardRanksResponseModel, DashboardStatisticsRequestModel, DashboardStatisticsResponseModel, DepositTransactionsRequestModel, DepositTransactionsResponseModel, DowngradeTransactionsRequestModel, DowngradeTransactionsResponseModel, ProfitTransactionsRequestModel, ProfitTransactionsResponseModel, UpgradeTransactionsRequestModel, UpgradeTransactionsResponseModel, WithdrawalTransactionsRequestModel, WithdrawalTransactionsResponseModel
} from "../../models";

export const GET_DASHBOARD_STATISTICS_REQUEST =
  "GET_DASHBOARD_STATISTICS_REQUEST";
export const GET_DASHBOARD_STATISTICS_SUCCESS =
  "GET_DASHBOARD_STATISTICS_SUCCESS";
export const GET_DASHBOARD_STATISTICS_FAILURE =
  "GET_DASHBOARD_STATISTICS_FAILURE";

export const GET_DASHBOARD_LEVELS_REQUEST = "GET_DASHBOARD_LEVELS_REQUEST";
export const GET_DASHBOARD_LEVELS_SUCCESS = "GET_DASHBOARD_LEVELS_SUCCESS";
export const GET_DASHBOARD_LEVELS_FAILURE = "GET_DASHBOARD_LEVELS_FAILURE";

export const GET_DEPOSIT_TRANSACTIONS_REQUEST =
  "GET_DEPOSIT_TRANSACTIONS_REQUEST";
export const GET_DEPOSIT_TRANSACTIONS_SUCCESS =
  "GET_DEPOSIT_TRANSACTIONS_SUCCESS";
export const GET_DEPOSIT_TRANSACTIONS_FAILURE =
  "GET_DEPOSIT_TRANSACTIONS_FAILURE";

export const GET_UPGRADE_TRANSACTIONS_REQUEST =
  "GET_UPGRADE_TRANSACTIONS_REQUEST";
export const GET_UPGRADE_TRANSACTIONS_SUCCESS =
  "GET_UPGRADE_TRANSACTIONS_SUCCESS";
export const GET_UPGRADE_TRANSACTIONS_FAILURE =
  "GET_UPGRADE_TRANSACTIONS_FAILURE";

export const GET_WITHDRAWAL_TRANSACTIONS_REQUEST =
  "GET_WITHDRAWAL_TRANSACTIONS_REQUEST";
export const GET_WITHDRAWAL_TRANSACTIONS_SUCCESS =
  "GET_WITHDRAWAL_TRANSACTIONS_SUCCESS";
export const GET_WITHDRAWAL_TRANSACTIONS_FAILURE =
  "GET_WITHDRAWAL_TRANSACTIONS_FAILURE";

export const GET_DOWNGRADE_TRANSACTIONS_REQUEST =
  "GET_DOWNGRADE_TRANSACTIONS_REQUEST";
export const GET_DOWNGRADE_TRANSACTIONS_SUCCESS =
  "GET_DOWNGRADE_TRANSACTIONS_SUCCESS";
export const GET_DOWNGRADE_TRANSACTIONS_FAILURE =
  "GET_DOWNGRADE_TRANSACTIONS_FAILURE";

export const GET_PROFIT_TRANSACTIONS_REQUEST =
  "GET_PROFIT_TRANSACTIONS_REQUEST";
export const GET_PROFIT_TRANSACTIONS_SUCCESS =
  "GET_PROFIT_TRANSACTIONS_SUCCESS";
export const GET_PROFIT_TRANSACTIONS_FAILURE =
  "GET_PROFIT_TRANSACTIONS_FAILURE";

export const GET_DASHBOARD_RANKS_REQUEST = "GET_DASHBOARD_RANKS_REQUEST";
export const GET_DASHBOARD_RANKS_SUCCESS = "GET_DASHBOARD_RANKS_SUCCESS";
export const GET_DASHBOARD_RANKS_FAILURE = "GET_DASHBOARD_RANKS_FAILURE";

export interface DashboardState {
  loadingStatistics: boolean;
  statistics: DashboardStatisticsResponseModel | null;
  loadingLevels: boolean;
  levels: DashboardLevelsResponseModel[];
  loadingRanks: boolean;
  ranks: DashboardRanksResponseModel[];
  loadingTransactions: boolean;
  depositTransactions: DepositTransactionsResponseModel[];
  upgradeTransactions: UpgradeTransactionsResponseModel[];
  withdrawalTransactions: WithdrawalTransactionsResponseModel[];
  downgradeTransactions: DowngradeTransactionsResponseModel[];
  profitTransactions: ProfitTransactionsResponseModel[];
}

export interface GetDashboardStatisticsRequest {
  type: typeof GET_DASHBOARD_STATISTICS_REQUEST;
  payload: DashboardStatisticsRequestModel;
}

export type GetDashboardStatisticsSuccess = {
  type: typeof GET_DASHBOARD_STATISTICS_SUCCESS;
  payload: DashboardStatisticsResponseModel;
};

export type GetDashboardStatisticsFailure = {
  type: typeof GET_DASHBOARD_STATISTICS_FAILURE;
};

export interface GetDashboardLevelsRequest {
  type: typeof GET_DASHBOARD_LEVELS_REQUEST;
  payload: DashboardLevelsRequestModel;
}

export type GetDashboardLevelsSuccess = {
  type: typeof GET_DASHBOARD_LEVELS_SUCCESS;
  payload: DashboardLevelsResponseModel[];
};

export type GetDashboardLevelsFailure = {
  type: typeof GET_DASHBOARD_LEVELS_FAILURE;
};

export interface GetDashboardRanksRequest {
  type: typeof GET_DASHBOARD_RANKS_REQUEST;
  payload: DashboardRanksRequestModel;
}

export type GetDashboardRanksSuccess = {
  type: typeof GET_DASHBOARD_RANKS_SUCCESS;
  payload: DashboardRanksResponseModel[];
};

export type GetDashboardRanksFailure = {
  type: typeof GET_DASHBOARD_RANKS_FAILURE;
};

export interface GetDepositTransactionsRequest {
  type: typeof GET_DEPOSIT_TRANSACTIONS_REQUEST;
  payload: DepositTransactionsRequestModel;
}

export type GetDepositTransactionsSuccess = {
  type: typeof GET_DEPOSIT_TRANSACTIONS_SUCCESS;
  payload: DepositTransactionsResponseModel[];
};

export type GetDepositTransactionsFailure = {
  type: typeof GET_DEPOSIT_TRANSACTIONS_FAILURE;
};

export interface GetUpgradeTransactionsRequest {
  type: typeof GET_UPGRADE_TRANSACTIONS_REQUEST;
  payload: UpgradeTransactionsRequestModel;
}

export type GetUpgradeTransactionsSuccess = {
  type: typeof GET_UPGRADE_TRANSACTIONS_SUCCESS;
  payload: UpgradeTransactionsResponseModel[];
};

export type GetUpgradeTransactionsFailure = {
  type: typeof GET_UPGRADE_TRANSACTIONS_FAILURE;
};

export interface GetWithdrawalTransactionsRequest {
  type: typeof GET_WITHDRAWAL_TRANSACTIONS_REQUEST;
  payload: WithdrawalTransactionsRequestModel;
}

export type GetWithdrawalTransactionsSuccess = {
  type: typeof GET_WITHDRAWAL_TRANSACTIONS_SUCCESS;
  payload: WithdrawalTransactionsResponseModel[];
};

export type GetWithdrawalTransactionsFailure = {
  type: typeof GET_WITHDRAWAL_TRANSACTIONS_FAILURE;
};

export interface GetDowngradeTransactionsRequest {
  type: typeof GET_DOWNGRADE_TRANSACTIONS_REQUEST;
  payload: DowngradeTransactionsRequestModel;
}

export type GetDowngradeTransactionsSuccess = {
  type: typeof GET_DOWNGRADE_TRANSACTIONS_SUCCESS;
  payload: DowngradeTransactionsResponseModel[];
};

export type GetDowngradeTransactionsFailure = {
  type: typeof GET_DOWNGRADE_TRANSACTIONS_FAILURE;
};

export interface GetProfitTransactionsRequest {
  type: typeof GET_PROFIT_TRANSACTIONS_REQUEST;
  payload: ProfitTransactionsRequestModel;
}

export type GetProfitTransactionsSuccess = {
  type: typeof GET_PROFIT_TRANSACTIONS_SUCCESS;
  payload: ProfitTransactionsResponseModel[];
};

export type GetProfitTransactionsFailure = {
  type: typeof GET_PROFIT_TRANSACTIONS_FAILURE;
};

export type DashboardActions =
  | GetDashboardStatisticsRequest
  | GetDashboardStatisticsSuccess
  | GetDashboardStatisticsFailure
  | GetDashboardLevelsRequest
  | GetDashboardLevelsSuccess
  | GetDashboardLevelsFailure
  | GetDashboardRanksRequest
  | GetDashboardRanksSuccess
  | GetDashboardRanksFailure
  | GetDepositTransactionsRequest
  | GetDepositTransactionsSuccess
  | GetDepositTransactionsFailure
  | GetUpgradeTransactionsRequest
  | GetUpgradeTransactionsSuccess
  | GetUpgradeTransactionsFailure
  | GetWithdrawalTransactionsRequest
  | GetWithdrawalTransactionsSuccess
  | GetWithdrawalTransactionsFailure
  | GetDowngradeTransactionsRequest
  | GetDowngradeTransactionsSuccess
  | GetDowngradeTransactionsFailure
  | GetProfitTransactionsRequest
  | GetProfitTransactionsSuccess
  | GetProfitTransactionsFailure;
