// components/Layout.js
import React from 'react';
import AdminSidebar from './AdminSidebar';


function AdminLayout({ children }) {
  return (
    <div className='flex'>
      <AdminSidebar />
      <main className='bg-background w-full'>{children}</main>

    </div>
  );
}

export default AdminLayout;
