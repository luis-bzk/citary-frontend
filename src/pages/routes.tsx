import { AuthLayout } from '@/layouts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GoogleCallbackPage, LoginPage, RecoverPasswordPage, RegisterPage } from '@/pages/auth';

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
