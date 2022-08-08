import {
  CHANGE_PASSWORD_FAILURE, CHANGE_PASSWORD_REQUEST,
  CHANGE_PASSWORD_SUCCESS, ENABLE_2FA_FAILURE, ENABLE_2FA_REQUEST,
  ENABLE_2FA_SUCCESS, GET_USER_INFO_FAILURE, GET_USER_INFO_REQUEST,
  GET_USER_INFO_SUCCESS, UPDATE_USER_INFO_FAILURE, UPDATE_USER_INFO_REQUEST,
  UPDATE_USER_INFO_SUCCESS, UserActions,
  UserState
} from "../types/user";

const initialState: UserState = {
  loading: false,
  updateInfoSuccess: false,
  changePasswordSuccess: false,
  enable2FASuccess: false,
  userInfo: null,
};

const userReducer = (state = initialState, action: UserActions) => {
  switch (action.type) {
    case GET_USER_INFO_REQUEST:
      return {
        ...state,
        loading: true,
        user: null,
      };
    case GET_USER_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case GET_USER_INFO_FAILURE:
      return {
        ...state,
        loading: false,
        user: null,
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
    default:
      return {
        ...state,
      };
  }
};
export default userReducer;
