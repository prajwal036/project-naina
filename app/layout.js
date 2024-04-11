import { Playfair } from "next/font/google";
import "./globals.css";

const playfair = Playfair({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={playfair.className}>{children}</body>
    </html>
  );
}
