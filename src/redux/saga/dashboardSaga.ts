import { AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { ENDPOINTS } from "../../constants";
import { ShowErrorMessage } from "../../services/appService";
import {
  getDashboardLevelsFailure,
  getDashboardLevelsSuccess,
  getDashboardRanksFailure,
  getDashboardRanksSuccess, getDashboardStatisticsFailure,
  getDashboardStatisticsSuccess, getDepositTransactionsFailure,
  getDepositTransactionsSuccess, getDowngradeTransactionsFailure, getDowngradeTransactionsSuccess, getProfitTransactionsFailure, getProfitTransactionsSuccess, getUpgradeTransactionsFailure,
  getUpgradeTransactionsSuccess,
  getWithdrawalTransactionsFailure,
  getWithdrawalTransactionsSuccess
} from "../actions/dashboardActions";
import {
  GET_DASHBOARD_LEVELS_REQUEST, GET_DASHBOARD_RANKS_REQUEST, GET_DASHBOARD_STATISTICS_REQUEST, GET_DEPOSIT_TRANSACTIONS_REQUEST, GET_DOWNGRADE_TRANSACTIONS_REQUEST,
  GET_PROFIT_TRANSACTIONS_REQUEST, GET_UPGRADE_TRANSACTIONS_REQUEST,
  GET_WITHDRAWAL_TRANSACTIONS_REQUEST
} from "../types/dashboard";
import { apiCall } from "./api";

function* fetchDashboardStatisticsSaga(action: any) {
  try {
    const res: AxiosResponse<any> = yield call(
      apiCall,
      "GET",
      ENDPOINTS.DASHBOARD_INFO
    );
    // console.log('fetchDashboardStatisticsSaga', res);
    yield put(getDashboardStatisticsSuccess(res.data.data));
  } catch (e: any) {
    yield put(getDashboardStatisticsFailure());
    ShowErrorMessage(e);
  }
}
function* fetchDashboardLevelsSaga(action: any) {
  try {
    const res: AxiosResponse<any> = yield call(
      apiCall,
      "GET",
      "https://jsonplaceholder.typicode.com/todos",
      action.payload
    );
    yield put(getDashboardLevelsSuccess(res.data));
  } catch (e: any) {
    yield put(getDashboardLevelsFailure());
    ShowErrorMessage(e);
  }
}
function* fetchDashboardRanksSaga(action: any) {
  try {
    const res: AxiosResponse<any> = yield call(
      apiCall,
      "GET",
      "https://jsonplaceholder.typicode.com/todos",
      action.payload
    );
    yield put(getDashboardRanksSuccess(res.data));
  } catch (e: any) {
    yield put(getDashboardRanksFailure());
    ShowErrorMessage(e);
  }
}

function* fetchDepositTransactionsSaga(action: any) {
  try {
    const res: AxiosResponse<any> = yield call(
      apiCall,
      "GET",
      "https://jsonplaceholder.typicode.com/todos",
      action.payload
    );
    yield put(getDepositTransactionsSuccess(res.data));
  } catch (e: any) {
    yield put(getDepositTransactionsFailure());
    ShowErrorMessage(e);
  }
}
function* fetchUpgradeTransactionsSaga(action: any) {
  try {
    const res: AxiosResponse<any> = yield call(
      apiCall,
      "GET",
      "https://jsonplaceholder.typicode.com/todos",
      action.payload
    );
    yield put(getUpgradeTransactionsSuccess(res.data));
  } catch (e: any) {
    yield put(getUpgradeTransactionsFailure());
    ShowErrorMessage(e);
  }
}
function* fetchWithdrawalTransactionsSaga(action: any) {
  try {
    const res: AxiosResponse<any> = yield call(
      apiCall,
      "GET",
      "https://jsonplaceholder.typicode.com/todos",
      action.payload
    );
    yield put(getWithdrawalTransactionsSuccess(res.data));
  } catch (e: any) {
    yield put(getWithdrawalTransactionsFailure());
    ShowErrorMessage(e);
  }
}
function* fetchDowngradeTransactionsSaga(action: any) {
  try {
    const res: AxiosResponse<any> = yield call(
      apiCall,
      "GET",
      "https://jsonplaceholder.typicode.com/todos",
      action.payload
    );
    yield put(getDowngradeTransactionsSuccess(res.data));
  } catch (e: any) {
    yield put(getDowngradeTransactionsFailure());
    ShowErrorMessage(e);
  }
}
function* fetchProfitTransactionsSaga(action: any) {
  try {
    const res: AxiosResponse<any> = yield call(
      apiCall,
      "GET",
      "https://jsonplaceholder.typicode.com/todos",
      action.payload
    );
    yield put(getProfitTransactionsSuccess(res.data));
  } catch (e: any) {
    yield put(getProfitTransactionsFailure());
    ShowErrorMessage(e);
  }
}

function* dashboardSaga() {
  yield all([
    takeLatest(GET_DASHBOARD_STATISTICS_REQUEST, fetchDashboardStatisticsSaga),
  ]);
  yield all([
    takeLatest(GET_DASHBOARD_LEVELS_REQUEST, fetchDashboardLevelsSaga),
  ]);
  yield all([takeLatest(GET_DASHBOARD_RANKS_REQUEST, fetchDashboardRanksSaga)]);
  yield all([
    takeLatest(GET_DEPOSIT_TRANSACTIONS_REQUEST, fetchDepositTransactionsSaga),
  ]);
  yield all([
    takeLatest(GET_UPGRADE_TRANSACTIONS_REQUEST, fetchUpgradeTransactionsSaga),
  ]);
  yield all([
    takeLatest(
      GET_WITHDRAWAL_TRANSACTIONS_REQUEST,
      fetchWithdrawalTransactionsSaga
    ),
  ]);
  yield all([
    takeLatest(
      GET_DOWNGRADE_TRANSACTIONS_REQUEST,
      fetchDowngradeTransactionsSaga
    ),
  ]);
  yield all([
    takeLatest(GET_PROFIT_TRANSACTIONS_REQUEST, fetchProfitTransactionsSaga),
  ]);
}

export default dashboardSaga;
