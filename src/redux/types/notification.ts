import {
  NotificationMarkRequestModel,
  NotificationRequestModel,
  NotificationResponseModel
} from "../../models";

export const GET_NOTIFICATIONS_REQUEST = "GET_NOTIFICATIONS_REQUEST";
export const GET_NOTIFICATIONS_SUCCESS = "GET_NOTIFICATIONS_SUCCESS";
export const GET_NOTIFICATIONS_FAILURE = "GET_NOTIFICATIONS_FAILURE";

export const MARK_NOTIFICATION_AS_READ_REQUEST =
  "MARK_NOTIFICATION_AS_READ_REQUEST";
export const MARK_NOTIFICATION_AS_READ_SUCCESS =
  "MARK_NOTIFICATION_AS_READ_SUCCESS";
export const MARK_NOTIFICATION_AS_READ_FAILURE =
  "MARK_NOTIFICATION_AS_READ_FAILURE";

export interface NotificationsState {
  loading: boolean;
  success: boolean;
  notifications: NotificationResponseModel[] | null;
}

export interface GetNotificationsRequest {
  type: typeof GET_NOTIFICATIONS_REQUEST;
  payload: NotificationRequestModel;
}

export type GetNotificationsSuccess = {
  type: typeof GET_NOTIFICATIONS_SUCCESS;
  payload: NotificationResponseModel[];
};

export type GetNotificationsFailure = {
  type: typeof GET_NOTIFICATIONS_FAILURE;
};

export interface MarkNotificationsAsReadRequest {
  type: typeof MARK_NOTIFICATION_AS_READ_REQUEST;
  payload: NotificationMarkRequestModel;
}

export type MarkNotificationsAsReadSuccess = {
  type: typeof MARK_NOTIFICATION_AS_READ_SUCCESS;
};

export type MarkNotificationsAsReadFailure = {
  type: typeof MARK_NOTIFICATION_AS_READ_FAILURE;
};

export type NotificationActions =
  | GetNotificationsRequest
  | GetNotificationsSuccess
  | GetNotificationsFailure
  | MarkNotificationsAsReadRequest
  | MarkNotificationsAsReadSuccess
  | MarkNotificationsAsReadFailure;
