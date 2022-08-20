import {
  GET_DASHBOARD_LEVELS_FAILURE,
  GET_DASHBOARD_LEVELS_REQUEST,
  GET_DASHBOARD_LEVELS_SUCCESS,
  GET_DASHBOARD_RANKS_FAILURE,
  GET_DASHBOARD_RANKS_REQUEST,
  GET_DASHBOARD_RANKS_SUCCESS,
  GET_DASHBOARD_STATISTICS_FAILURE,
  GET_DASHBOARD_STATISTICS_REQUEST,
  GET_DASHBOARD_STATISTICS_SUCCESS,
  GET_DEPOSIT_TRANSACTIONS_FAILURE,
  GET_DEPOSIT_TRANSACTIONS_REQUEST,
  GET_DEPOSIT_TRANSACTIONS_SUCCESS,
  GET_DOWNGRADE_TRANSACTIONS_FAILURE,
  GET_DOWNGRADE_TRANSACTIONS_REQUEST,
  GET_DOWNGRADE_TRANSACTIONS_SUCCESS,
  GET_PROFIT_TRANSACTIONS_FAILURE,
  GET_PROFIT_TRANSACTIONS_REQUEST,
  GET_PROFIT_TRANSACTIONS_SUCCESS,
  GET_UPGRADE_TRANSACTIONS_FAILURE,
  GET_UPGRADE_TRANSACTIONS_REQUEST,
  GET_UPGRADE_TRANSACTIONS_SUCCESS,
  GET_WITHDRAWAL_TRANSACTIONS_FAILURE,
  GET_WITHDRAWAL_TRANSACTIONS_REQUEST,
  GET_WITHDRAWAL_TRANSACTIONS_SUCCESS,
  DashboardActions,
  DashboardState,
} from "../types/dashboard";

const initialState: DashboardState = {
  loadingStatistics: false,
  statistics: null,
  loadingLevels: false,
  levels: [],
  loadingRanks: false,
  ranks: [],
  loadingTransactions: false,
  depositTransactions: [],
  upgradeTransactions: [],
  withdrawalTransactions: [],
  downgradeTransactions: [],
  profitTransactions: [],
};

const dashboardReducer = (state = initialState, action: DashboardActions) => {
  switch (action.type) {
    case GET_DASHBOARD_STATISTICS_REQUEST:
      return {
        ...state,
        loadingStatistics: true,
        // statistics: null,
      };
    case GET_DASHBOARD_STATISTICS_SUCCESS:
      return {
        ...state,
        loadingStatistics: false,
        statistics: action.payload,
      };
    case GET_DASHBOARD_STATISTICS_FAILURE:
      return {
        ...state,
        loadingStatistics: false,
        statistics: null,
      };

    case GET_DASHBOARD_LEVELS_REQUEST:
      return {
        ...state,
        loadingLevels: true,
        levels: [],
      };
    case GET_DASHBOARD_LEVELS_SUCCESS:
      return {
        ...state,
        loadingLevels: false,
        levels: action.payload,
      };
    case GET_DASHBOARD_LEVELS_FAILURE:
      return {
        ...state,
        loadingLevels: false,
        levels: [],
      };

    case GET_DASHBOARD_RANKS_REQUEST:
      return {
        ...state,
        loadingRanks: true,
        ranks: [],
      };
    case GET_DASHBOARD_RANKS_SUCCESS:
      return {
        ...state,
        loadingRanks: false,
        ranks: action.payload,
      };
    case GET_DASHBOARD_RANKS_FAILURE:
      return {
        ...state,
        loadingRanks: false,
        ranks: [],
      };

    case GET_DEPOSIT_TRANSACTIONS_REQUEST:
      return {
        ...state,
        loadingTransactions: true,
        // depositTransactions: [],
      };
    case GET_DEPOSIT_TRANSACTIONS_SUCCESS:
      return {
        ...state,
        loadingTransactions: false,
        depositTransactions: action.payload,
      };
    case GET_DEPOSIT_TRANSACTIONS_FAILURE:
      return {
        ...state,
        loadingTransactions: false,
        // depositTransactions: [],
      };

    case GET_UPGRADE_TRANSACTIONS_REQUEST:
      return {
        ...state,
        loadingTransactions: true,
        upgradeTransactions: [],
      };
    case GET_UPGRADE_TRANSACTIONS_SUCCESS:
      return {
        ...state,
        loadingTransactions: false,
        upgradeTransactions: action.payload,
      };
    case GET_UPGRADE_TRANSACTIONS_FAILURE:
      return {
        ...state,
        loadingTransactions: false,
        upgradeTransactions: [],
      };

    // case GET_WITHDRAWAL_TRANSACTIONS_REQUEST:
    //   return {
    //     ...state,
    //     loadingTransactions: true,
    //     withdrawalTransactions: [],
    //   };
    // case GET_WITHDRAWAL_TRANSACTIONS_SUCCESS:
    //   return {
    //     ...state,
    //     loadingTransactions: false,
    //     withdrawalTransactions: action.payload,
    //   };
    // case GET_WITHDRAWAL_TRANSACTIONS_FAILURE:
    //   return {
    //     ...state,
    //     loadingTransactions: false,
    //     withdrawalTransactions: [],
    //   };

    case GET_DOWNGRADE_TRANSACTIONS_REQUEST:
      return {
        ...state,
        loadingTransactions: true,
        downgradeTransactions: [],
      };
    case GET_DOWNGRADE_TRANSACTIONS_SUCCESS:
      return {
        ...state,
        loadingTransactions: false,
        downgradeTransactions: action.payload,
      };
    case GET_DOWNGRADE_TRANSACTIONS_FAILURE:
      return {
        ...state,
        loadingTransactions: false,
        downgradeTransactions: [],
      };

    case GET_PROFIT_TRANSACTIONS_REQUEST:
      return {
        ...state,
        loadingTransactions: true,
        profitTransactions: [],
      };
    case GET_PROFIT_TRANSACTIONS_SUCCESS:
      return {
        ...state,
        loadingTransactions: false,
        profitTransactions: action.payload,
      };
    case GET_PROFIT_TRANSACTIONS_FAILURE:
      return {
        ...state,
        loadingTransactions: false,
        profitTransactions: [],
      };
    default:
      return {
        ...state,
      };
  }
};
export default dashboardReducer;
