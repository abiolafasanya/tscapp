import React from 'react';

export interface Iprops extends React.PropsWithChildren {
  action?: any;
  className?: any;
  type?: any;
}

export interface Menu {
  name: string;
  icon?: any;
  link: string;
}

export interface SideMenu {
  menu: Menu[];
}
