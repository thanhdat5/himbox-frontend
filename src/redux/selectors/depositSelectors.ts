import { createSelector } from "reselect";
import { AppState } from "../reducer";

const depositLoading = (state: AppState) => state.deposit.loading;
const depositSuccess = (state: AppState) => state.deposit.success;

export const getDepositLoadingSelector = createSelector(
  depositLoading,
  (loading) => loading
);
export const getDepositSuccessSelector = createSelector(
  depositSuccess,
  (success) => success
);
