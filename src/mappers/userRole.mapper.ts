import { UserRoleApi, UserRoleDetailApi } from '@/api/entities';
import { UserRole, UserRoleDetail } from '@/schemas';
import { UserMapper, RoleMapper } from '@/mappers';

export class UserRoleMapper {
  static mapApiToDomain(data: UserRoleApi): UserRole {
    return {
      id: data.id,
      createdDate: data.created_date,
      recordStatus: data.record_status,
      idUser: data.id_user,
      idRole: data.id_role,
    };
  }

  static mapApiToDomainDetailed(data: UserRoleDetailApi): UserRoleDetail {
    return {
      id: data.id,
      createdDate: data.created_date,
      recordStatus: data.record_status,
      user: UserMapper.mapApiToDomain(data.user),
      role: RoleMapper.mapApiToDomain(data.role),
    };
  }

  static mapApiToDomainListDetailed(data: UserRoleDetailApi[]): UserRoleDetail[] {
    return data.map((userRole) => this.mapApiToDomainDetailed(userRole));
  }
}
