import React from 'react';
import Header from '../shared/Header';
import Footer from '../shared/Footer';
import { Outlet } from 'react-router-dom';
import Routing from '../routes/Routing';

const Layout = () => {
  return (
    <div>
      <Header />
      <Routing />
      <Footer />
    </div>
  );
};

export default Layout;
