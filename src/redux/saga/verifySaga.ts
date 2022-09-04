import { all, call, put, takeLatest } from "redux-saga/effects";
import { ENDPOINTS, MESSAGES, ROUTES } from "../../constants";
import { ShowErrorMessage, ShowSuccessMessage } from "../../services/appService";
import { extractError } from "../../utils/helpers";
import { history } from "../../utils/history";
import { verifyAccountSuccess, verifyAccountFailure } from "../actions/verifyAccountActions";
import { VERIFY_ACCOUNT_REQUEST } from "../types/verifyAccount";
import { apiCall } from "./api";

function* fetchVerifySaga(action: any): any {
  try {
    yield call(
      apiCall,
      "POST",
      ENDPOINTS.VERIFY_ACCOUNT,
      action.payload
    );
    yield put(verifyAccountSuccess());
    history.push(ROUTES.LOGIN);
    ShowSuccessMessage(MESSAGES.REGISTER_SUCCESS);
  } catch (e: any) {
    yield put(verifyAccountFailure());
    ShowErrorMessage({ msg: extractError(e) });
  }
}

function* verifySaga() {
  yield all([takeLatest(VERIFY_ACCOUNT_REQUEST, fetchVerifySaga)]);
}

export default verifySaga;
