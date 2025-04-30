import { useQuery } from '@tanstack/react-query';

import { getAllUsersApi } from '@/api';

export function useGetAllUsers(limit = 10, offset = 0, filter = '') {
  return useQuery({
    queryKey: ['users'],
    queryFn: () => getAllUsersApi(limit, offset, filter),
    retry: 1,
    retryDelay: 1000,
    refetchOnWindowFocus: false,
  });
}
