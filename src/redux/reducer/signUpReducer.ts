import {
  SignUpActions,
  SignUpState,
  SIGN_UP_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  VERIFY_REQUEST,
} from "../types/signUp";
import { VERIFY_ACCOUNT_SUCCESS } from "../types/verifyAccount";

const initialState: SignUpState = {
  loading: false,
  success: false,
  userVerify: null,
  error: ''
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
        error: '',
        userVerify: action.payload
      };
    case VERIFY_ACCOUNT_SUCCESS: 
      return {
        ...state,
        userVerify: null
      };
    case SIGN_UP_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.message
      };
    case VERIFY_REQUEST: 
      return {
        ...state,
        userVerify: action.payload
      };
    default:
      return {
        ...state,
      };
  }
};
export default signUpReducer;
