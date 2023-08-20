import React from "react";
import { TailSpin } from "react-loader-spinner";

import { Product } from "@/types/type";
import Image from "next/image";
interface ProductProp {
   product: Product;
}

const Product: React.FC<ProductProp> = ({ product }) => {
   return (
      <div className="hero-section">
         {product ? (
            <div>
               <h1>{product.name}</h1>

               <p>{product.description}</p>

               <div className="flex flex-wrap gap-5">
                  {product.images.map((image) => (
                     <Image
                        src={image}
                        alt="product image"
                        height={500}
                        width={500}
                        className="border rounded-xl border-Black"
                     />
                  ))}
               </div>
            </div>
         ) : (
            <div className="grid p-10 place-content-center">
               <TailSpin width={50} height={50} color="#000" />
               ...
            </div>
         )}
      </div>
   );
};

export default Product;
