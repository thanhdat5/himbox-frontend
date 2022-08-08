import {
  DepositActions,
  DepositState,
  DEPOSIT_FAILURE,
  DEPOSIT_REQUEST,
  DEPOSIT_SUCCESS,
} from "../types/deposit";

const initialState: DepositState = {
  loading: false,
  success: false,
  error: null,
};

const depositReducer = (state = initialState, action: DepositActions) => {
  switch (action.type) {
    case DEPOSIT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DEPOSIT_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        error: null,
      };
    case DEPOSIT_FAILURE:
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
export default depositReducer;
