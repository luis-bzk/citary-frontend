import { api } from '@/api/axios';
import { User, UserChangePassword, UserLogin, UserPassword, UserToken } from '@/schemas';
import { UserRegisterApi } from '@/api/entities';

export async function loginUserApi(data: UserLogin) {
  const res = await api.post<User>('/auth/login', data);
  return res.data;
}

export async function registerUserApi(data: UserRegisterApi) {
  const res = await api.post<User>('/auth/signup', data);
  return res.data;
}

export async function recoverPasswordApi(data: UserPassword) {
  const res = await api.patch<{ message: string }>('/auth/request/recover-password', data);
  return res.data;
}

export async function confirmUserApi(data: UserToken) {
  const res = await api.patch<User>('/auth/confirm/user', data);
  return res.data;
}

export async function checkTokenApi(token: string) {
  const res = await api.get<User>(`/auth/check/token/${token}`);
  return res.data;
}

export async function changePasswordApi(data: UserChangePassword) {
  const res = await api.patch<User>('/auth/request/change-password', data);
  return res.data;
}
