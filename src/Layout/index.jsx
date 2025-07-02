import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import Footer from "../Components/Footer";
import Main from "../Components/Main";

const Layout = () => {
  return (
    <>
      {/* Optional full layout with header/sidebar/footer */}
      <Header />
      <div style={{ display: 'flex', height: '80vh' }}>
        <Sidebar />
         <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
