import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

import { AuthGuard } from '~components/auth/auth-guard/auth-guard';
import { GuestGuard } from '~components/auth/guest-guard/guest-guard';
import { Loadable } from '~components/loadable';
import { useAuthToken } from '~store/session';

const HomePage = Loadable(lazy(() => import('~pages/home')));
const LoginPage = Loadable(lazy(() => import('~pages/login')));

export function Router() {
  const isAuth = !!useAuthToken();

  return useRoutes([
    {
      children: [
        {
          path: '/',
          element: (
            <AuthGuard isAuth={isAuth}>
              <LoginPage />
            </AuthGuard>
          ),
        },
        {
          path: 'home',
          element: (
            <GuestGuard isAuth={isAuth}>
              <HomePage />
            </GuestGuard>
          ),
        },
      ],
    },
  ]);
}
