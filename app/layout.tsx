import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from './components/NavBar'
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ocean",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-900 text-slate-400 text-lg min-h-screen overflow-x-hidden`}>
        <NavBar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
