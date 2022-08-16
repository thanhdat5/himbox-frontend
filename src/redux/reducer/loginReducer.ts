import {
  LoginActions,
  LoginState,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from "../types/login";

const initialState: LoginState = {
  loading: false,
  success: false,
  userInfo: null,
};

const loginReducer = (state = initialState, action: LoginActions) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        success: action.payload,
      };
    case LOGIN_FAILURE:
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
export default loginReducer;
