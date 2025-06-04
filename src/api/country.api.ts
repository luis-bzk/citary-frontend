import { api } from '@/api/axios';
import { CountryMapper } from '@/mappers';
import { CountryApi, CountryCreateApi } from '@/api/entities';

export async function getAllCountriesApi(limit: number, offset: number, filter: string) {
  const res = await api.get<CountryApi[]>(`/country/get-all?limit=${limit}&offset=${offset}&filter=${filter}`);
  return CountryMapper.mapApiToDomainList(res.data);
}

export async function deleteCountryApi(id: number) {
  const res = await api.delete<CountryApi>(`/country/delete/${id}`);
  return CountryMapper.mapApiToDomain(res.data);
}

export async function getCountryApi(id: number) {
  const res = await api.get<CountryApi>(`/country/get/${id}`);
  return CountryMapper.mapApiToDomain(res.data);
}

export async function createCountryApi(data: CountryCreateApi) {
  const res = await api.post<CountryApi>(`/country/create`, data);
  return CountryMapper.mapApiToDomain(res.data);
}

export async function editCountryApi(id: number, data: CountryCreateApi) {
  const res = await api.put<CountryApi>(`/country/update/${id}`, data);
  return CountryMapper.mapApiToDomain(res.data);
}
