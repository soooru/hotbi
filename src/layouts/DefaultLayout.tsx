import React, { ReactNode } from 'react';
import Header from '../components/Header';
import Drawer from '../components/Drawer';
import { DrawerContext } from '../contexts/DrawerContext';
import { Outlet } from 'react-router-dom';

interface Props {
  children?: ReactNode;
}
const DetaultLayout = ({ children }: Props) => {
  return (
    <DrawerContext>
      <Header />
      <Drawer />
      {children}
      <Outlet />
    </DrawerContext>
  );
};

export default DetaultLayout;
