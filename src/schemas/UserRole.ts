import { Role } from './Role';
import { User } from './User';

export interface UserRoleDetail {
  id: number;
  recordStatus: string;
  createdDate: Date;
  user: User;
  role: Role;
}

export type UserRole = Omit<UserRoleDetail, 'user' | 'role'> & {
  idUser: number;
  idRole: number;
};
