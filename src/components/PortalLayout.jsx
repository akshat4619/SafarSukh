import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';
import TopBar from './TopBar';

const PortalLayout = () => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      <SideBar />
      <div className="flex-1 ml-64">
        <TopBar />
        <main className="pt-20 px-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default PortalLayout;
