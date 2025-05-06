import { useQuery } from '@tanstack/react-query';

import { getAllUserRolesApi } from '@/api';

export function useGetAllUserRoles(limit = 10, offset = 0) {
  return useQuery({
    queryKey: ['user-roles'],
    queryFn: () => getAllUserRolesApi(limit, offset),
    retry: 1,
    retryDelay: 1000,
    refetchOnWindowFocus: false,
  });
}
