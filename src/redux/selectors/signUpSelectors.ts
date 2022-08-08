import { createSelector } from "reselect";
import { AppState } from "../reducer";

const signUpLoading = (state: AppState) => state.signUp.loading;
const signUpSuccess = (state: AppState) => state.signUp.success;
const signUpError = (state: AppState) => state.signUp.error;

export const getSignUpLoadingSelector = createSelector(
  signUpLoading,
  (loading) => loading
);
export const getSignUpSuccessSelector = createSelector(
  signUpSuccess,
  (success) => success
);
export const getSignUpErrorSelector = createSelector(
  signUpError,
  (error) => error
);
