import { Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import HBLoader from '../components/loader';
import { HIMBOX_ACCESS_TOKEN, ROUTES } from '../constants';
import PrivateLayout from '../layout/private-layout';

export const PrivateRoute = () => {
  if (localStorage.getItem(HIMBOX_ACCESS_TOKEN)) {
    return <PrivateLayout>
      <Suspense fallback={<HBLoader />}>
        <Outlet />
      </Suspense>
    </PrivateLayout>;
  }
  return <Navigate to={ROUTES.LOGIN} replace />;
};