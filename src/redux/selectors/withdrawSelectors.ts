import { createSelector } from "reselect";
import { AppState } from "../reducer";

const withdrawLoading = (state: AppState) => state.withdraw.loading;
const withdrawSuccess = (state: AppState) => state.withdraw.success;

export const getWithdrawLoadingSelector = createSelector(
  withdrawLoading,
  (loading) => loading
);
export const getWithdrawSuccessSelector = createSelector(
  withdrawSuccess,
  (success) => success
);
