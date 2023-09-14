// components/Layout.js
import React from 'react';
import Navbar from '../layout/Navbar/Navbar';


function Layout({ children }) {
  return (
    <div className='bg-background text-black h-screen'>
      <Navbar />
      <main>{children}</main>

    </div>
  );
}

export default Layout;
