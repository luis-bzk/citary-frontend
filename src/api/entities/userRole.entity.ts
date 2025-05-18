import { RoleApi, UserApi } from '@/api/entities';

export interface UserRoleDetailApi {
  id: number;
  created_date: Date;
  record_status: string;
  user: UserApi;
  role: RoleApi;
}

export type UserRoleApi = Omit<UserRoleDetailApi, 'user' | 'role'> & {
  id_user: number;
  id_role: number;
};

export type UserRoleCreateApi = Pick<UserRoleApi, 'id_user' | 'id_role'>;
