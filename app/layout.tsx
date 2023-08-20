import "./globals.css";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Header from "@/components/(shared)/Header";
import Footer from "@/components/(shared)/Footer";

const Dmsans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "Osiris",
   description: "Your one stop Jewellery Store",
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en">
         <body className={Dmsans.className}>
            {" "}
            <Header />
            {children}
            <Footer />
         </body>
      </html>
   );
}
