import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

import { parseApiError } from '@/errors';
import { ProvinceCreateApi } from '@/api/entities';

import { createProvinceApi, deleteProvinceApi, editProvinceApi, getAllProvincesApi, getProvinceApi } from '@/api';

export function useGetAllProvinces(limit = 50, offset = 0, filter = '') {
  return useQuery({
    queryKey: ['provinces'],
    queryFn: () => getAllProvincesApi(limit, offset, filter),
    retry: 1,
    retryDelay: 1000,
    refetchOnWindowFocus: false,
  });
}

export function useDeleteProvince() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => deleteProvinceApi(id),
    onSuccess: () => {
      toast.success('Provincia eliminada correctamente');
      queryClient.invalidateQueries({ queryKey: ['provinces'] });
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

export function useGetProvince(id: number) {
  return useQuery({
    queryKey: ['province', id],
    queryFn: () => getProvinceApi(id),
    staleTime: 0,
    retry: 1,
    retryDelay: 1000,
    refetchOnWindowFocus: false,
  });
}

export function useCreateProvince() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: ProvinceCreateApi) => createProvinceApi(data),
    onSuccess: () => {
      toast.success('Provincia creada correctamente');
      queryClient.invalidateQueries({ queryKey: ['provinces'] });
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

export function useEditProvince() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: ProvinceCreateApi }) => editProvinceApi(id, data),
    onSuccess: () => {
      toast.success('Provincia actualizada correctamente');
      queryClient.invalidateQueries({ queryKey: ['provinces'] });
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
