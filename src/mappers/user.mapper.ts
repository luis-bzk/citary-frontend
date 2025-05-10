import { UserApi, UserCreateApi } from '@/api/entities';
import { User } from '@/schemas';
import { UserFormValues } from '@/validators/user';

export class UserMapper {
  static mapFormToApi(data: UserFormValues): UserCreateApi {
    return {
      name: data.name,
      last_name: data.lastname,
      email: data.email,
    };
  }

  static mapApiToDomain(data: UserApi): User {
    return {
      id: data.id,
      name: data.name,
      lastname: data.last_name,
      email: data.email,
      password: data.password,
      token: data.token,
      createdDate: data.created_date,
      recordStatus: data.record_status,
      googleId: data.google_id,
    };
  }

  static mapApiToDomainList(data: UserApi[]): User[] {
    return data.map((user) => this.mapApiToDomain(user));
  }
}
