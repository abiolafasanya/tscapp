import React from 'react';
import { JwtPayload } from 'jsonwebtoken';

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
