import { AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { ShowErrorMessage } from "../../services/appService";
import {
  getNotificationsFailure,
  getNotificationsSuccess,
  markNotificationsAsReadFailure,
  markNotificationsAsReadSuccess,
} from "../actions/notificationActions";
import {
  GET_NOTIFICATIONS_REQUEST,
  MARK_NOTIFICATION_AS_READ_REQUEST,
} from "../types/notification";
import { apiCall } from "./api";

function* fetchGetNotificationsSaga(action: any) {
  // try {
  //   const res: AxiosResponse<any> = yield call(
  //     apiCall,
  //     "GET",
  //     "https://jsonplaceholder.typicode.com/todos",
  //     action.payload
  //   );
  //   yield put(getNotificationsSuccess(res.data));
  // } catch (e: any) {
  //   yield put(getNotificationsFailure());
  //   ShowErrorMessage(e);
  // }
}
function* fetchMarkNotificationsAsReadSaga(action: any) {
  // try {
  //   yield call(
  //     apiCall,
  //     "POST",
  //     "https://jsonplaceholder.typicode.com/todos",
  //     action.payload
  //   );
  //   yield put(markNotificationsAsReadSuccess());
  // } catch (e: any) {
  //   yield put(markNotificationsAsReadFailure());
  //   ShowErrorMessage(e);
  // }
}

function* notificationSaga() {
  yield all([takeLatest(GET_NOTIFICATIONS_REQUEST, fetchGetNotificationsSaga)]);
  yield all([
    takeLatest(
      MARK_NOTIFICATION_AS_READ_REQUEST,
      fetchMarkNotificationsAsReadSaga
    ),
  ]);
}

export default notificationSaga;
