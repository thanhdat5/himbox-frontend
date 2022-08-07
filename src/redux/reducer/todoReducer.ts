import { FETCH_TODO_FAILURE, FETCH_TODO_REQUEST, FETCH_TODO_SUCCESS, TodoActions, TodoState } from "../types/todo";

  const initialState: TodoState = {
    pending: false,
    todos: [],
    error: null,
  };
  
const todoResucer = (state = initialState, action: TodoActions) => {
    switch (action.type) {
      case FETCH_TODO_REQUEST:
        return {
          ...state,
          pending: true,
        };
      case FETCH_TODO_SUCCESS:
        return {
          ...state,
          pending: false,
          todos: action.payload.todos,
          error: null,
        };
      case FETCH_TODO_FAILURE:
        return {
          ...state,
          pending: false,
          todos: [],
          error: action.payload.error,
        };
      default:
        return {
          ...state,
        };
    }
  };
  export default todoResucer