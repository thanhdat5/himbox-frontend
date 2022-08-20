import { GET_LIST_COMMISSION_SUCCESS, GET_LIST_STAKE_SUCCESS } from './../types/withdraw';
import {
  CANCEL_WITHDRAW_FAILURE,
  CANCEL_WITHDRAW_REQUEST,
  CANCEL_WITHDRAW_SUCCESS,
  CONFIRM_WITHDRAW_FAILURE,
  CONFIRM_WITHDRAW_REQUEST,
  CONFIRM_WITHDRAW_SUCCESS,
  CREATE_WITHDRAW_FAILURE,
  CREATE_WITHDRAW_REQUEST,
  CREATE_WITHDRAW_SUCCESS,
  GET_LIST_WITHDRAW_FAILURE,
  GET_LIST_WITHDRAW_REQUEST,
  GET_LIST_WITHDRAW_SUCCESS,
  RESET_WITHDRAW_STATE,
  WithdrawActions,
  WithdrawState
} from "../types/withdraw";

const initialState: WithdrawState = {
  loading: false,
  loadingList: false,
  success: false,
  confirmSuccess: false,
  cancelSuccess: false,
  withdrawRequest: null,
  withdrawalTransactions: [],
  commissionTransactions: [],
  stakeTransactions: []
};

const withdrawReducer = (state = initialState, action: WithdrawActions) => {
  switch (action.type) {
    case RESET_WITHDRAW_STATE:
      return {
        ...state,
        loadingList: false,
        loading: false,
        success: false,
        withdrawRequest: null,
        confirmSuccess: false,
        cancelSuccess: false,
      };
    case GET_LIST_WITHDRAW_REQUEST:
      return {
        ...state,
        loadingList: true,
        // withdrawalTransactions: [],
      };
    case GET_LIST_WITHDRAW_SUCCESS:
      return {
        ...state,
        loadingList: false,
        withdrawalTransactions: action.payload,
      };
    case GET_LIST_COMMISSION_SUCCESS:
      return {
        ...state,
        commissionTransactions: action.payload,
      };
    case GET_LIST_STAKE_SUCCESS:
      return {
        ...state,
        stakeTransactions: action.payload,
      };
    case GET_LIST_WITHDRAW_FAILURE:
      return {
        ...state,
        loadingList: false,
        // withdrawalTransactions: [],
      };
    case CREATE_WITHDRAW_REQUEST:
      return {
        ...state,
        loading: true,
        withdrawRequest: null,
      };
    case CREATE_WITHDRAW_SUCCESS:
      return {
        ...state,
        loading: false,
        withdrawRequest: action.payload,
      };
    case CREATE_WITHDRAW_FAILURE:
      return {
        ...state,
        loading: false,
        withdrawRequest: null,
      };
    case CONFIRM_WITHDRAW_REQUEST:
      return {
        ...state,
        loading: true,
        confirmSuccess: false,
      };
    case CONFIRM_WITHDRAW_SUCCESS:
      return {
        ...state,
        loading: false,
        confirmSuccess: true,
      };
    case CONFIRM_WITHDRAW_FAILURE:
      return {
        ...state,
        loading: false,
        confirmSuccess: false,
      };
    case CANCEL_WITHDRAW_REQUEST:
      return {
        ...state,
        loading: true,
        cancelSuccess: false,
      };
    case CANCEL_WITHDRAW_SUCCESS:
      return {
        ...state,
        loading: false,
        cancelSuccess: true,
      };
    case CANCEL_WITHDRAW_FAILURE:
      return {
        ...state,
        loading: false,
        cancelSuccess: false,
      };
    default:
      return {
        ...state,
      };
  }
};
export default withdrawReducer;
