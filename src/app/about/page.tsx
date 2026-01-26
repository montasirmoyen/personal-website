"use client";

import Link from "next/link";
import { TextAnimate } from "@/components/ui/text-animate"
import TopBarBackground from "@/components/TopBarBackground"
import TiltedCard from "@/components/TiltedCard"
import CircularGallery from '@/components/CircularGallery'
import CardFlip from "@/components/ui/card-flip"
import { Linkedin, Github } from "lucide-react";
import AvailableForRoles from "@/components/AvailableForRoles"

export default function About() {
  return (
    <div className="relative pt-48 overflow-visible">
      <TopBarBackground imageUrl="/sea-wave.jpg" transparency={30} />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Headshot */}
          <div className="mx-auto">
            <TiltedCard
              imageSrc="/montasirmoyen.png"
              altText="Author"
              containerHeight="300px"
              containerWidth="300px"
              imageHeight="300px"
              imageWidth="300px"
              rotateAmplitude={10}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent={false}
              overlayContent={
                <p className="mt-64 ml-41 bg-black/50 p-2 shadow-lg rounded">
                  Montasir Moyen
                </p>
              }
            />
          </div>

          {/* Text Content */}
          <div className="mx-auto">
            <p className="text-sm text-white/50 uppercase md:px-8 sm:px-4">
              WHO AM I?
            </p>

            <div className="mt-2 flex flex-col items-start md:px-8 sm:px-4">
              <TextAnimate
                animation="blurInUp"
                by="character"
                className="text-3xl md:text-5xl lg:text-6xl font-bold font-hero"
              >
                I'm Montasir, a
              </TextAnimate>

              <TextAnimate
                animation="slideLeft"
                by="character"
                className="text-3xl md:text-5xl lg:text-6xl font-bold font-hero 
               bg-gradient-to-r from-blue-500 to-purple-500 
               bg-clip-text text-transparent animate-gradient 
               bg-[length:200%_auto]">
                software developer.
              </TextAnimate>
            </div>

            {/* Paragraphs */}
            <div className="mt-2 space-y-4 text-base md:text-lg text-white/75 px-4 md:px-8">
              <p>
              I'm a computer science student at Suffolk University in Boston, MA.
              I enjoy building innovative software solutions.
              I've developed a strong foundation in full-stack development, working with TypeScript, JavaScript, Python, Java, C++, and C.
              </p>
              <p>
              My journey into tech started in middle school with my first computer, and I've been hooked ever since.
              In my free time, I channel my passion into creating websites, mobile apps, games, and macOS tools, since each project fuels my curiosity about the technologies behind them.
              I never get tired or bored of coding; the constant challenges and problem solving required keep me engaged.
              </p>
              <p>
              Currently studying Operating Systems, Software Engineering, and Discrete Math II this semester, while exploring AI integration and data-driven solutions after classes.
              I'm comfortable with macOS, Windows, and Linux environments since I'm experienced and flexible with these development setups.
              </p>
              <p>
              Beyond coding, you'll find me playing fútbol, listening to music, or catching up on anime.
              I strive to learn & grow as a developer and am open to collaborations and new challenges.
              </p>
              <p>
              Thanks for reading; there is much more I have to share on here, so feel free to explore!
              </p>
              <p className="text-sm text-white/50">
              Let's connect:
              </p>
            </div>

            <div className="mt-4 gap-5 flex justify-left items-left md:px-8 sm:px-4">
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
        </div>
      </div>

      <p className="mt-10 text-center text-sm text-white/50 uppercase">
        BEYOND THE CODE
      </p>
      <p className="text-center text-3xl uppercase">
        INTERESTS
      </p>

      <section className="overflow-visible w-full h-64 md:h-80 lg:h-96">
        <CircularGallery bend={2} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02} />
      </section>

      <p className="mt-10 text-center text-sm text-white/50 uppercase">
        THE JOURNEY SO FAR
      </p>
      <p className="text-center text-3xl uppercase">
        Experience
      </p>

      <section className="gap-10 flex flex-col md:flex-row justify-center items-center py-12 px-4">
        <CardFlip
          title="SWE Intern @ Boston Airport Cab"
          subtitle="Dec 2025 - Jan 2026"
          description="Boston, MA, USA - Hybrid - Software Engineering Intern"
          features={[
            "Programmed and assisted in the full-stack development of their new and upcoming website",
            "Consulted internal software improvements to support web traffic from Boston Airport Cab’s 5M+ annual riders",
            "Conducted quality assurance testing to minimize bugs across 50+ daily reservation requests"
          ]}
          image="/bac.png"
        />

        <CardFlip
          title="SWE Intern @ CollegiateX"
          subtitle="Sep 2025 - Nov 2025"
          description="Boston, MA, USA - Hybrid - Software Engineering Intern"
          features={[
            "Built the mobile app version of CollegiateX’s platform for NCAA D1, D2 & D3 athletes and enterprise sponsors",
            "Implemented backend systems for user authentication, database architecture, and secure payment processing",
            "Collaborated on frontend development of the athlete and brand portals, including login/signup flows",
            "Conducted QA testing across the stack to ensure performance, security, and usability for high-traffic cases"
          ]}
          image="/cx.png"
        />
      </section>

      <p className="mt-2 text-center text-sm text-white/50 uppercase">
        THE BUILDING BLOCKS
      </p>
      <p className="text-center text-3xl uppercase">
        Education
      </p>

      <section className="gap-10 flex flex-col md:flex-row justify-center items-center py-12 px-4">
        <CardFlip
          title="Suffolk University"
          subtitle="Aug 2023 - Anticipated May 2027"
          description="Boston, MA, USA"
          features={[
            "Relevant Coursework:",
            "Data Structures & Algorithms",
            "Object Oriented Programming",
            "Architecture of Computer Systems",
            "Operating Systems"
          ]}
          image="/su.png"
        />

        <CardFlip
          title="Medford High School"
          subtitle="Aug 2019 - May 2023"
          description="Medford, MA, USA"
          features={[
            "Relevant Coursework:",
            "AP Computer Science Principles",
            "AP Computer Science (Java)",
            "CMU CS Academy (Python)"
          ]}
          image="/mhs.png"
        />
      </section>

      <AvailableForRoles />
    </div>
  );
}

