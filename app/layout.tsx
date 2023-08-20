import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/(shared)/Header";
import Footer from "@/components/(shared)/Footer";

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
         <body>
            {" "}
            <Header />
            {children}
            <Footer />
         </body>
      </html>
   );
}
