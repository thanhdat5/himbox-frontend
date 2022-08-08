import {
  SignUpActions,
  SignUpState,
  SIGN_UP_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
} from "../types/signUp";

const initialState: SignUpState = {
  loading: false,
  success: false,
  error: null,
};

const signUpReducer = (state = initialState, action: SignUpActions) => {
  switch (action.type) {
    case SIGN_UP_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        error: null,
      };
    case SIGN_UP_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
export default signUpReducer;
