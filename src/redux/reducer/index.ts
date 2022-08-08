import { combineReducers } from "redux";
import depositReducer from "./depositReducer";
import forgotPasswordReducer from "./forgotPasswordReducer";
import loginReducer from "./loginReducer";
import notificationReducer from "./notificationReducer";
import signUpReducer from "./signUpReducer";
import todoReducer from "./todoReducer";
import withdrawReducer from "./withdrawReducer";
import userReducer from "./userReducer";
import packageReducer from "./packageReducer";
import dashboardReducer from "./dashboardReducer";

const rootReducer = combineReducers({
  todo: todoReducer,
  login: loginReducer,
  signUp: signUpReducer,
  forgotPassword: forgotPasswordReducer,
  deposit: depositReducer,
  withdraw: withdrawReducer,
  notification: notificationReducer,
  user: userReducer,
  package: packageReducer,
  dashboard: dashboardReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
