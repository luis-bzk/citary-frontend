import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

import { parseApiError } from '@/errors';
import { CountryCreateApi } from '@/api/entities';
import {
  getAllCountriesApi,
  createCountryApi,
  editCountryApi,
  getCountryApi,
  deleteCountryApi,
} from '@/api/country.api';

export function useGetAllCountries(limit = 10, offset = 0, filter = '') {
  return useQuery({
    queryKey: ['countries'],
    queryFn: () => getAllCountriesApi(limit, offset, filter),
    retry: 1,
    retryDelay: 1000,
    refetchOnWindowFocus: false,
  });
}

export function useDeleteCountry() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => deleteCountryApi(id),
    onSuccess: () => {
      toast.success('País eliminado correctamente');
      queryClient.invalidateQueries({ queryKey: ['countries'] });
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

export function useGetCountry(id: number) {
  return useQuery({
    queryKey: ['country', id],
    queryFn: () => getCountryApi(id),
    staleTime: 0,
    retry: 1,
    retryDelay: 1000,
    refetchOnWindowFocus: false,
  });
}

export function useCreateCountry() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CountryCreateApi) => createCountryApi(data),
    onSuccess: () => {
      toast.success('País creado correctamente');
      queryClient.invalidateQueries({ queryKey: ['countries'] });
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

export function useEditCountry() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: CountryCreateApi }) => editCountryApi(id, data),
    onSuccess: () => {
      toast.success('País actualizado correctamente');
      queryClient.invalidateQueries({ queryKey: ['countries'] });
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
