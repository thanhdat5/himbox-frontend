import {
  WithdrawActions,
  WithdrawState,
  WITHDRAW_FAILURE,
  WITHDRAW_REQUEST,
  WITHDRAW_SUCCESS,
} from "../types/withdraw";

const initialState: WithdrawState = {
  loading: false,
  success: false,
};

const withdrawReducer = (state = initialState, action: WithdrawActions) => {
  switch (action.type) {
    case WITHDRAW_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case WITHDRAW_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
      };
    case WITHDRAW_FAILURE:
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
export default withdrawReducer;
