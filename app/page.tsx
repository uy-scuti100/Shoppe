import React from "react";
import Search from "@/components/(shared)/Search";
import CategorySlider from "@/components/(Home)/CategorySlider";
import HeroSection from "@/components/(Home)/HeroSection";
import ProductsSection from "@/components/(Home)/ProductsSection";

const page = () => {
   return (
      <main className="custom-padding">
         <div className="mt-8">
            <Search />
         </div>
         <CategorySlider />
         <HeroSection />
         <ProductsSection />
      </main>
   );
};

export default page;
