import { RoleApi, RoleCreateApi } from '@/api/entities';
import { Role } from '@/schemas';
import { RoleFormValues } from '@/validators/role';

export class RoleMapper {
  static mapFormToApi(data: RoleFormValues): RoleCreateApi {
    return {
      name: data.name,
      description: data.description,
    };
  }

  static mapApiToDomain(data: RoleApi): Role {
    return {
      id: data.id,
      name: data.name,
      description: data.description,
      createdDate: data.created_date,
      recordStatus: data.record_status,
    };
  }

  static mapApiToDomainList(data: RoleApi[]): Role[] {
    return data.map((role) => this.mapApiToDomain(role));
  }
}
