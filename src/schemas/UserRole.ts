import { Role } from './Role';
import { User } from './User';

export interface UserRole {
  id: number;
  status: string;
  created_date: Date;
  user: User;
  role: Role;
}
