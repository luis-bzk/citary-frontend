import { api } from '@/api/axios';
import { User } from '@/schemas';

export async function getAllUsersApi(limit: number, offset: number, filter: string) {
  const res = await api.get<{ users: User[]; totalUsers: number }>(
    `/user/get-all?limit=${limit}&offset=${offset}&filter=${filter}`
  );
  return res.data;
}

export async function deleteUserApi(id: number) {
  const res = await api.delete<{ users: User[]; totalUsers: number }>(`/user/delete/${id}`);
  return res.data;
}
