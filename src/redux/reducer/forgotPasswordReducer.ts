import {
  ForgotPasswordActions,
  ForgotPasswordState,
  RECOVER_PASSWORD_FAILURE,
  RECOVER_PASSWORD_REQUEST,
  RECOVER_PASSWORD_SUCCESS,
  SEND_VERIFY_CODE_FAILURE,
  SEND_VERIFY_CODE_REQUEST,
  SEND_VERIFY_CODE_SUCCESS
} from "../types/forgotPassword";

const initialState: ForgotPasswordState = {
  loading: false,
  success: false,
  sentVerifyCode: false,
};

const forgotPasswordReducer = (
  state = initialState,
  action: ForgotPasswordActions
) => {
  switch (action.type) {
    case SEND_VERIFY_CODE_REQUEST:
      return {
        ...state,
        sentVerifyCode: false,
        loading: true,
      };
    case SEND_VERIFY_CODE_SUCCESS:
      return {
        ...state,
        loading: false,
        sentVerifyCode: true,
      };
    case SEND_VERIFY_CODE_FAILURE:
      return {
        ...state,
        loading: false,
        sentVerifyCode: false,
      };

    case RECOVER_PASSWORD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case RECOVER_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
      };
    case RECOVER_PASSWORD_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
      };
    default:
      return {
        ...state,
      };
  }
};
export default forgotPasswordReducer;
