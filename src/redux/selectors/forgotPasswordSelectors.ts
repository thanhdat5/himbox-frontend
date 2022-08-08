import { createSelector } from "reselect";
import { AppState } from "../reducer";

const forgotPasswordLoading = (state: AppState) => state.forgotPassword.loading;
const forgotPasswordSuccess = (state: AppState) => state.forgotPassword.success;
const sentVerifyCode = (state: AppState) => state.forgotPassword.sentVerifyCode;

export const getForgotPasswordLoadingSelector = createSelector(
  forgotPasswordLoading,
  (loading) => loading
);
export const getForgotPasswordSuccessSelector = createSelector(
  forgotPasswordSuccess,
  (success) => success
);
export const getSentVerifyCodeSelector = createSelector(sentVerifyCode, (sentVerifyCode) => sentVerifyCode);
