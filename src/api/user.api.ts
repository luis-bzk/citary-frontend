import { api } from '@/api/axios';
import { User } from '@/schemas';

export async function getAllUsersApi(limit: number, offset: number, filter: string) {
  const res = await api.get<{ users: User[]; totalUsers: number }>(
    `/user/get-all?limit=${limit}&offset=${offset}&filter=${filter}`
  );
  return res.data;
}
