import { api } from '@/api/axios';
import { RoleApi, RoleCreateApi } from '@/api/entities';
import { RoleMapper } from '@/mappers';

export async function getAllRolesApi(limit: number, offset: number, filter: string) {
  const res = await api.get<RoleApi[]>(`/role/get-all?limit=${limit}&offset=${offset}&filter=${filter}`);
  return RoleMapper.mapApiToDomainList(res.data);
}

export async function deleteRoleApi(id: number) {
  const res = await api.delete<RoleApi>(`/role/delete/${id}`);
  return RoleMapper.mapApiToDomain(res.data);
}

export async function getRoleApi(id: number) {
  const res = await api.get<RoleApi>(`/role/get/${id}`);
  return RoleMapper.mapApiToDomain(res.data);
}

export async function createRoleApi(data: RoleCreateApi) {
  const res = await api.post<RoleApi>(`/role/create`, data);
  return RoleMapper.mapApiToDomain(res.data);
}

export async function editRoleApi(id: number, data: RoleCreateApi) {
  const res = await api.put<RoleApi>(`/role/update/${id}`, data);
  return RoleMapper.mapApiToDomain(res.data);
}
