
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header/page";
import { ClerkProvider } from "@clerk/nextjs";
 
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
        <ClerkProvider>

           <Header />
          {children}
        </ClerkProvider>
       </body>
    </html>
  );
}
