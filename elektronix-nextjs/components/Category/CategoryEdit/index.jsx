import React, { useState, useEffect } from "react";
import CategoryService from "@/services/category.service";
import { useRouter } from "next/navigation";

export default function CategoryEdit({ categoryId }) {
  const [category, setCategory] = useState(null);
  const [name, setName] = useState("");
  const router = useRouter();

  useEffect(() => {
    CategoryService.getCategoryById(categoryId)
      .then((fetchedCategory) => {
        setCategory(fetchedCategory);
        setName(fetchedCategory.name || "");
      })
      .catch((error) => {
        console.error("Error fetching category details:", error);
      });
  }, [categoryId]);
  
   // Define the handleUpdateCategory function
   const handleUpdateCategory = async (e) => {
    e.preventDefault();

    try {
      const updatedCategory = {
        ...category, 
        name, 
      };
      const updatedCategoryResult = await CategoryService.updateCategory(
        updatedCategory
      );

      console.log("Category updated successfully:", updatedCategoryResult);
      router.push("/dashboard/category");
    } catch (error) {
      console.error("Error updating category:", error);
    }
  };


  if (!category) {
    return <div>Loading...</div>;
  }

  return (
    <section className="bg-white w-screen">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900">Edit Category</h2>
        <form onSubmit={handleUpdateCategory}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label
                htmlFor="categoryName"
                className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
              >
                <input
                  type="text"
                  id="categoryName"
                  placeholder="Category Name"
                  className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm text-black"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />

                <span className="absolute left-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                  Category Name
                </span>
              </label>
            </div>
          </div>
          <button
            className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-secondary rounded-lg focus:ring-4 focus:ring-primary-200 hover:bg-primary"
            type="submit"
          >
            Edit
          </button>
        </form>
      </div>
    </section>
  );
}
