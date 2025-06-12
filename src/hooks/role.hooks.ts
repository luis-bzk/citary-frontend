import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

import { createRoleApi, deleteRoleApi, editRoleApi, getAllRolesApi, getRoleApi } from '@/api';
import { parseApiError } from '@/errors';
import { RoleCreateApi } from '@/api/entities';

export function useGetAllRoles(limit = 50, offset = 0, filter = '') {
  return useQuery({
    queryKey: ['roles'],
    queryFn: () => getAllRolesApi(limit, offset, filter),
    retry: 1,
    retryDelay: 1000,
    refetchOnWindowFocus: false,
  });
}

export function useDeleteRole() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => deleteRoleApi(id),
    onSuccess: () => {
      toast.success('Rol eliminado correctamente');
      queryClient.invalidateQueries({ queryKey: ['roles'] });
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

export function useGetRole(id: number) {
  return useQuery({
    queryKey: ['role', id],
    queryFn: () => getRoleApi(id),
    staleTime: 0,
    retry: 1,
    retryDelay: 1000,
    refetchOnWindowFocus: false,
  });
}

export function useCreateRole() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: RoleCreateApi) => createRoleApi(data),
    onSuccess: () => {
      toast.success('Rol creado correctamente');
      queryClient.invalidateQueries({ queryKey: ['roles'] });
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

export function useEditRole() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: RoleCreateApi }) => editRoleApi(id, data),
    onSuccess: () => {
      toast.success('Rol actualizado correctamente');
      queryClient.invalidateQueries({ queryKey: ['roles'] });
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
