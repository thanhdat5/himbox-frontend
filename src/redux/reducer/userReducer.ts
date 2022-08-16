import { LOGIN_SUCCESS } from "../types/login";
import {
  CHANGE_PASSWORD_FAILURE,
  CHANGE_PASSWORD_REQUEST,
  CHANGE_PASSWORD_SUCCESS,
  ENABLE_2FA_FAILURE,
  ENABLE_2FA_REQUEST,
  ENABLE_2FA_SUCCESS,
  GENERATE_2FA_REQUEST,
  GENERATE_2FA_SUCCESS,
  GENERATE_2FA_FAILURE,
  GET_USER_INFO_FAILURE,
  GET_USER_INFO_REQUEST,
  GET_USER_INFO_SUCCESS,
  LOG_OUT,
  UPDATE_USER_INFO_FAILURE,
  UPDATE_USER_INFO_REQUEST,
  UPDATE_USER_INFO_SUCCESS,
  UserActions,
  UserState,
  RESET_USER_STATE,
  DISABLE_2FA_REQUEST,
  DISABLE_2FA_SUCCESS,
  DISABLE_2FA_FAILURE,
} from "../types/user";

const initialState: UserState = {
  loading: false,
  updateInfoSuccess: false,
  changePasswordSuccess: false,
  enable2FASuccess: false,
  disable2FASuccess: false,
  userInfo: null,
  twoFA: null,
};

const userReducer = (state = initialState, action: UserActions) => {
  switch (action.type) {
    case RESET_USER_STATE:
      return {
        ...state,
        loading: false,
        updateInfoSuccess: false,
        changePasswordSuccess: false,
        enable2FASuccess: false,
        disable2FASuccess: false,
        twoFA: null,
      };
    case GET_USER_INFO_REQUEST:
      return {
        ...state,
        loading: true,
        userInfo: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        userInfo: { ...state.userInfo, ...action.payload },
      };
    case GET_USER_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        userInfo: { ...state.userInfo, ...action.payload },
      };
    case GET_USER_INFO_FAILURE:
      return {
        ...state,
        loading: false,
        userInfo: null,
      };

    case UPDATE_USER_INFO_REQUEST:
      return {
        ...state,
        loading: true,
        updateInfoSuccess: false,
      };
    case UPDATE_USER_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        updateInfoSuccess: true,
      };
    case UPDATE_USER_INFO_FAILURE:
      return {
        ...state,
        loading: false,
        updateInfoSuccess: false,
      };

    case CHANGE_PASSWORD_REQUEST:
      return {
        ...state,
        loading: true,
        changePasswordSuccess: false,
      };
    case CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        changePasswordSuccess: true,
      };
    case CHANGE_PASSWORD_FAILURE:
      return {
        ...state,
        loading: false,
        changePasswordSuccess: false,
      };

    case ENABLE_2FA_REQUEST:
      return {
        ...state,
        loading: true,
        enable2FASuccess: false,
      };
    case ENABLE_2FA_SUCCESS:
      return {
        ...state,
        loading: false,
        enable2FASuccess: true,
      };
    case ENABLE_2FA_FAILURE:
      return {
        ...state,
        loading: false,
        enable2FASuccess: false,
      };

    case DISABLE_2FA_REQUEST:
      return {
        ...state,
        loading: true,
        disable2FASuccess: false,
      };
    case DISABLE_2FA_SUCCESS:
      return {
        ...state,
        loading: false,
        disable2FASuccess: true,
      };
    case DISABLE_2FA_FAILURE:
      return {
        ...state,
        loading: false,
        disable2FASuccess: false,
      };

    case GENERATE_2FA_REQUEST:
      return {
        ...state,
        loading: true,
        twoFA: null,
      };
    case GENERATE_2FA_SUCCESS:
      return {
        ...state,
        loading: false,
        twoFA: action.payload,
      };
    case GENERATE_2FA_FAILURE:
      return {
        ...state,
        loading: false,
        twoFA: null,
      };
    case LOG_OUT:
      return initialState;
    default:
      return {
        ...state,
      };
  }
};
export default userReducer;
