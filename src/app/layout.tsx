import type { Metadata } from "next";
import { Montserrat } from "next/font/google"; 
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Montasir Moyen",
  description: "Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body>
        <div className={`${montserrat.variable} antialiased`}>
          {children}
        </div>
      </body>
    </html>
  );
}