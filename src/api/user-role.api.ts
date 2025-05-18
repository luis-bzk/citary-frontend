import { api } from '@/api/axios';
import { UserRoleMapper } from '@/mappers';
import { UserRoleApi, UserRoleCreateApi, UserRoleDetailApi } from '@/api/entities';

export async function getAllUserRolesApi(limit: number, offset: number) {
  const res = await api.get<{ userRoles: UserRoleDetailApi[]; totalRegisters: number }>(
    `/user-role/get-all?limit=${limit}&offset=${offset}`
  );
  return { ...res.data, userRoles: UserRoleMapper.mapApiToDomainListDetailed(res.data.userRoles) };
}

export async function deleteUserRoleApi(id: number) {
  const res = await api.delete<UserRoleApi>(`/user-role/delete/${id}`);
  return UserRoleMapper.mapApiToDomain(res.data);
}

export async function getUserRoleApi(id: number) {
  const res = await api.get<UserRoleApi>(`/user-role/get/${id}`);
  return UserRoleMapper.mapApiToDomain(res.data);
}

export async function createUserRoleApi(data: UserRoleCreateApi) {
  const res = await api.post<UserRoleApi>(`/user-role/create`, data);
  return UserRoleMapper.mapApiToDomain(res.data);
}

export async function editUserRoleApi(id: number, data: UserRoleCreateApi) {
  const res = await api.put<UserRoleApi>(`/user-role/update/${id}`, data);
  return UserRoleMapper.mapApiToDomain(res.data);
}
