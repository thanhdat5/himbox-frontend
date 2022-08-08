import { createSelector } from "reselect";
import { AppState } from "../reducer";

const loginLoading = (state: AppState) => state.login.loading;
const loginSuccess = (state: AppState) => state.login.success;
const loginError = (state: AppState) => state.login.error;

export const getLoginLoadingSelector = createSelector(
  loginLoading,
  (loading) => loading
);
export const getLoginSuccessSelector = createSelector(
  loginSuccess,
  (success) => success
);
export const getLoginErrorSelector = createSelector(loginError, (error) => error);
