import { toast } from 'sonner';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { parseApiError } from '@/errors';
import { UserRoleCreateApi } from '@/api/entities';
import { createUserRoleApi, deleteUserRoleApi, editUserRoleApi, getAllUserRolesApi, getUserRoleApi } from '@/api';

export function useGetAllUserRoles(limit = 10, offset = 0) {
  return useQuery({
    queryKey: ['user-roles'],
    queryFn: () => getAllUserRolesApi(limit, offset),
    retry: 1,
    retryDelay: 1000,
    refetchOnWindowFocus: false,
  });
}

export function useDeleteUserRole() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => deleteUserRoleApi(id),
    onSuccess: () => {
      toast.success('Permiso eliminado correctamente');
      queryClient.invalidateQueries({ queryKey: ['user-roles'] });
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

export function useGetUserRole(id: number) {
  return useQuery({
    queryKey: ['user', id],
    queryFn: () => getUserRoleApi(id),
    staleTime: 0,
    retry: 1,
    retryDelay: 1000,
    refetchOnWindowFocus: false,
  });
}

export function useCreateUserRole() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: UserRoleCreateApi) => createUserRoleApi(data),
    onSuccess: () => {
      toast.success('Permiso creado correctamente');
      queryClient.invalidateQueries({ queryKey: ['user-roles'] });
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

export function useEditUserRole() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: UserRoleCreateApi }) => editUserRoleApi(id, data),
    onSuccess: () => {
      toast.success('Permiso actualizado correctamente');
      queryClient.invalidateQueries({ queryKey: ['user-roles'] });
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
