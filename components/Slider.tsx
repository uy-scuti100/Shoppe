"use client";
import { Swiper, SwiperSlide } from "swiper/react";
// import swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

import Image1 from "../public/assets/heroImg.png";
import Image2 from "../public/assets/b1p4.webp";
import Image3 from "../public/assets/b2p3.webp";
import Image4 from "../public/assets/r1p3.webp";
import Image5 from "../public/assets/r5p4.jpg";
import Image from "next/image";

const ProductSlider = () => {
   const images = [Image2, Image4, Image1, Image3, Image5];
   const imageContent = [
      {
         type: "Bracelets",
         title: "Rose Gold Chain Bracelet",
         price: "$55.00",
         buttonText: "View Product",
      },
      {
         type: "Rings",
         title: "Diamond Solitaire Ring",
         price: "$350.00",
         buttonText: "View Product",
      },
      {
         type: "Earrings",
         title: "Gold Big Hoops",
         price: "$68.00",
         buttonText: "View Product",
      },
      {
         type: "Bracelets",
         title: "Silver Bangle Set",
         price: "$45.00",
         buttonText: "View Product",
      },
      {
         type: "Rings",
         title: "White Gold Eternity Band",
         price: "$275.00",
         buttonText: "View Product",
      },
   ];

   return (
      <Swiper
         modules={[Pagination, Navigation]}
         loop={true}
         navigation
         pagination={{
            clickable: true,
         }}
         className="productSlider">
         <>
            {images.map((image, i) => {
               const content = imageContent[i];
               return (
                  <SwiperSlide key={i}>
                     <section className="w-full mt-8 ">
                        <div className="relative">
                           <Image
                              src={image}
                              alt="hero-image"
                              width={1248}
                              height={646}
                              className="md:w-full md:h-[646px] h-[18.6875rem] object-cover rounded-lg"
                              // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw"
                           />
                           <div className="flex flex-col absolute top-[55%] md:top-[70%] left-0 pl-2 md:pl-[2.44rem] mb-[1.62rem]">
                              <h1 className="text-white capitalize">
                                 {content.title}
                              </h1>
                              <h2 className="text-white body-small">
                                 {content.price}
                              </h2>
                              <p className="border border-white rounded px-4 w-max flex justify-center items-center whitespace-nowrap h-10 cursor-pointer text-white">
                                 {content.buttonText}
                              </p>
                           </div>
                        </div>
                     </section>
                  </SwiperSlide>
               );
            })}
         </>
      </Swiper>
   );
};

export default ProductSlider;
