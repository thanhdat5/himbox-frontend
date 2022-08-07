import { Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import HBLoader from '../components/loader';
import { HIMBOX_ACCESS_TOKEN, ROUTES } from '../constants';
import AuthLayout from '../layout/auth-layout';

export const AuthRoute = () => {
  if (!localStorage.getItem(HIMBOX_ACCESS_TOKEN)) {
    return <AuthLayout>
      <Suspense fallback={<HBLoader />}>
        <Outlet />
      </Suspense>
    </AuthLayout>;
  }
  return <Navigate to={ROUTES.DASHBOARD} replace />;
};