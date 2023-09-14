// components/Layout.js
import React from 'react';
import AdminSidebar from './AdminSidebar/AdminSidebar';


function AdminLayout({ children }) {
  return (
    <div>
      <AdminSidebar />
      <main>{children}</main>

    </div>
  );
}

export default AdminLayout;
