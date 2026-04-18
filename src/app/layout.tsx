import { Geist_Mono, DM_Sans } from "next/font/google"

import "./globals.css"
import { cn } from "@/lib/utils";
import mm_metadata from "@/lib/metadata"

import NavBar from "@/components/ui/navbar1";
import Footer from "@/components/ui/footer1";
import { Toaster } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"

export const metadata = mm_metadata;

const dmSans = DM_Sans({subsets:['latin'],variable:'--font-sans'})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en-US"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", dmSans.variable)}
    >
      <body>
        <TooltipProvider>
          <NavBar />
          {children}
          <Footer />
        </TooltipProvider>
        <Toaster />
      </body>
    </html>
  )
}
