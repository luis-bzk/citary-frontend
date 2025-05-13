export interface RoleApi {
  id: number;
  name: string;
  description: string;
  created_date: Date;
  record_status: string;
}

export type RoleCreateApi = Pick<RoleApi, 'name' | 'description'>;
