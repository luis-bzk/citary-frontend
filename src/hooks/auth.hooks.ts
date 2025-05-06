import { useMutation, useQuery } from '@tanstack/react-query';
import { toast } from 'sonner';

import { authStore } from '@/store/auth';
import { parseApiError } from '@/errors';
import { UserChangePassword, UserLogin, UserPassword, UserRegister } from '@/schemas';
import {
  changePasswordApi,
  checkTokenApi,
  confirmUserApi,
  loginUserApi,
  recoverPasswordApi,
  registerUserApi,
} from '@/api';

export function useLoginUser() {
  return useMutation({
    mutationFn: (data: UserLogin) => loginUserApi(data),
    onSuccess: (data) => {
      authStore.getState().login(data);
      toast.success('Iniciando sesión');
    },
    onError: (error) => {
      const apiError = parseApiError(error);
      if (!apiError) {
        return toast.error('Ha ocurrido un error');
      }
      toast.error(apiError.message);
    },
  });
}

export function useRegisterUser() {
  return useMutation({
    mutationFn: (data: UserRegister) => registerUserApi(data),
    onSuccess: () => {
      toast.success('Revisa tu correo y verifica tu cuenta');
    },
    onError: (error) => {
      const apiError = parseApiError(error);
      if (!apiError) {
        return toast.error('Ha ocurrido un error');
      }
      toast.error(apiError.message);
    },
  });
}

export function useRecoverPassword() {
  return useMutation({
    mutationFn: (data: UserPassword) => recoverPasswordApi(data),
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (error) => {
      const apiError = parseApiError(error);
      if (!apiError) {
        return toast.error('Ha ocurrido un error');
      }
      toast.error(apiError.message);
    },
  });
}

export function useConfirmUser(token: string) {
  return useQuery({
    queryKey: ['confirm-user', token],
    queryFn: () => confirmUserApi({ token }),
    enabled: !!token,
    retry: 1,
    retryDelay: 1000,
    refetchOnWindowFocus: false,
  });
}

export function useCheckToken(token: string) {
  return useQuery({
    queryKey: ['check-token', token],
    queryFn: () => checkTokenApi(token),
    enabled: !!token,
    retry: 2,
    retryDelay: 1000,
    refetchOnWindowFocus: false,
  });
}

export function useChangePassword() {
  return useMutation({
    mutationFn: (data: UserChangePassword) => changePasswordApi(data),
    onSuccess: () => {
      toast.success('¡Listo! Tu contraseña se cambió exitosamente.');
    },
    onError: (error) => {
      const apiError = parseApiError(error);
      if (!apiError) {
        return toast.error('Ha ocurrido un error');
      }
      toast.error(apiError.message);
    },
  });
}
