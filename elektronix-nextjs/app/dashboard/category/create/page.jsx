'use client'
import React from 'react';
import AdminLayout from '@/components/layout/AdminLayout';
import CategoryCreate from '@/components/Category/CategoryCreate';

export default function Create(){

  return (
    <>
    <AdminLayout>
      <CategoryCreate />
    </AdminLayout>
    </>
  );
};
