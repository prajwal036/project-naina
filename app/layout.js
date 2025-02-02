import { Playfair } from "next/font/google";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeaderMobile from "../components/header-mobile";

const playfair = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "D'Naina's dreamland & Baarish Restaurant",
  description:
    "Discover romantic lakeside dining & luxury stays near Pawna Lake, Lonavala. Private gazebos, French cottages, adventure activities & celebrations at budget-friendly prices.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <body className={`relative w-full ${playfair.className}`}>
        <Navbar />
        {/* <HeaderMobile /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
