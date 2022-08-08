import { createSelector } from "reselect";
import { AppState } from "../reducer";

const loading = (state: AppState) => state.user.loading;
const userInfo = (state: AppState) => state.user.userInfo;
const updateInfoSuccess = (state: AppState) => state.user.updateInfoSuccess;
const changePasswordSuccess = (state: AppState) =>
  state.user.changePasswordSuccess;
const enable2FASuccess = (state: AppState) => state.user.enable2FASuccess;

export const getUserLoadingSelector = createSelector(
  loading,
  (loading) => loading
);
export const getUserInfoSelector = createSelector(
  userInfo,
  (userInfo) => userInfo
);
export const getUpdateInfoSuccessSelector = createSelector(
  updateInfoSuccess,
  (updateInfoSuccess) => updateInfoSuccess
);

export const getChangePasswordSuccessSelector = createSelector(
  changePasswordSuccess,
  (changePasswordSuccess) => changePasswordSuccess
);
export const getEnable2FASuccessSelector = createSelector(
  enable2FASuccess,
  (enable2FASuccess) => enable2FASuccess
);
