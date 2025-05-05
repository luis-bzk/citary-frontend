import { useQuery } from '@tanstack/react-query';

import { getAllRolesApi } from '@/api';

export function useGetAllRoles(limit = 100, offset = 0, filter = '') {
  return useQuery({
    queryKey: ['roles'],
    queryFn: () => getAllRolesApi(limit, offset, filter),
    retry: 1,
    retryDelay: 1000,
    refetchOnWindowFocus: false,
  });
}
