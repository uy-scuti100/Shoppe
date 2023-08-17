import Image from "next/image";
import heroImg from "../../public/assets/heroImg.png";
import heroImg2 from "../../public/assets/heroImg2.png";
import slider from "../../public/assets/Slider.svg";

const HeroSection = () => {
   return (
      <section className="mt-8 w-full ">
         <div className="hidden md:block relative">
            <Image
               src={heroImg}
               alt="hero-image"
               width={1248}
               height={646}
               className="md:w-full md:h-[646px] h-[18.6875rem] object-cover rounded-lg"
               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
            />
            <div className="flex flex-col absolute top-[50%] left-0 pl-[2.44rem] mb-[1.62rem]">
               <h1 className="capitalize text-white">gold big hoops</h1>
               <h2 className="text-white body-small">$ 68,00</h2>
               <button className="flex items-center justify-center text-white text-sm font-bold uppercase border border-white body-small pt-2">
                  View Product
               </button>
            </div>
            <Image
               src={slider}
               width={108}
               height={16}
               alt="slider-icon"
               className="absolute left-[50%] bottom-10 translate-x-[-50%] translate-y-[-50%]"
            />
         </div>
         <div className="relative md:hidden">
            <Image
               src={heroImg2}
               alt="hero-image"
               width={288}
               height={299}
               className="h-full w-full object-cover rounded-lg"
            />
            <div className="flex flex-col absolute bottom-0 left-0 pl-2 mb-[1.62rem]">
               <h4 className="capitalize text-white">gold big hoops</h4>
               <p className="text-white body-small">$ 68,00</p>
               <button className="flex items-center justify-center text-white border border-white body-small pt-2">
                  View Product
               </button>
            </div>
            <Image
               src={slider}
               width={90}
               height={10}
               alt="slider-icon"
               className="absolute left-[50%] bottom-0 translate-x-[-50%] translate-y-[-50%]"
            />
         </div>
      </section>
   );
};

export default HeroSection;
