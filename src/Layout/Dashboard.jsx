import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Dashboard/Sidebar';

const Dashboard = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gradient-to-r from-blue-500 to-teal-500">
      {/* Sidebar */}
      <div className="w-72">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-grow lg:mt-8 lg:w-2/3 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
