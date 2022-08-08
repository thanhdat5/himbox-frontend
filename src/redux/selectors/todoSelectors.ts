import { createSelector } from "reselect";
import { AppState } from "../reducer";

const getPending = (state: AppState) => state.todo.pending;

const getTodos = (state: AppState) => state.todo.todos;

export const getTodosSelector = createSelector(getTodos, (todos) => todos);

export const getPendingSelector = createSelector(
  getPending,
  (pending) => pending
);
