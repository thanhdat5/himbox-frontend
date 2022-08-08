import {
  NotificationMarkRequestModel,
  NotificationRequestModel,
  NotificationResponseModel
} from "../../models";
import {
  GetNotificationsFailure,
  GetNotificationsRequest,
  GetNotificationsSuccess,
  GET_NOTIFICATIONS_FAILURE,
  GET_NOTIFICATIONS_REQUEST,
  GET_NOTIFICATIONS_SUCCESS,
  MarkNotificationsAsReadFailure,
  MarkNotificationsAsReadRequest,
  MarkNotificationsAsReadSuccess,
  MARK_NOTIFICATION_AS_READ_FAILURE,
  MARK_NOTIFICATION_AS_READ_REQUEST,
  MARK_NOTIFICATION_AS_READ_SUCCESS
} from "../types/notification";

export const getNotificationsRequest = (
  payload: NotificationRequestModel
): GetNotificationsRequest => ({
  type: GET_NOTIFICATIONS_REQUEST,
  payload,
});

export const getNotificationsSuccess = (
  payload: NotificationResponseModel[]
): GetNotificationsSuccess => ({
  type: GET_NOTIFICATIONS_SUCCESS,
  payload,
});

export const getNotificationsFailure = (): GetNotificationsFailure => ({
  type: GET_NOTIFICATIONS_FAILURE,
});

export const markNotificationsAsReadRequest = (
  payload: NotificationMarkRequestModel
): MarkNotificationsAsReadRequest => ({
  type: MARK_NOTIFICATION_AS_READ_REQUEST,
  payload,
});

export const markNotificationsAsReadSuccess =
  (): MarkNotificationsAsReadSuccess => ({
    type: MARK_NOTIFICATION_AS_READ_SUCCESS,
  });

export const markNotificationsAsReadFailure =
  (): MarkNotificationsAsReadFailure => ({
    type: MARK_NOTIFICATION_AS_READ_FAILURE,
  });
