import { RecordStatus } from '@/enums';

export interface Province {
  id: number;
  name: string;
  code: string;
  prefix: string;
  createdDate: Date;
  recordStatus: RecordStatus;
  idCountry: number;
}
