"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CategoryService from "../../../services/category.service";


export default function Category() {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  
  const router = useRouter();
  
  const editCategory = (categoryId) => {
    router.push(`/dashboard/category/${categoryId}`);
  };
  
  const createCategory = () => {
    router.push('/dashboard/category/create');
  };
  
  useEffect(() => {
    CategoryService.getAllCategories()
      .then((data) => {
        setCategories(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
        setLoading(false);
      });
  }, []);

  return (

      <div>
        <section className="p-3 sm:p-5 w-max h-full">
          <div className="max-w-screen-xl px-4 lg:px-12">
            <div className="bg-white relative shadow-md border sm:rounded-lg overflow-hidden">
              <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                <h2 className="mb-2 text-xl leading-none text-black md:text-2xl ">
                  All Categories
                </h2>
                <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-start md:space-x-3 flex-shrink-0">
                  <div className="flex justify-center m-5">
                    <button
                      className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-primary rounded-lg focus:ring-4 focus:ring-secondary hover:bg-primary"
                      type="button"
                      onClick={createCategory}
                    >
                      Create Category
                    </button>
                  </div>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table
                  className="w-full text-sm text-left text-gray-500"
                  style={{ display: !loading ? "block" : "none" }}
                >
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                      <th scope="col" className="px-4 py-3">
                        Category Name
                      </th>
                      <th scope="col" className="px-4 py-3 w-24">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {categories.map((category) => (
                      <tr className="border-b" key={category.id}>
                        
                        <th
                          scope="row"
                          className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap"
                        >
                          {category.name}
                        </th>
                        <td className="px-4 py-3 flex flex-row w-">
                          <span className="inline-flex divide-x overflow-hidden rounded-md border bg-white shadow-sm">
                            <button
                              className="inline-block p-3 text-gray-700 hover:bg-gray-50 hover:text-primary focus:relative"
                              title="Edit Product"
                              onClick={() => editCategory(category.id)}
                            >
                              {/* Replace with your edit icon */}
                              Edit
                            </button>
                            <button
                              className="inline-block p-3 text-gray-700 hover:bg-gray-50 hover:text-red-600 focus:relative"
                              title="Delete Product"
                              onClick={() => deleteCategory(category.id)}
                            >
                              {/* Replace with your delete icon */}
                              Delete
                            </button>
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div style={{ display: loading ? "block" : "none" }}>
                  <div className="px-3 py-1 text-xs font-medium leading-none text-center text-white bg-secondary rounded-full animate-pulse">
                    Loading...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
  );
}
