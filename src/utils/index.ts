import { Request } from 'express';
import { Session } from 'inspector';
import { JwtPayload } from 'jsonwebtoken';

export interface successMsg<T> {
  success: boolean;
  message: string;
  data?: T;
  status?: number;
}

export interface errorMsg {
  success: boolean;
  message: string;
  status?: number;
  Error?: Error;
}

interface IUser {
  username: string;
  success: boolean;
  password: string;
}

export interface CustomRequest extends Request {
  token: any | string | JwtPayload;
}
