import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import signUpReducer from "./signUpReducer";
import forgotPasswordReducer from "./forgotPasswordReducer";
import todoReducer from "./todoReducer";

const rootReducer = combineReducers({
  todo: todoReducer,
  login: loginReducer,
  signUp: signUpReducer,
  forgotPassword: forgotPasswordReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
