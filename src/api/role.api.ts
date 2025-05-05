import { api } from '@/api/axios';
import { Role } from '@/schemas';

export async function getAllRolesApi(limit: number, offset: number, filter: string) {
  const res = await api.get<Role[]>(`/role/get-all?limit=${limit}&offset=${offset}&filter=${filter}`);
  return res.data;
}
