import { authStore } from '@/store/auth';
import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3001/api/v1',
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = authStore.getState().accessToken;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
