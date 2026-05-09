import { Geist_Mono, DM_Sans } from "next/font/google"

import "./globals.css"
import { cn } from "@/lib/utils";
import mm_metadata from "@/lib/metadata"

import { Toaster } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import Shell from "@/components/ui/shell"

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
          <Shell>
            {children}
          </Shell>
        </TooltipProvider>
        <Toaster />
      </body>
    </html>
  )
}
