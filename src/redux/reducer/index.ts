import { combineReducers } from "redux";
import depositReducer from "./depositReducer";
import forgotPasswordReducer from "./forgotPasswordReducer";
import loginReducer from "./loginReducer";
import notificationReducer from "./notificationReducer";
import signUpReducer from "./signUpReducer";
import todoReducer from "./todoReducer";
import withdrawReducer from "./withdrawReducer";

const rootReducer = combineReducers({
  todo: todoReducer,
  login: loginReducer,
  signUp: signUpReducer,
  forgotPassword: forgotPasswordReducer,
  deposit: depositReducer,
  withdraw: withdrawReducer,
  notification: notificationReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
