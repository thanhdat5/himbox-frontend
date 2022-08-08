import { createSelector } from "reselect";
import { AppState } from "../reducer";

const loginLoading = (state: AppState) => state.login.loading;
const loginSuccess = (state: AppState) => state.login.success;

export const getLoginLoadingSelector = createSelector(
  loginLoading,
  (loading) => loading
);
export const getLoginSuccessSelector = createSelector(
  loginSuccess,
  (success) => success
);