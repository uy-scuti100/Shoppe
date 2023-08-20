import { Product } from "@/types/type";
import React from "react";
import ProductCard from "../(shared)/ProductCard";

const ProductsSection = ({ heroProducts }: { heroProducts: Product[] }) => {
   // console.log(heroProducts);
   return (
      <section className="grid place-items-center gap-[3.37rem] md:grid-cols-2 lg:grid-cols-3 md:gap-0 cursor-pointer">
         {heroProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
         ))}
      </section>
   );
};

export default ProductsSection;
