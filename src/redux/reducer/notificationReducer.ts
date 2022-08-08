import {
  NotificationActions,
  NotificationsState,
  GET_NOTIFICATIONS_FAILURE,
  GET_NOTIFICATIONS_REQUEST,
  GET_NOTIFICATIONS_SUCCESS,
  MARK_NOTIFICATION_AS_READ_FAILURE,
  MARK_NOTIFICATION_AS_READ_REQUEST,
  MARK_NOTIFICATION_AS_READ_SUCCESS,
} from "../types/notification";

const initialState: NotificationsState = {
  loading: false,
  success: false,
  error: null,
  notifications: null,
};

const notificationReducer = (
  state = initialState,
  action: NotificationActions
) => {
  switch (action.type) {
    case GET_NOTIFICATIONS_REQUEST:
      return {
        ...state,
        notifications: [],
        loading: true,
      };
    case GET_NOTIFICATIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        notifications: action.payload,
        error: null,
      };
    case GET_NOTIFICATIONS_FAILURE:
      return {
        ...state,
        loading: false,
        notifications: [],
        error: action.payload,
      };

    case MARK_NOTIFICATION_AS_READ_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case MARK_NOTIFICATION_AS_READ_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        error: null,
      };
    case MARK_NOTIFICATION_AS_READ_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
export default notificationReducer;
