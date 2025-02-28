import React from 'react';
import ComplexNavbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';
import DrawerAppBar from '../Components/Navbar';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
