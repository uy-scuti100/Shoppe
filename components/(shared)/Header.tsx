"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import cart from "../../public/assets/shopping-cart 1.svg";
import menu from "../../public/assets/hamburger.svg";
import times from "../../public/assets/times.svg";
import search from "../../public/assets/search.svg";
import profile from "../../public/assets/profile.svg";
import logout from "../../public/assets/logout.svg";
import Search from "./Search";
import Link from "next/link";
import { navLinks } from "@/constants/navLinks";

const Header = () => {
   const [openMenu, setOpenMenu] = useState<boolean>(false);
   const path = usePathname();
   // console.log(path);
   const handleMenuToggle = () => {
      setOpenMenu((prev: boolean): boolean => !prev);
   };

   // this fucntion will be passed to the navlinks such that when any link is clicked, it will smooothly scroll the new page rendered to the top and deactivate the togglemenu so that it doesnt remain opened on the new page
   const smoothScrollAndCloseMenu = () => {
      setOpenMenu((prev: boolean): boolean => !prev);
      window.scrollTo({ top: 0, behavior: "smooth" });
   };

   const menuImageSrc = openMenu ? times : menu;

   return (
      <header className="custom-padding h-[1.125rem] flex justify-between items-center pt-8 md:pt-[4.12rem] relative">
         <div>
            <span className="allerta">O</span>
            <span className="allerta-black">SIRIS</span>
         </div>
         <nav className="flex items-center md:gap-12 md:divide-x">
            <div
               className={`absolute transition-all duration-500 top-14 z-50 h-[100vh] md:h-auto bg-white justify-center items-center md:bg-transparent md:static md:flex md:flex-row ${
                  openMenu ? "left-0" : "-left-[200%]"
               }`}>
               <div className="bg-white text-Black">
                  <div className="w-screen px-4 bg-white md:hidden">
                     <div className="w-[390px]">
                        <Search />
                     </div>
                     <div className="mt-[2.44rem]">
                        <ul className="flex flex-col items-start gap-6 px-4 text-left ">
                           {navLinks.map((link) => {
                              const { label, href } = link;
                              return (
                                 <Link
                                    key={link.href}
                                    href={href}
                                    className={`hover:scale-[1.1] border-Black transition-border ease ${
                                       path === href ? "border-b" : ""
                                    }`}
                                    onClick={smoothScrollAndCloseMenu}>
                                    <li>
                                       <h3>{label}</h3>
                                    </li>
                                 </Link>
                              );
                           })}
                        </ul>
                        <div className="mt-8 border-t border-LightGray" />
                        <div className="flex flex-col gap-8 px-4 mt-8">
                           <div className="flex gap-4">
                              <Image
                                 src={profile}
                                 alt="cart-image"
                                 height={21}
                                 width={21}
                                 className="cursor-pointer md:hidden"
                              />
                              <h3>My account</h3>
                           </div>
                           <div className="flex gap-4">
                              <Image
                                 src={logout}
                                 alt="cart-image"
                                 height={21}
                                 width={21}
                                 className="cursor-pointer md:hidden"
                              />
                              <h3>Logout</h3>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="flex-row hidden gap-16 md:flex">
                     <Link href="/shop">
                        <li className="list-none duration-150 md:hover:pb-2 md:hover:border-b border-Black transition-border ease">
                           Shop
                        </li>
                     </Link>
                     <Link href="blog/">
                        <li className="list-none duration-150 md:hover:pb-2 md:hover:border-b border-Black transition-border ease">
                           Blog
                        </li>
                     </Link>
                     <Link href="/story">
                        <li className="list-none duration-150 md:hover:pb-2 md:hover:border-b border-Black transition-border ease">
                           Our Story
                        </li>
                     </Link>
                  </div>
               </div>
            </div>
            <div className="flex items-center gap-4 md:gap-12 md:pl-12 ">
               <Image
                  src={search}
                  alt="cart-image"
                  height={21}
                  width={21}
                  className="hidden cursor-pointer md:flex"
               />
               <Image
                  src={cart}
                  alt="cart-image"
                  height={21}
                  width={21}
                  className="duration-150 cursor-pointer hover:pb-1 hover:border-b border-Black transition-border ease"
               />
               <Image
                  src={menuImageSrc}
                  alt="cart-image"
                  height={21}
                  width={21}
                  className={`transition-transform duration-300 cursor-pointer md:hidden ${
                     openMenu ? "rotate-180 skew-y-6" : "rotate-0"
                  }`}
                  onClick={handleMenuToggle}
               />
               <Image
                  src={profile}
                  alt="cart-image"
                  height={21}
                  width={21}
                  className="hidden cursor-pointer md:flex"
               />
            </div>
         </nav>
      </header>
   );
};

export default Header;
