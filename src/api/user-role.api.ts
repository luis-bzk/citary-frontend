import { api } from '@/api/axios';
import { UserRole } from '@/schemas';

export async function getAllUserRolesApi(limit: number, offset: number) {
  const res = await api.get<UserRole[]>(`/user-role/get-all?limit=${limit}&offset=${offset}`);
  return res.data;
}
