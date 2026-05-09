"use client";

import { usePathname } from "next/navigation";
import NavBar from "@/components/ui/navbar1";
import Footer from "@/components/ui/footer1";

export default function Shell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const bare = pathname.startsWith("/uninext");

  return (
    <>
      {!bare && <NavBar />}
      {children}
      {!bare && <Footer />}
    </>
  );
}
