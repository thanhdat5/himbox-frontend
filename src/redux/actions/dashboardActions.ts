import {
  DashboardLevelsRequestModel,
  DashboardLevelsResponseModel,
  DashboardRanksRequestModel,
  DashboardRanksResponseModel,
  DashboardStatisticsRequestModel,
  DashboardStatisticsResponseModel,
  DepositTransactionsRequestModel,
  DepositTransactionsResponseModel,
  DowngradeTransactionsRequestModel,
  DowngradeTransactionsResponseModel,
  ProfitTransactionsRequestModel,
  ProfitTransactionsResponseModel,
  UpgradeTransactionsRequestModel,
  UpgradeTransactionsResponseModel,
  WithdrawalTransactionsRequestModel,
  WithdrawalTransactionsResponseModel
} from "../../models";
import {
  GetDashboardLevelsFailure, GetDashboardLevelsRequest,
  GetDashboardLevelsSuccess, GetDashboardRanksFailure, GetDashboardRanksRequest,
  GetDashboardRanksSuccess, GetDashboardStatisticsFailure, GetDashboardStatisticsRequest,
  GetDashboardStatisticsSuccess, GetDepositTransactionsFailure, GetDepositTransactionsRequest,
  GetDepositTransactionsSuccess, GetDowngradeTransactionsFailure, GetDowngradeTransactionsRequest,
  GetDowngradeTransactionsSuccess, GetProfitTransactionsFailure, GetProfitTransactionsRequest,
  GetProfitTransactionsSuccess, GetUpgradeTransactionsFailure, GetUpgradeTransactionsRequest,
  GetUpgradeTransactionsSuccess, GetWithdrawalTransactionsFailure, GetWithdrawalTransactionsRequest,
  GetWithdrawalTransactionsSuccess, GET_DASHBOARD_LEVELS_FAILURE, GET_DASHBOARD_LEVELS_REQUEST,
  GET_DASHBOARD_LEVELS_SUCCESS, GET_DASHBOARD_RANKS_FAILURE, GET_DASHBOARD_RANKS_REQUEST,
  GET_DASHBOARD_RANKS_SUCCESS, GET_DASHBOARD_STATISTICS_FAILURE, GET_DASHBOARD_STATISTICS_REQUEST,
  GET_DASHBOARD_STATISTICS_SUCCESS, GET_DEPOSIT_TRANSACTIONS_FAILURE, GET_DEPOSIT_TRANSACTIONS_REQUEST,
  GET_DEPOSIT_TRANSACTIONS_SUCCESS, GET_DOWNGRADE_TRANSACTIONS_FAILURE, GET_DOWNGRADE_TRANSACTIONS_REQUEST,
  GET_DOWNGRADE_TRANSACTIONS_SUCCESS, GET_PROFIT_TRANSACTIONS_FAILURE, GET_PROFIT_TRANSACTIONS_REQUEST,
  GET_PROFIT_TRANSACTIONS_SUCCESS, GET_UPGRADE_TRANSACTIONS_FAILURE, GET_UPGRADE_TRANSACTIONS_REQUEST,
  GET_UPGRADE_TRANSACTIONS_SUCCESS, GET_WITHDRAWAL_TRANSACTIONS_FAILURE, GET_WITHDRAWAL_TRANSACTIONS_REQUEST,
  GET_WITHDRAWAL_TRANSACTIONS_SUCCESS
} from "../types/dashboard";

export const getDashboardStatisticsRequest = (
  payload: any
): any => ({
  type: GET_DASHBOARD_STATISTICS_REQUEST,
  payload,
});

export const getDashboardStatisticsSuccess = (
  payload: DashboardStatisticsResponseModel
): GetDashboardStatisticsSuccess => ({
  type: GET_DASHBOARD_STATISTICS_SUCCESS,
  payload,
});

export const getDashboardStatisticsFailure =
  (): GetDashboardStatisticsFailure => ({
    type: GET_DASHBOARD_STATISTICS_FAILURE,
  });

export const getDashboardLevelsRequest = (
  payload: DashboardLevelsRequestModel
): GetDashboardLevelsRequest => ({
  type: GET_DASHBOARD_LEVELS_REQUEST,
  payload,
});

