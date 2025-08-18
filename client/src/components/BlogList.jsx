import React, { useState } from "react";
import { blog_data, blogCategories } from "../assets/assets";
import { motion } from "framer-motion";
import BlogCard from "./BlogCard";
import { useAppContext } from "../context/AppContext";

const BlogList = () => {
  const [menu, setMenu] = useState("All");
  const { input } = useAppContext();

  const filteredBlogs = blog_data.filter((blog) => {
    const matchesCategory = menu === "All" || blog.category === menu;
    const matchesSearch =
      blog.title.toLowerCase().includes(input.toLowerCase()) ||
      blog.category.toLowerCase().includes(input.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap justify-center gap-3 sm:gap-6 lg:gap-8 my-8 sm:my-12 relative">
        {blogCategories.map((item) => (
          <div key={item} className="relative">
            <button
              onClick={() => setMenu(item)}
              className={`cursor-pointer text-gray-500 text-sm sm:text-base font-medium transition-colors px-4 py-1 rounded-full relative z-10 ${
                menu === item ? "text-white" : "hover:text-gray-700"
              }`}
            >
              {item}
              {menu === item && (
                <motion.div
                  layoutId="underline"
                  transition={{ type: "spring", stiffness: 200, damping: 35 }}
                  className="absolute inset-0 bg-primary rounded-full -z-10"
                />
              )}
            </button>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-16 sm:mb-24">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog) => <BlogCard key={blog._id} blog={blog} />)
        ) : (
          <p className="text-gray-500 text-center col-span-full">No blogs found.</p>
        )}
      </div>
    </div>
  );
};

export default BlogList;
