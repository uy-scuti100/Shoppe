import { Product } from "@/types/type";
import Image from "next/image";

const ProductCard = ({ product }: { product: Product }) => {
   const {
      name,
      category,
      normalPrice,
      oldPrice,
      rating,
      soldOut,
      images,
      discounted,
      id,
      isNew,
   } = product;
   const image = images[0];

   let truncatedCategory = category;
   if (category.length > 9) {
      truncatedCategory = category.substring(0, 9) + "...";
   }

   let percentageDiscount = null;
   if (oldPrice) {
      const priceDifference = normalPrice - oldPrice;
      percentageDiscount = ((priceDifference / oldPrice) * 100).toFixed(2);
   }
   return (
      <div className="relative flex flex-col gap-4 group cursor-pointer">
         <div className="relative overflow-hidden transition-transform border rounded-xl group-hover:scale-105 border-Accent h-[300px] w-[300px] ">
            <Image
               src={image}
               alt={name}
               // width={380}
               // height={380}
               fill
               className="object-cover rounded-xl md:h-[380px] md:w-[380px] h-[136px] w-[136px]"
               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* hover effect */}
            <div className="absolute inset-0 flex items-center justify-center transition-opacity opacity-0 gap-[1.88rem] bg-white/60 group-hover:opacity-100">
               <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <g id="shopping-cart 1">
                     <path
                        id="Vector"
                        d="M6.76598 13.5765H6.76694C6.76774 13.5765 6.76854 13.5763 6.76934 13.5763H17.9238C18.1984 13.5763 18.4399 13.3941 18.5153 13.1301L20.9763 4.51681C21.0293 4.33112 20.9921 4.13148 20.876 3.97736C20.7597 3.82323 20.5778 3.73254 20.3848 3.73254H5.34709L4.90729 1.75338C4.84465 1.47188 4.59503 1.27161 4.30664 1.27161H0.615234C0.275413 1.27161 0 1.54702 0 1.88684C0 2.22666 0.275413 2.50208 0.615234 2.50208H3.81317C3.89104 2.85279 5.91779 11.9733 6.03442 12.498C5.38058 12.7823 4.92187 13.4342 4.92187 14.1915C4.92187 15.2092 5.74988 16.0372 6.76758 16.0372H17.9238C18.2636 16.0372 18.5391 15.7618 18.5391 15.422C18.5391 15.0822 18.2636 14.8068 17.9238 14.8068H6.76758C6.4284 14.8068 6.15234 14.5307 6.15234 14.1915C6.15234 13.8528 6.42744 13.5773 6.76598 13.5765ZM19.5691 4.96301L17.4597 12.3458H7.26105L5.62042 4.96301H19.5691Z"
                        fill="black"
                     />
                     <path
                        id="Vector_2"
                        d="M6.15234 17.8827C6.15234 18.9004 6.98035 19.7285 7.99805 19.7285C9.01575 19.7285 9.84375 18.9004 9.84375 17.8827C9.84375 16.8651 9.01575 16.037 7.99805 16.037C6.98035 16.037 6.15234 16.8651 6.15234 17.8827ZM7.99805 17.2675C8.33723 17.2675 8.61328 17.5436 8.61328 17.8827C8.61328 18.2219 8.33723 18.498 7.99805 18.498C7.65887 18.498 7.38281 18.2219 7.38281 17.8827C7.38281 17.5436 7.65887 17.2675 7.99805 17.2675Z"
                        fill="black"
                     />
                     <path
                        id="Vector_3"
                        d="M14.8477 17.8827C14.8477 18.9004 15.6757 19.7285 16.6934 19.7285C17.7111 19.7285 18.5391 18.9004 18.5391 17.8827C18.5391 16.8651 17.7111 16.037 16.6934 16.037C15.6757 16.037 14.8477 16.8651 14.8477 17.8827ZM16.6934 17.2675C17.0325 17.2675 17.3086 17.5436 17.3086 17.8827C17.3086 18.2219 17.0325 18.498 16.6934 18.498C16.3542 18.498 16.0781 18.2219 16.0781 17.8827C16.0781 17.5436 16.3542 17.2675 16.6934 17.2675Z"
                        fill="black"
                     />
                  </g>
               </svg>
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none">
                  <path
                     d="M2.12499 16L3.76249 17.6375C10.5125 24.3875 21.4937 24.3875 28.2437 17.6375L29.875 16L28.2375 14.3625C21.4875 7.6125 10.5062 7.6125 3.75624 14.3625L2.12499 16ZM16 23.8875C11.2625 23.8875 6.52499 22.0813 2.91874 18.475L0.862494 16.4188C0.631244 16.1875 0.631244 15.8125 0.862494 15.575L2.91874 13.5188C10.1312 6.30625 21.8687 6.30625 29.0812 13.5188L31.1375 15.575C31.3687 15.8062 31.3687 16.1813 31.1375 16.4188L29.0812 18.475C25.475 22.0813 20.7375 23.8875 16 23.8875Z"
                     fill="black"
                     stroke="black"
                     stroke-width="0.3"
                  />
                  <path
                     d="M16 11.4688C13.5 11.4688 11.4688 13.5 11.4688 16C11.4688 18.5 13.5 20.5312 16 20.5312C18.5 20.5312 20.5313 18.5 20.5313 16C20.5313 13.5 18.5 11.4688 16 11.4688ZM16 21.7188C12.8438 21.7188 10.2813 19.15 10.2813 16C10.2813 12.8438 12.85 10.2812 16 10.2812C19.15 10.2812 21.7188 12.85 21.7188 16C21.7188 19.1562 19.1563 21.7188 16 21.7188Z"
                     fill="black"
                     stroke="black"
                     stroke-width="0.3"
                  />
               </svg>
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="24"
                  viewBox="0 0 27 24"
                  fill="none">
                  <path
                     d="M12.3428 22.7425C12.6538 23.0534 13.0718 23.2268 13.5102 23.2268C13.9435 23.2268 14.3717 23.0483 14.6776 22.7425L23.8385 13.5816C25.2302 12.1898 25.9949 10.3393 26 8.37663C26 6.40885 25.2353 4.55832 23.8436 3.1666C22.4519 1.77488 20.6064 1.0102 18.6387 1.0102C16.7066 1.0102 14.8866 1.74939 13.5051 3.09523C12.1185 1.74429 10.2934 1 8.35624 1C6.39356 1 4.54812 1.76468 3.1564 3.15131C1.76468 4.54303 1 6.39356 1 8.36134C1 10.324 1.76978 12.1746 3.1615 13.5663L12.3428 22.7425ZM4.04343 4.03834C5.19555 2.88622 6.73002 2.24898 8.36134 2.24898C9.99266 2.24898 11.5322 2.88622 12.6894 4.04343L13.0667 4.42068C13.1839 4.53793 13.342 4.6042 13.5102 4.6042C13.6733 4.6042 13.8365 4.53793 13.9537 4.42068L14.3208 4.05363C15.478 2.89641 17.0124 2.25918 18.6489 2.25918C20.2802 2.25918 21.8146 2.89641 22.9668 4.04853C24.124 5.20575 24.7561 6.74021 24.7561 8.37153C24.7561 10.0029 24.1189 11.5373 22.9617 12.6945L13.7957 21.8605C13.6478 22.0084 13.3777 22.0084 13.2247 21.8605L4.04853 12.6843C2.89131 11.5271 2.25408 9.99266 2.25408 8.36134C2.25408 6.73002 2.89131 5.19555 4.04343 4.03834Z"
                     fill="black"
                     stroke="black"
                     stroke-width="0.3"
                  />
               </svg>
            </div>
            <div className="absolute top-4 left-4 py-[0.12rem] px-2 bg-black text-white body-small rounded">
               {truncatedCategory}
            </div>
            {percentageDiscount !== null && (
               <div className="absolute top-4 right-4 py-[0.12rem] px-2 bg-Accent text-white body-small rounded">
                  {Number(percentageDiscount) < 0
                     ? `${percentageDiscount}%`
                     : "-0%"}
               </div>
            )}
         </div>
         <h3 className="body-medium">{name}</h3>
         <div className="flex gap-4">
            {oldPrice && (
               <h4 className="text-Error body-small line-through">
                  $ {oldPrice} ,00
               </h4>
            )}
            <h4 className="body-small text-Accent">$ {normalPrice},00</h4>
         </div>
      </div>
   );
};

export default ProductCard;
