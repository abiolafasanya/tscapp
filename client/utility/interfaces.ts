import React from 'react';
import { JwtPayload } from 'jsonwebtoken';

// import IUser from './user';

export interface IUser {
  id: string;
  userId?: string;
  username?: string;
  email?: string;
}
export interface IBlog {
  _id: string;
  title: string;
  author: string | IUser;
  content: string;
  headline: string;
  picture?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Iprops extends React.PropsWithChildren {
  action?: any;
  className?: any;
  type?: any;
  data?: any;
}

export interface Menu {
  name: string;
  icon?: any;
  link: string;
}

export interface SideMenu {
  menu: Menu[];
  footer: Menu[];
}

interface CourseInterface {
  menus: any[];
}
