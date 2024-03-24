
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header/page";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
 
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
      className="bg-gray-800 text-white "
    >
      <body className={inter.className}>
        <ClerkProvider appearance={{
        baseTheme: dark
      }} >
        <div className="flex flex-col items-center m-auto justify-between">
           <Header />
          {children}
        </div>
        </ClerkProvider>
       </body>
    </html>
  );
}
