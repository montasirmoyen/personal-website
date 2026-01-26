"use client";

import Image from "next/image";
import { CopyButton } from "@/components/ui/copy";

interface AvailableForRolesProps {
  email?: string;
  backgroundImage?: string;
  logo?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
}

export default function AvailableForRoles({
  email = "montasirmoyen@gmail.com",
  backgroundImage = "/flower-wallpaper.jpg",
  logo = {
    src: "/mm-logo.png",
    alt: "Montasir Moyen Logo",
    width: 60,
    height: 60,
  },
}: AvailableForRolesProps) {
  return (
    <section className="relative min-h-[450px] flex items-center justify-center text-white mt-20 mb-20 px-4 py-12">
      {/* Background */}
      <div className="absolute inset-0 z-[-1] pointer-events-none overflow-hidden">
        <div
          className="absolute opacity-25 inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("${backgroundImage}")`,
            maskImage: `linear-gradient(to bottom, transparent 5%, black 25%, black 20%, transparent 100%)`,
            WebkitMaskImage: `linear-gradient(to bottom, transparent 5%, black 20%, black 25%, transparent 100%)`,
          }}
        />
      </div>

      {/* Centered Content */}
      <div className="text-center z-10 max-w-2xl mx-auto">
        <Image
          src={logo.src}
          alt={logo.alt}
          height={logo.height || 60}
          width={logo.width || 60}
          className="mx-auto mb-2"
        />

        <p className="text-2xl md:text-4xl font-semibold px-4">
          I'm available for roles, contact me
        </p>

        <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-2 px-4">
          <span className="text-base md:text-lg font-bold break-all">
            {email}
          </span>
          <CopyButton content={email} />
        </div>
      </div>
    </section>
  );
}

