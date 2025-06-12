import { api } from '@/api/axios';
import { ProvinceMapper } from '@/mappers';
import { ProvinceApi, ProvinceCreateApi } from '@/api/entities';
import { Province } from '@/schemas';

export async function getAllProvincesApi(
  limit?: number,
  offset?: number,
  filter?: string,
  id_country?: number
): Promise<Province[]> {
  const params = new URLSearchParams();

  if (limit) params.append('limit', limit.toString());
  if (offset) params.append('offset', offset.toString());
  if (filter) params.append('filter', filter);
  if (id_country) params.append('id_country', id_country.toString());

  const res = await api.get<ProvinceApi[]>(`/province/get-all?${params.toString()}`);
  return ProvinceMapper.mapApiToDomainList(res.data);
}

export async function deleteProvinceApi(id: number): Promise<Province> {
  const res = await api.delete<ProvinceApi>(`/province/delete/${id}`);
  return ProvinceMapper.mapApiToDomain(res.data);
}

export async function getProvinceApi(id: number): Promise<Province> {
  const res = await api.get<ProvinceApi>(`/province/get/${id}`);
  return ProvinceMapper.mapApiToDomain(res.data);
}

export async function createProvinceApi(data: ProvinceCreateApi): Promise<Province> {
  const res = await api.post<ProvinceApi>(`/province/create`, data);
  return ProvinceMapper.mapApiToDomain(res.data);
}

export async function editProvinceApi(id: number, data: ProvinceCreateApi): Promise<Province> {
  console.log({ id, data });
  const res = await api.put<ProvinceApi>(`/province/update/${id}`, data);
  return ProvinceMapper.mapApiToDomain(res.data);
}
