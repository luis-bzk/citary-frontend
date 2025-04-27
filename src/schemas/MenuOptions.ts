import { JSX } from 'react';

export interface IMenuOptions {
  title: string;
  options: IMenuItem[];
}

export interface IMenuItem {
  name: string;
  link: string;
  icon: JSX.Element;
}
