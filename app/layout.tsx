
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header/page";
 
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bleet",
  description: "An blog app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="bg-gradient-to-r from-slate-800 to-gray-900 text-white "
    >
      <body className={inter.className}>
           <Header />
          {children}
       </body>
    </html>
  );
}
