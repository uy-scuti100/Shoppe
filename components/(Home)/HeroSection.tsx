import loadData from "@/utils/loadData";
import { Product as ProductType } from "@/types/type";
import ProductCard from "../(shared)/ProductCard";
import ProductsSection from "./ProductsSection";

const revalidate = 60;

const getProducts = async (): Promise<any> => {
   const response = await loadData("data/products.json");
   const products = response?.products;
   // console.log(products);
   return products;
};

export default async function HeroSection() {
   const products = await getProducts();
   if (!Array.isArray(products)) {
      console.error("Products data is not an array:");
      return null;
   }

   const formatProducts = () => {
      const heroProducts: { [category: string]: ProductType } = {};

      products.forEach((product: ProductType) => {
         const category = product?.category;
         if (category && !heroProducts[category]) {
            heroProducts[category] = product;
         }
      });

      return Object.values(heroProducts);
   };
   const heroProducts = formatProducts();

   return (
      <main className="mt-8">
         <div className="flex justify-between items-center mb-[2.44rem]">
            <h1>Shop The Latest</h1>
            <h4 className="text-Accent cursor-pointer hover:text-black active:text-Black transition-colors duration-300 ease-in-out">
               View All
            </h4>
         </div>
         <ProductsSection heroProducts={heroProducts} />
      </main>
   );
}
