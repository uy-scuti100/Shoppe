import {
   desktopProductsList,
   mobileProductsList,
} from "@/constants/productsList";
import { DesktopProductCard, MobileProductCard } from "../(shared)/ProductCard";

const ProductsSection = () => {
   return (
      <section className="mt-8">
         <div className="flex items-center justify-between">
            <h1 className="capitalize text-Black"> shop the latest</h1>
            <h4 className="capitalize text-Accent cursor-pointer">view all</h4>
         </div>

         {/* ///////////////////////////////////////////////////////////////////////////// */}

         {/* mobile products card */}

         <div className="mt-8 md:hidden">
            <div className="grid gap-4 grid-cols-2">
               {mobileProductsList.map((product, index) => (
                  <MobileProductCard
                     key={index}
                     label={product.label}
                     image={product.image}
                     price={product.price}
                     large={product.large}
                  />
               ))}
            </div>
         </div>

         {/* ///////////////////////////////////////////////////////////////////////////// */}

         {/* desktop and products card */}
         <div className="mt-8 hidden md:block">
            <div className="grid gap-4 grid-cols-3">
               {desktopProductsList.map((product, index) => (
                  <DesktopProductCard
                     key={index}
                     label={product.label}
                     image={product.image}
                     price={product.price}
                     hoverable1={product.hoverable1}
                     hoverable2={product.hoverable2}
                  />
               ))}
            </div>
         </div>
      </section>
   );
};

export default ProductsSection;
