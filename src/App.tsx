import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./constants";
import ForgotPassword from "./modules/auth/forgot-password";
import Login from "./modules/auth/login";
import SignUp from "./modules/auth/sign-up";
import Dashboard from "./modules/dashboard";
import Network from "./modules/network";
import NotFound from "./modules/not-found";
import Package from "./modules/package";
import Profile from "./modules/profile";
import { AuthRoute } from "./routes/auth-route";
import { PrivateRoute } from "./routes/private-route";

import './App.css';
import VerifyAccount from "./modules/auth/verify";

const App = () => {
  // const dispatch = useDispatch();
  // const pending = useSelector(getPendingSelector);
  // const todos = useSelector(getTodosSelector);
  // const error = useSelector(getErrorSelector);

  // useEffect(() => {
  //   dispatch(fetchTodoRequest());
  // }, []);

  return (
    <Routes>
      <Route path='*' element={<NotFound />} />
      <Route path="/auth" element={<AuthRoute />}>
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
        <Route path={ROUTES.VERIFY} element={<VerifyAccount />} />
        <Route path={ROUTES.FORGET_PASSWORD} element={<ForgotPassword />} />
      </Route>
      <Route path="/" element={<PrivateRoute />}>
        <Route path={'/'} element={<Dashboard />} />
        <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
        <Route path={ROUTES.NETWORK} element={<Network />} />
        <Route path={ROUTES.PACKAGE} element={<Package />} />
        <Route path={ROUTES.PROFILE} element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default App;