import { Role } from "./role";

export interface IUser {
  id: number;
  username: string;
  password: string;
  role: Role;
}
