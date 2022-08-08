import {
  FetchTodoFailure, FetchTodoRequest,
  FetchTodoSuccess,
  FetchTodoSuccessPayload,
  FETCH_TODO_FAILURE,
  FETCH_TODO_REQUEST,
  FETCH_TODO_SUCCESS
} from "../types/todo";

export const fetchTodoRequest = (): FetchTodoRequest => ({
  type: FETCH_TODO_REQUEST,
});

export const fetchTodoSuccess = (
  payload: FetchTodoSuccessPayload
): FetchTodoSuccess => ({
  type: FETCH_TODO_SUCCESS,
  payload,
});

export const fetchTodoFailure = (): FetchTodoFailure => ({
  type: FETCH_TODO_FAILURE, 
});
