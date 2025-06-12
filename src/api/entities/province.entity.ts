import { RecordStatus } from '@/enums';

export interface ProvinceApi {
  id: number;
  name: string;
  code: string;
  prefix: string;
  created_date: Date;
  record_status: RecordStatus;
  id_country: number;
}

export type ProvinceCreateApi = Pick<ProvinceApi, 'name' | 'code' | 'prefix' | 'id_country'>;
