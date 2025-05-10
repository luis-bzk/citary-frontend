import { api } from '@/api/axios';
import { UserMapper } from '@/mappers';
import { UserApi, UserCreateApi } from '@/api/entities';

export async function getAllUsersApi(limit: number, offset: number, filter: string) {
  const res = await api.get<{ users: UserApi[]; totalUsers: number }>(
    `/user/get-all?limit=${limit}&offset=${offset}&filter=${filter}`
  );
  return { ...res.data, users: UserMapper.mapApiToDomainList(res.data.users) };
}

export async function deleteUserApi(id: number) {
  const res = await api.delete<UserApi>(`/user/delete/${id}`);
  return UserMapper.mapApiToDomain(res.data);
}

export async function getUserApi(id: number) {
  const res = await api.get<UserApi>(`/user/get/${id}`);
  return UserMapper.mapApiToDomain(res.data);
}

export async function createUserApi(data: UserCreateApi) {
  const res = await api.post<UserApi>(`/user/create`, data);
  return UserMapper.mapApiToDomain(res.data);
}

export async function editUserApi(id: number, data: UserCreateApi) {
  const res = await api.put<UserApi>(`/user/update/${id}`, data);
  return UserMapper.mapApiToDomain(res.data);
}
