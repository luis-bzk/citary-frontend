import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { createUserApi, deleteUserApi, getAllUsersApi, getUserApi, editUserApi } from '@/api';
import { toast } from 'sonner';
import { parseApiError } from '@/errors';
import { UserCreateApi } from '@/api/entities';

export function useGetAllUsers(limit = 10, offset = 0, filter = '') {
  return useQuery({
    queryKey: ['users'],
    queryFn: () => getAllUsersApi(limit, offset, filter),
    retry: 1,
    retryDelay: 1000,
    refetchOnWindowFocus: false,
  });
}

export function useDeleteUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => deleteUserApi(id),
    onSuccess: () => {
      toast.success('Eliminado correctamente');
      queryClient.invalidateQueries({ queryKey: ['users'] });
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

export function useGetUser(id: number) {
  return useQuery({
    queryKey: ['user', id],
    queryFn: () => getUserApi(id),
    staleTime: 0,
    retry: 1,
    retryDelay: 1000,
    refetchOnWindowFocus: false,
  });
}

export function useCreateUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: UserCreateApi) => createUserApi(data),
    onSuccess: () => {
      toast.success('Creado correctamente');
      queryClient.invalidateQueries({ queryKey: ['users'] });
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

export function useEditUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: UserCreateApi }) => editUserApi(id, data),
    onSuccess: () => {
      toast.success('Actualizado correctamente');
      queryClient.invalidateQueries({ queryKey: ['users'] });
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
