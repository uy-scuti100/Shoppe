import { categories } from "@/constants/category,";
import React from "react";

const CategorySlider = () => {
   return (
      <section className="flex flex-no-wrap items-center gap-2 pt-4 overflow-x-auto">
         {categories.map((cat, i) => (
            <button key={i} className="border border-Gray">
               {cat}
            </button>
         ))}
      </section>
   );
};

export default CategorySlider;
