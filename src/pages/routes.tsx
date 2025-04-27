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
import { DashboardPage } from '@/pages/admin';

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
          <Route index element={<DashboardPage />} />
          <Route path='*' element={<Navigate to='/admin' replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
