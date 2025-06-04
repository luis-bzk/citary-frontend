import { RecordStatus } from '@/enums';

export interface CountryApi {
  id: number;
  name: string;
  code: string;
  prefix: string;
  created_date: Date;
  record_status: RecordStatus;
}

export type CountryCreateApi = Pick<CountryApi, 'name' | 'code' | 'prefix'>;
