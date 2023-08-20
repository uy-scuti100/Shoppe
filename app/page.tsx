import React from "react";
import Search from "@/components/(shared)/Search";
import CategorySlider from "@/components/(Home)/CategorySlider";
import ProductsSection from "@/components/(Home)/ProductsSection";

import HeroSection from "@/components/(Home)/HeroSection";
import ProductSlider from "@/components/Slider";

const page = () => {
   return (
      <main className="custom-padding">
         <div className="mt-8">
            <Search />
         </div>
         <CategorySlider />
         <ProductSlider />
         <HeroSection />
      </main>
   );
};

export default page;
