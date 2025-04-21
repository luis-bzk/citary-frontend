import { authStore } from '@/store/auth';
import { Navigate } from 'react-router-dom';

export function ProtectedRoute({ children }: { children: Element }) {
  const user = authStore((state) => state.user);
  return user ? children : <Navigate to='/login' />;
}
