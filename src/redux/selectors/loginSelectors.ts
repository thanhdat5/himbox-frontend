import { get } from "lodash";
import { createSelector } from "reselect";
import { AppState } from "../reducer";

const loginLoading = (state: AppState) => get(state, 'login.loading', false);
const loginSuccess = (state: AppState) => get(state, 'login.success', false)

export const getLoginLoadingSelector = createSelector(
  loginLoading,
  (loading) => loading
);
export const getLoginSuccessSelector = createSelector(
  loginSuccess,
  (success) => success
);