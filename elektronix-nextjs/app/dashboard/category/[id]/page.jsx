'use client'
import { usePathname, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import AdminLayout from "@/components/layout/AdminLayout";
import CategoryEdit from "@/components/Category/CategoryEdit";

export default function CategoryPage({
params: categoryId
}) {
  return (
    <AdminLayout>
        <CategoryEdit categoryId={categoryId.id} />
    </AdminLayout>
  );
}
