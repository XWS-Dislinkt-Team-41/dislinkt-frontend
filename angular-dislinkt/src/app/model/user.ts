import { Role } from "./role";

export interface IUser {
  id: number;
  username: string;
  password: string;
  role: Role;
}

export const emptyUser ={
  id: 0,
  username: '',
  password: '',
  role: Role.User
}