import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { AdminLayout, AuthLayout } from '@/layouts';
import {
  ChangePasswordPage,
  GoogleCallbackPage,
  LoginPage,
  RecoverPasswordPage,
  RegisterPage,
  VerifyAccountPage,
} from '@/pages/auth';
import { HomeDashboardPage } from '@/pages/admin';
import { PermissionsPage, RolesPage, UsersPage } from '@/pages/admin/administration';

export function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<div>Home</div>} />

        <Route path='auth' element={<AuthLayout />}>
          <Route index element={<LoginPage />} />
          <Route path='google-callback' element={<GoogleCallbackPage />} />
          <Route path='register' element={<RegisterPage />} />
          <Route path='recover-password' element={<RecoverPasswordPage />} />
          <Route path='verify-account/:token' element={<VerifyAccountPage />} />
          <Route path='change-password/:token' element={<ChangePasswordPage />} />

          <Route path='*' element={<Navigate to='/auth' replace />} />
        </Route>

        <Route path='admin' element={<AdminLayout />}>
          <Route index element={<HomeDashboardPage />} />
          <Route path='admin'>
            <Route path='users' element={<UsersPage />} />
            <Route path='roles' element={<RolesPage />} />
            <Route path='permissions' element={<PermissionsPage />} />
          </Route>

          <Route path='*' element={<Navigate to='/admin' replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
