"use client";

import { TextAnimate } from "@/components/ui/text-animate"
import DarkVeil from "@/components/DarkVeil"
import { Globe } from "@/components/ui/globe"
import { AnimatedBeamDemo } from '@/components/AnimatedBeamDemo'
import Link from "next/link";
import { AuroraText } from "@/components/ui/aurora-text"
import { Marquee } from "@/components/ui/marquee"
import { cn } from "@/lib/utils";
import { LiquidButton } from "@/components/ui/liquid-button"
import AnimatedContent from '@/components/AnimatedContent'
import { Particles } from "@/components/ui/particles";
import { Linkedin, Github } from "lucide-react"
import AvailableForRoles from "@/components/AvailableForRoles"

const files = [
  {
    name: "MPS",
    body: "A fast-paced soccer game created using Lua that has acheived many feats.",
  },
  {
    name: "Luxury Transport",
    body: "A full-stack luxury transportation booking website that handles reservations, cancellation and more.",
  },
  {
    name: "Fragrance Catalog",
    body: "Browse fragrances and sort over 25+ notes. Research about the specifics and find your most suitable scent.",
  }
]

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <section id="hero" className="relative h-screen w-full overflow-hidde">
        <div className="absolute inset-0 z-0">
          <DarkVeil />
        </div>

        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
          <TextAnimate
            animation="blurInUp"
            by="character"
            className="text-3xl md:text-5xl font-bold font-hero"
          >
            Quietly building for the web...
          </TextAnimate>

          <TextAnimate
            animation="blurInUp"
            by="character"
            className="mt-4 text-base md:text-xl px-4"
          >
            Hi, I'm Montasir Moyen, a full-stack developer.
          </TextAnimate>

          <AnimatedContent
            className="mt-2"
            distance={50}
            direction="vertical"
            reverse={false}
            duration={1}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={0.2}
            delay={.5}
          >
            <Link href="/about"
              className="text-xl"
            >
              <LiquidButton className="scale-75 font-bold text-lg">
                Learn More
              </LiquidButton>
            </Link>
          </AnimatedContent>
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center justify-center mb-50 gap-4 md:gap-15 px-4 md:px-0">
        <div className="bg-gradient-to-b from-card to-black border-2 border-lg border-card-foreground
         relative flex size-full max-w-lg w-full items-center
         justify-center overflow-hidden rounded-lg">
          <div className="absolute top-5 text-center z-1">
            <p className="text-3xl font-bold">Let's connect</p>
            <AuroraText className="text-xl font-bold mt-1">Visit my socials</AuroraText>
            <div className="mt-3 gap-5 flex justify-center items-center">
              <Link
                href={"https://www.linkedin.com/in/montasirmoyen/"}
                target="_blank">
                <Linkedin className="hover:text-white/50 transition" height={24} width={24} />
              </Link>
              <Link
                href={"https://www.github.com/montasirmoyen/"}
                target="_blank">
                <Github className="hover:text-white/50 transition" height={24} width={24} />
              </Link>
            </div>
          </div>

          <div className="w-full mt-20 mb-5 z-0">
            <AnimatedBeamDemo />
          </div>
        </div>

        <div className="bg-gradient-to-b from-card to-black border-2 border-lg border-card-foreground relative flex size-full max-w-lg w-full items-center justify-center overflow-hidden rounded-lg pb-125">
          <div className="text-center mt-10 pointer-events-none">
            <p className="text-3xl font-bold">I'm currently in...</p>
            <AuroraText className="text-xl font-bold">Boston, Massachusetts, USA</AuroraText>
          </div>
          <Particles
            className="absolute inset-0"
            quantity={100}
            ease={25}
            color="#ffffff"
            refresh
          />
          <Globe className="lg:scale-150 lg:top-60 scale-150 top-50 md:scale-250 md:top-100" />
          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
        </div>

        <div className="bg-gradient-to-b from-card to-black border-2 border-lg border-card-foreground
         relative flex size-full max-w-lg w-full items-center justify-center 
         overflow-hidden rounded-lg pb-75">
          <div className="text-center mt-10 pointer-events-none">
            <p className="text-3xl font-bold">Visit my</p>
            <AuroraText className="text-xl font-bold">Curated Projects</AuroraText>
          </div>

          <Marquee
            pauseOnHover
            className="absolute bottom-0 [mask-image:linear-gradient(to_top,transparent_20%,#000_100%)] [--duration:20s]"
          >
            {files.map((f, idx) => (
              <Link href={"/projects"} key={idx}>
                <figure
                  className={cn(
                    "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
                    "border-card-foreground/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                    "border-card-foreground bg-card/[.10] hover:bg-card",
                    "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
                  )}
                >
                  <div className="flex flex-row items-center gap-2">
                    <div className="flex flex-col">
                      <figcaption className="text-sm font-medium text-white">
                        {f.name}
                      </figcaption>
                    </div>
                  </div>
                  <blockquote className="mt-2 text-xs">{f.body}</blockquote>
                </figure>
              </Link>
            ))}
          </Marquee>
        </div>
      </section>

      <AvailableForRoles />
    </div>
  );
}