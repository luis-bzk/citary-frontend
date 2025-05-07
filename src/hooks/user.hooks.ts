import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { deleteUserApi, getAllUsersApi } from '@/api';
import { toast } from 'sonner';
import { parseApiError } from '@/errors';

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