export const getDashboardLevelsSuccess = (
  payload: DashboardLevelsResponseModel[]
): GetDashboardLevelsSuccess => ({
  type: GET_DASHBOARD_LEVELS_SUCCESS,
  payload,
});

export const getDashboardLevelsFailure = (): GetDashboardLevelsFailure => ({
  type: GET_DASHBOARD_LEVELS_FAILURE,
});

export const getDashboardRanksRequest = (
  payload: DashboardRanksRequestModel
): GetDashboardRanksRequest => ({
  type: GET_DASHBOARD_RANKS_REQUEST,
  payload,
});

export const getDashboardRanksSuccess = (
  payload: DashboardRanksResponseModel[]
): GetDashboardRanksSuccess => ({
  type: GET_DASHBOARD_RANKS_SUCCESS,
  payload,
});

export const getDashboardRanksFailure = (): GetDashboardRanksFailure => ({
  type: GET_DASHBOARD_RANKS_FAILURE,
});

export const getDepositTransactionsRequest = (
  payload: DepositTransactionsRequestModel
): GetDepositTransactionsRequest => ({
  type: GET_DEPOSIT_TRANSACTIONS_REQUEST,
  payload,
});

export const getDepositTransactionsSuccess = (
  payload: DepositTransactionsResponseModel[]
): GetDepositTransactionsSuccess => ({
  type: GET_DEPOSIT_TRANSACTIONS_SUCCESS,
  payload,
});

export const getDepositTransactionsFailure =
  (): GetDepositTransactionsFailure => ({
    type: GET_DEPOSIT_TRANSACTIONS_FAILURE,
  });

export const getUpgradeTransactionsRequest = (
  payload: UpgradeTransactionsRequestModel
): GetUpgradeTransactionsRequest => ({
  type: GET_UPGRADE_TRANSACTIONS_REQUEST,
  payload,
});

export const getUpgradeTransactionsSuccess = (
  payload: UpgradeTransactionsResponseModel[]
): GetUpgradeTransactionsSuccess => ({
  type: GET_UPGRADE_TRANSACTIONS_SUCCESS,
  payload,
});

export const getUpgradeTransactionsFailure =
  (): GetUpgradeTransactionsFailure => ({
    type: GET_UPGRADE_TRANSACTIONS_FAILURE,
  });

export const getWithdrawalTransactionsRequest = (
  payload: WithdrawalTransactionsRequestModel
): GetWithdrawalTransactionsRequest => ({
  type: GET_WITHDRAWAL_TRANSACTIONS_REQUEST,
  payload,
});

export const getWithdrawalTransactionsSuccess = (
  payload: WithdrawalTransactionsResponseModel[]
): GetWithdrawalTransactionsSuccess => ({
  type: GET_WITHDRAWAL_TRANSACTIONS_SUCCESS,
  payload,
});

export const getWithdrawalTransactionsFailure =
  (): GetWithdrawalTransactionsFailure => ({
    type: GET_WITHDRAWAL_TRANSACTIONS_FAILURE,
  });

export const getDowngradeTransactionsRequest = (
  payload: DowngradeTransactionsRequestModel
): GetDowngradeTransactionsRequest => ({
  type: GET_DOWNGRADE_TRANSACTIONS_REQUEST,
  payload,
});

export const getDowngradeTransactionsSuccess = (
  payload: DowngradeTransactionsResponseModel[]
): GetDowngradeTransactionsSuccess => ({
  type: GET_DOWNGRADE_TRANSACTIONS_SUCCESS,
  payload,
});

export const getDowngradeTransactionsFailure =
  (): GetDowngradeTransactionsFailure => ({
    type: GET_DOWNGRADE_TRANSACTIONS_FAILURE,
  });

export const getProfitTransactionsRequest = (
  payload: ProfitTransactionsRequestModel
): GetProfitTransactionsRequest => ({
  type: GET_PROFIT_TRANSACTIONS_REQUEST,
  payload,
});

export const getProfitTransactionsSuccess = (
  payload: ProfitTransactionsResponseModel[]
): GetProfitTransactionsSuccess => ({
  type: GET_PROFIT_TRANSACTIONS_SUCCESS,
  payload,
});

export const getProfitTransactionsFailure =
  (): GetProfitTransactionsFailure => ({
    type: GET_PROFIT_TRANSACTIONS_FAILURE,
  });
