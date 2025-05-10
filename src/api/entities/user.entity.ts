export interface UserApi {
  id: number;
  name: string;
  last_name: string;
  email: string;
  password: string;
  token: string;
  created_date: Date;
  record_status: string;
  google_id: string;
}

export type UserCreateApi = Pick<UserApi, 'name' | 'last_name' | 'email'>;

export type UserRegisterApi = Pick<UserApi, 'name' | 'last_name' | 'email' | 'password'>;
