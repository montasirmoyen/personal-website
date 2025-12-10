import type { Metadata } from "next";
import { Lato, Forum } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const forum = Forum({
  variable: "--font-forum",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Montasir Moyen - Software Developer",
  description: "Personal Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head />
      <body className={`${lato.variable} ${forum.variable} antialiased bg-black overflow-x-hidden`}>
        <div className="min-h-screen flex flex-col relative overflow-visible">
          <NavBar />
          <main className="flex-1 overflow-visible">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}