import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header';
import './styles.css';

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <main className="layout-main">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
