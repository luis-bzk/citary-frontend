export interface User {
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

export type UserLogin = Pick<User, 'email' | 'password'>;

export type UserRegister = Pick<User, 'name' | 'last_name' | 'email' | 'password'>;

export type UserPassword = Pick<User, 'email'>;

export type UserToken = Pick<User, 'token'>;

export type UserChangePassword = Pick<User, 'token' | 'password'>;
