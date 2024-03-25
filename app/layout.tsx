
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header/page";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Footer from "./components/footer/page";
 
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
      className="bg-gray-900 text-white "
    >
      <body className={inter.className}>
        <ClerkProvider appearance={{
        baseTheme: dark
      }} >
        <div className="flex flex-col items-center m-auto justify-between h-screen">
           <Header />
          {children}
          <Footer />
        </div>
        </ClerkProvider>
       </body>
    </html>
  );
}
