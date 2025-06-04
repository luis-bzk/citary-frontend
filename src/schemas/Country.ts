import { RecordStatus } from '@/enums';

export interface Country {
  id: number;
  name: string;
  code: string;
  prefix: string;
  createdDate: Date;
  recordStatus: RecordStatus;
}
