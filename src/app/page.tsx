"use client";

import Image from "next/image";
import AuroraBackground from "../components/AuroraBackground";
import { TextAnimate } from "../components/ui/text-animate"

export default function Home() {
  return (
    <AuroraBackground>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <TextAnimate animation="blurInUp" by="character" className="text-5xl font-bold font-hero">Quietly building for the web...</TextAnimate>
        <TextAnimate animation="blurInUp" by="character" className="mt-4">
          Hello, I'm Montasir Moyen, a full-stack developer.
        </TextAnimate>
      </div>
    </AuroraBackground>
  );
}

{/* <Image unoptimized className="rounded-3xl" src="/montasirmoyen.png" alt="Montasir Moyen Logo"
            width={48} height={48} /> */}