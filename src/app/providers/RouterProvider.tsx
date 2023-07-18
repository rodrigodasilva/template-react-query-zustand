/* eslint-disable no-restricted-imports */
import { lazy } from 'react';
import {  useRoutes } from 'react-router-dom';
import { LoginPage } from '~pages/Login';
import { AuthGuard } from '~shared/components/auth/auth-guard/AuthGuard';
import { GuestGuard } from '~shared/components/auth/guest-guard/GuestGuard';
import { Loadable } from '~shared/components/loadable';
import { useAuthToken } from '~shared/store/session';

// import { PATH_PAGE } from '~shared/lib/react-router';



const HomePage = Loadable(lazy(() => import('~pages/Home')));



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
