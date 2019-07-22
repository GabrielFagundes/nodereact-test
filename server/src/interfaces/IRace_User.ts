import { IUser } from './IUser';
import { IRace } from './IRace';

export interface IRace_User {
  _id: string;
  race: IRace,
  user: IUser;
}

export interface IRace_UserDTO {
  race: IRace,
  user: IUser;
}
