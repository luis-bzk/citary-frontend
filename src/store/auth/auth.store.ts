import { create } from 'zustand';

// Define el tipo de User según tu esquema
interface User {
  token: string;
  name: string;
  email: string;
}

interface AuthState {
  user: null | User;
  accessToken: string | null;
  login: (user: User) => void;
  logout: () => void;
}

export const authStore = create<AuthState>((set) => ({
  user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!) : null,
  accessToken: localStorage.getItem('accessToken') || null,

  login: (user) => {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('accessToken', user.token);
    set({ user, accessToken: user.token });
  },

  logout: () => {
    localStorage.removeItem('user');
    localStorage.removeItem('accessToken');
    set({ user: null, accessToken: null });
  },
}));
