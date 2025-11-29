"use client";

import Image from "next/image";
import AuroraBackground from "../components/AuroraBackground";

export default function Home() {
  return (
    <AuroraBackground>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-5xl font-bold">Quietly building for the web...</h1>
        <p className="mt-4 text-lg text-center max-w-2xl flex items-center justify-center gap-4">
          Hello, I'm
          <Image unoptimized className="rounded-3xl" src="/montasirmoyen.png" alt="Montasir Moyen Logo"
            width={48} height={48} />
          Montasir Moyen, a full-stack developer.
        </p>
      </div>
    </AuroraBackground>
  );
}
