import { categories } from "@/constants/category";
import React from "react";

const CategorySlider = () => {
   return (
      <section className="flex items-center py-2 pt-4 mx-auto space-x-4 lg:space-x-6 main-nav">
         {categories.map((cat, i) => (
            <p
               key={i}
               className="border border-Gray rounded px-4 w-max flex justify-center items-center whitespace-nowrap h-10 cursor-pointer">
               {cat}
            </p>
         ))}
      </section>
   );
};

export default CategorySlider;
