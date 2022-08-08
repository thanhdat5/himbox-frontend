import { combineReducers } from "redux";
import depositReducer from "./depositReducer";
import forgotPasswordReducer from "./forgotPasswordReducer";
import loginReducer from "./loginReducer";
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
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
