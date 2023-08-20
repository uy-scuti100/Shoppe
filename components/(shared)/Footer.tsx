"use client";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import arrow from "../../public/assets/arrow.svg";
import linkedIn from "../../public/assets/linkedIn.svg";
import facebook from "../../public/assets/facebook.svg";
import instagram from "../../public/assets/instagram.svg";
import twitter from "../../public/assets/twitter.svg";

const formSchema = z.object({
   email: z.string().min(2).max(50),
});

type FormValues = {
   email: string;
};

const Footer = () => {
   const {
      handleSubmit,
      control,
      formState: { errors },
   } = useForm<FormValues>({
      resolver: zodResolver(formSchema),
   });

   const onSubmit: SubmitHandler<FormValues> = (data) => {
      // console.log(data);
   };
   return (
      <footer className="mt-4 custom-padding md:pt-[15.62rem] pt-[6rem]">
         {/* desktop footer  */}
         <div className="hidden border-t border-LightGray md:block" />
         <div className="hidden md:flex flex-row justify-between mt-[3.25rem]">
            <div className="flex lg:gap-[2.56rem] md:gap-[1.28rem]  text-DarkGray">
               <p className="uppercase transition-colors duration-300 ease-in-out cursor-pointer hover:text-Black md:text-sm">
                  Contact
               </p>
               <p className="uppercase transition-colors duration-300 ease-in-out cursor-pointer hover:text-Black md:text-sm">
                  Terms of service
               </p>
               <p className="uppercase transition-colors duration-300 ease-in-out cursor-pointer hover:text-Black md:text-sm">
                  shipping and returns
               </p>
            </div>
            <form
               onSubmit={handleSubmit(onSubmit)}
               className="flex items-center justify-between border-b border-Black">
               <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                     <input
                        {...field}
                        type="email"
                        placeholder="Give an email, get the newsletter"
                        className="lg:w-[24.75rem] md:w-[12.375rem] outline-none placeholder:text-DarkGray md:placeholder:text-sm bg-none pr-2"
                     />
                  )}
               />
               <button className="btn" type="submit">
                  <Image src={arrow} alt="cart-image" height={21} width={21} />
               </button>
               {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
               )}
            </form>
         </div>
         <div className="hidden md:flex justify-between items-center my-12">
            <h5>
               © 2023 Osiris.{" "}
               <span className="text-DarkGray cursor-pointer">
                  Terms of use{" "}
               </span>
               and{" "}
               <span className=" text-DarkGray cursor-pointer">
                  privacy policy.
               </span>
            </h5>
            <div className="hidden md:flex items-center gap-[30px]">
               <Image src={linkedIn} alt="cart-image" height={21} width={21} />{" "}
               <Image src={facebook} alt="cart-image" height={12} width={12} />{" "}
               <Image src={instagram} alt="cart-image" height={21} width={21} />{" "}
               <Image src={twitter} alt="cart-image" height={21} width={21} />
            </div>
         </div>

         {/* mobile footer */}

         <div className="mt-8 mb-16 md:hidden">
            <form
               onSubmit={handleSubmit(onSubmit)}
               className="flex items-center justify-between border-b border-Black">
               <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                     <input
                        {...field}
                        type="email"
                        placeholder="Give an email, get the newsletter"
                        className="w-full outline-none placeholder:text-DarkGray placeholder:text-sm bg-none pr-2"
                     />
                  )}
               />
               <button className="btn" type="submit">
                  <Image src={arrow} alt="cart-image" height={21} width={21} />
               </button>
               {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
               )}
            </form>

            <div className="mt-[0.69rem]">
               <input type="checkbox" name="agreement" id="agreement" />
               <label htmlFor="agreement" className="body-small">
                  i agree to the website’s terms and conditions
               </label>
            </div>
            <div className="flex flex-col gap-[0.5rem] text-DarkGray mt-[2.5rem]">
               <p className="uppercase transition-colors duration-300 ease-in-out cursor-pointer hover:text-Black body-small">
                  Contact
               </p>
               <p className="uppercase transition-colors duration-300 ease-in-out cursor-pointer hover:text-Black body-small">
                  Terms of service
               </p>
               <p className="uppercase transition-colors duration-300 ease-in-out cursor-pointer hover:text-Black body-small">
                  shipping and returns
               </p>
            </div>
            <div className="mt-[2rem] flex gap-4 items-center">
               <p className="text-xs leading-5">Follow us</p>
               <div className="flex items-center gap-2">
                  <div className="w-[2.9375rem] h-[0.0625rem] bg-black" />
                  <div className="flex items-center gap-4">
                     <Image
                        src={facebook}
                        alt="cart-image"
                        height={5}
                        width={7}
                     />{" "}
                     <Image
                        src={instagram}
                        alt="cart-image"
                        height={15}
                        width={15}
                     />{" "}
                     <Image
                        src={twitter}
                        alt="cart-image"
                        height={15}
                        width={15}
                     />
                  </div>
               </div>
            </div>
            <p className="body-small mt-[2.38rem]">
               {" "}
               © 2023 Osiris.{" "}
               <span className="text-DarkGray cursor-pointer">
                  Terms of use{" "}
               </span>
               and{" "}
               <span className=" text-DarkGray cursor-pointer">
                  privacy policy.
               </span>
            </p>
         </div>
      </footer>
   );
};

export default Footer;
