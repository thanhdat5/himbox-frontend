import { createSelector } from "reselect";
import { AppState } from "../reducer";

const notificationLoading = (state: AppState) => state.notification.loading;
const notificationSuccess = (state: AppState) => state.notification.success;
const notifications = (state: AppState) => state.notification.notifications;

export const getNotificationLoadingSelector = createSelector(
  notificationLoading,
  (loading) => loading
);
export const getNotificationSuccessSelector = createSelector(
  notificationSuccess,
  (success) => success
);
export const getNotificationsSelector = createSelector(notifications, (notifications) => notifications);
