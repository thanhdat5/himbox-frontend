import { combineReducers } from "redux";
import forgotPasswordReducer from "./forgotPasswordReducer";
import loginReducer from "./loginReducer";
import signUpReducer from "./signUpReducer";
import withdrawReducer from "./withdrawReducer";
import userReducer from "./userReducer";
import packageReducer from "./packageReducer";
import dashboardReducer from "./dashboardReducer";
import applicationReducer from "./applicationReducer";
import himPoolReducer from "./himPoolReducer";

const rootReducer = combineReducers({
  application: applicationReducer,
  login: loginReducer,
  signUp: signUpReducer,
  forgotPassword: forgotPasswordReducer,
  // deposit: depositReducer,
  withdraw: withdrawReducer,
  user: userReducer,
  package: packageReducer,
  dashboard: dashboardReducer,
  himPool: himPoolReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
