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
import AvailableForRoles from "@/components/AvailableForRoles"
import OrbitImages from '@/components/OrbitImages'
import BorderGlow from '@/components/BorderGlow';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const images = [
  "/s3.png",
  "/python.png",
  "/cpp.png",
  "/java.webp",
  "/postgresql.svg",
  "/angular.png",
  "/react.png",
  "/nodejs.png",
  "/typescript.png",
  "/javascript.png",
  "/lambda.png",
];

const projects = [
  {
    name: "MPS",
    body: "A fast-paced soccer game created using Lua that has achieved many feats.",
  },
  {
    name: "Luxury Transport",
    body: "A full-stack luxury transportation booking website that handles reservations, cancellation and more.",
  },
  {
    name: "ScentDex",
    body: "Browse fragrances and sort over 25+ notes. Research about the specifics and find your most suitable scent.",
  },
  {
    name: "RamAI",
    body: "An AI-powered assistant designed to help Suffolk University students with professor selection and course planning.",
  },
  {
    name: "ResumeXP",
    body: "An AI-powered resume analyzer that provides honest feedback, job match scores, and personalized cover letters.",
  }
]

const BORDER_GLOW_PROPS = {
  edgeSensitivity: 0,
  glowColor: "40 80 80",
  backgroundColor: "#000000",
  borderRadius: 28,
  glowRadius: 50,
  glowIntensity: 1,
  coneSpread: 25,
  colors: ['#5c16ff', '#1990ff', '#d82aff'],
};

export default function Home() {
  return (
    <main className="relative overflow-hidden">
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
            Hi, I'm Montasir Moyen, a software developer & engineer
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
              <LiquidButton className="scale-75 font-bold text-xl">
                Learn More
              </LiquidButton>
            </Link>
          </AnimatedContent>
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center justify-center mb-50 gap-4 px-12">
        <BorderGlow
          {...BORDER_GLOW_PROPS}
          className="size-full overflow-hidden max-h-130 min-h-130">
          <div className="text-center mt-10 w-full">
            <p className="text-3xl font-bold">Let's connect</p>
            <AuroraText className="text-xl font-bold mt-1">Visit my socials</AuroraText>
            <div className="mt-3 gap-5 flex justify-center items-center">
              <Link
                href={"https://www.linkedin.com/in/montasirmoyen/"}
                target="_blank">
                <FaLinkedin className="hover:scale-120 transition" size={24} />
              </Link>
              <Link
                href={"https://www.github.com/montasirmoyen/"}
                target="_blank">
                <FaGithub className="hover:scale-120 transition" size={24} />
              </Link>
            </div>
          </div>

          <div className="w-full mb-18">
            <AnimatedBeamDemo />
          </div>
        </BorderGlow>

        <BorderGlow
          {...BORDER_GLOW_PROPS}
          className="overflow-hidden size-full max-h-130 min-h-130">
          <div className="text-center mt-10 w-full">
            <p className="text-3xl font-bold">I'm currently in...</p>
            <AuroraText className="text-xl font-bold">Boston, Massachusetts, USA</AuroraText>
          </div>
          <Globe className="relative scale-150 w-full top-30" />
        </BorderGlow>

        <BorderGlow
          {...BORDER_GLOW_PROPS}
          className="size-full overflow-hidden max-h-130 min-h-130"
        >
          <div className="relative z-10 text-center mt-10">
            <p className="text-3xl font-bold">View my</p>
            <AuroraText className="text-xl font-bold">Blogs</AuroraText>
          </div>

          <div className="relative flex min-h-80 w-full flex-1 items-center justify-center overflow-hidden">
            <OrbitImages
              images={images}
              shape="ellipse"
              radiusX={500}
              radiusY={300}
              rotation={-8}
              duration={25}
              itemSize={125}
              responsive={true}
              radius={160}
              direction="normal"
              fill
              showPath
              imageOnClick={"/blog"}
              paused={false}
            />
          </div>
        </BorderGlow>

        <BorderGlow
          {...BORDER_GLOW_PROPS}
          className="size-full overflow-hidden max-h-130 min-h-130"
        >
          <div className="text-center mt-10 pointer-events-none">
            <p className="text-3xl font-bold">View my</p>
            <AuroraText className="text-xl font-bold">Projects</AuroraText>
          </div>

          <Marquee
            pauseOnHover
            className="relative py-25.5 mask-[linear-gradient(to_top,transparent_20%,#000_100%)] [--duration:20s]"
          >
            {projects.map((f, idx) => (
              <Link href={"/projects"} key={idx}>
                <figure
                  className={cn(
                    "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
                    "hover:bg-gray-950/[.05]",
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
        </BorderGlow>
      </section>

      <AvailableForRoles />
    </main>
  );
}