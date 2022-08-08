import { AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { ShowErrorMessage } from "../../services/appService";
import {
  confirmParticipateFailure, confirmParticipateSuccess, getPackagesByProfitFailure, getPackagesByProfitSuccess, getPackageStatisticsFailure, getPackageStatisticsSuccess
} from "../actions/packageActions";
import {
  CONFIRM_PARTICIPATE_REQUEST, GET_PACKAGES_BY_PROFIT_REQUEST, GET_PACKAGE_STATISTICS_REQUEST
} from "../types/package";
import { apiCall } from "./api";

function* fetchPackageStatisticsSaga(action: any) {
  try {
    const res: AxiosResponse<any> = yield call(
      apiCall,
      "GET",
      "https://jsonplaceholder.typicode.com/todos",
      action.payload
    );
    yield put(getPackageStatisticsSuccess(res.data));
  } catch (e: any) {
    yield put(getPackageStatisticsFailure());
    ShowErrorMessage(e);
  }
}
function* fetchGetPackagesByProfitSaga(action: any) {
  try {
    const res: AxiosResponse<any> = yield call(
      apiCall,
      "GET",
      "https://jsonplaceholder.typicode.com/todos",
      action.payload
    );
    yield put(getPackagesByProfitSuccess(res.data));
  } catch (e: any) {
    yield put(getPackagesByProfitFailure());
    ShowErrorMessage(e);
  }
}
function* fetchConfirmParticipateSaga(action: any) {
  try {
    yield call(
      apiCall,
      "POST",
      "https://jsonplaceholder.typicode.com/todos",
      action.payload
    );
    yield put(confirmParticipateSuccess());
  } catch (e: any) {
    yield put(confirmParticipateFailure());
    ShowErrorMessage(e);
  }
}

function* packageSaga() {
  yield all([
    takeLatest(GET_PACKAGE_STATISTICS_REQUEST, fetchPackageStatisticsSaga),
  ]);
  yield all([
    takeLatest(GET_PACKAGES_BY_PROFIT_REQUEST, fetchGetPackagesByProfitSaga),
  ]);
  yield all([
    takeLatest(CONFIRM_PARTICIPATE_REQUEST, fetchConfirmParticipateSaga),
  ]);
}

export default packageSaga;
