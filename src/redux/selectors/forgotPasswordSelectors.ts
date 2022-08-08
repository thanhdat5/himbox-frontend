import { createSelector } from "reselect";
import { AppState } from "../reducer";

const forgotPasswordLoading = (state: AppState) => state.forgotPassword.loading;
const forgotPasswordSuccess = (state: AppState) => state.forgotPassword.success;
const forgotPasswordError = (state: AppState) => state.forgotPassword.error;
const sentVerifyCode = (state: AppState) => state.forgotPassword.sentVerifyCode;

export const getForgotPasswordLoadingSelector = createSelector(
  forgotPasswordLoading,
  (loading) => loading
);
export const getForgotPasswordSuccessSelector = createSelector(
  forgotPasswordSuccess,
  (success) => success
);
export const getForgotPasswordErrorSelector = createSelector(
  forgotPasswordError,
  (error) => error
);
export const getSentVerifyCodeSelector = createSelector(sentVerifyCode, (sentVerifyCode) => sentVerifyCode);
