import {Express, Response, NextFunction, Request} from 'express';

interface successMsg<T> extends Response {
  success: boolean;
  message: string;
  data?: T;
  status?: number;
}

interface errorMsg<T> extends Response {
  success: boolean;
  message: string;
  status?: number;
  Error?: Error
}

interface IUser {
  username: string;
  success: boolean;
  password: string;
}


