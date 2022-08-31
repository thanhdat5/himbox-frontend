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
import 'antd/dist/antd.dark.css';
import NewPassword from "./modules/auth/new-password";
import VerifyAccount from "./modules/auth/verify";
import Transactions from "./modules/transactions";
import HimPool from "./modules/him-pool";
import Homepage from "./modules/homepage";
import ScrollToTop from "./components/scroll-to-top";

const App = () => {
  return (
    <ScrollToTop>
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<Homepage />} />
        <Route path="/auth" element={<AuthRoute />}>
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
          <Route path={ROUTES.VERIFY} element={<VerifyAccount />} />
          <Route path={ROUTES.FORGET_PASSWORD} element={<ForgotPassword />} />
          <Route path={ROUTES.NEW_PASSWORD} element={<NewPassword />} />
        </Route>
        <Route path="/app" element={<PrivateRoute />}>
          <Route path={'/app'} element={<Dashboard />} />
          <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
          <Route path={ROUTES.NETWORK} element={<Network />} />
          <Route path={ROUTES.PACKAGE} element={<Package />} />
          <Route path={ROUTES.PROFILE} element={<Profile />} />
          <Route path={ROUTES.HIM_PRIVATE_SALE} element={<HimPool />} />
          <Route path={ROUTES.TRANSACTIONS} element={<Transactions />} />
        </Route>
      </Routes>
    </ScrollToTop>
  );
};

export default App;