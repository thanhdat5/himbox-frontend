import { AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { ITodo } from "../../models";
import { fetchTodoFailure, fetchTodoSuccess } from "../actions/todoActions";
import { FETCH_TODO_REQUEST } from "../types/todo";
import { apiCall } from "./api";

/*
  Worker Saga: Fired on FETCH_TODO_REQUEST action
*/
function* fetchTodoSaga() {
  // try {
  //   const response: AxiosResponse<ITodo[]> = yield call(
  //     apiCall,
  //     "GET",
  //     "https://jsonplaceholder.typicode.com/todos"
  //   );
  //   yield put(
  //     fetchTodoSuccess({
  //       todos: response.data,
  //     })
  //   );
  // } catch (e: any) {
  //   yield put(
  //     fetchTodoFailure()
  //   );
  // }
}

/*
  Starts worker saga on latest dispatched `FETCH_TODO_REQUEST` action.
  Allows concurrent increments.
*/
function* todoSaga() {
  // yield all([takeLatest(FETCH_TODO_REQUEST, fetchTodoSaga)]);
}

export default todoSaga;
