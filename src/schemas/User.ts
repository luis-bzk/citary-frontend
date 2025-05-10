export interface User {
  id: number;
  name: string;
  lastname: string;
  email: string;
  password: string;
  token: string;
  createdDate: Date;
  recordStatus: string;
  googleId: string;
}

export type UserLogin = Pick<User, 'email' | 'password'>;

export type UserRegister = Pick<User, 'name' | 'lastname' | 'email' | 'password'>;

export type UserPassword = Pick<User, 'email'>;

export type UserToken = Pick<User, 'token'>;

export type UserChangePassword = Pick<User, 'token' | 'password'>;
