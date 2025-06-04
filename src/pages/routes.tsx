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
import {
  PermissionsPage,
  AllRolesPage,
  AllUsersPage,
  CreateUserPage,
  EditUserPage,
  CreateRolePage,
  EditRolePage,
} from '@/pages/admin/administration';
import { AllCountriesPage } from './admin/location';

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
          <Route path='administration'>
            <Route path='users'>
              <Route index element={<AllUsersPage />} />
              <Route path='create' element={<CreateUserPage />} />
              <Route path='edit/:id' element={<EditUserPage />} />
            </Route>

            <Route path='roles'>
              <Route index element={<AllRolesPage />} />
              <Route path='create' element={<CreateRolePage />} />
              <Route path='edit/:id' element={<EditRolePage />} />
            </Route>

            <Route path='permissions' element={<PermissionsPage />} />
          </Route>
          <Route path='location'>
            <Route path='countries'>
              <Route index element={<AllCountriesPage />} />
            </Route>
          </Route>

          <Route path='*' element={<Navigate to='/admin' replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
