import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
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
    <html lang="en">
      <head />
      <body className={`${lato.variable} antialiased`}>
        <div className="min-h-screen flex flex-col relative">
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}