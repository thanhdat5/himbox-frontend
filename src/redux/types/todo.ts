import { ITodo } from "../../models/todoModel";

export const FETCH_TODO_REQUEST = "FETCH_TODO_REQUEST";
export const FETCH_TODO_SUCCESS = "FETCH_TODO_SUCCESS";
export const FETCH_TODO_FAILURE = "FETCH_TODO_FAILURE";

export interface TodoState {
  pending: boolean;
  todos: ITodo[];
}

export interface FetchTodoSuccessPayload {
  todos: ITodo[];
}


export interface FetchTodoRequest {
  type: typeof FETCH_TODO_REQUEST;
}

export type FetchTodoSuccess = {
  type: typeof FETCH_TODO_SUCCESS;
  payload: FetchTodoSuccessPayload;
};

export type FetchTodoFailure = {
  type: typeof FETCH_TODO_FAILURE;
};

export type TodoActions =
  | FetchTodoRequest
  | FetchTodoSuccess
  | FetchTodoFailure;
