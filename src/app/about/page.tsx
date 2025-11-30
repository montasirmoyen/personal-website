"use client";

import Image from "next/image";
import Link from "next/link";
import { TextAnimate } from "@/components/ui/text-animate"
import TopBarBackground from "@/components/TopBarBackground"

export default function About() {
  return (
    <div className="relative pt-48 pb-16 px-4 md:px-6">
      <TopBarBackground imageUrl="/sea-wave.jpg" transparency={30} />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-2">
            {/* Small Heading */}
            <p className="text-sm text-white/50 uppercase tracking-wider">
              More About Myself
            </p>

            <div className="flex flex-wrap items-baseline">
              <TextAnimate
                animation="blurInUp"
                by="character"
                className="text-5xl md:text-6xl font-bold leading-tight font-hero"
              >
                I'm Montasir, a
              </TextAnimate>

              <TextAnimate
                animation="slideLeft"
                by="character"
                className="text-5xl md:text-6xl font-bold leading-tight font-hero 
               bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 
               bg-clip-text text-transparent animate-gradient 
               bg-[length:200%_auto]">
                software developer.
              </TextAnimate>
            </div>

            {/* Paragraphs */}
            <div className="space-y-4 text-lg text-white/75 leading-relaxed">
              <p>
                I also go by Monty. I'm currently studying Computer Science at Suffolk University in Boston, Massachusetts.
              </p>
              <p>
                My fascination with technology began in middle school, when I got my very first computer from my parents.
              </p>
              <p>
                Nowadays, I spend a lot of time learning and building things like websites, video games, macOS tools, and mobile apps. Most of my projects are inspired by personal interests and a curiosity to dive deeper into the technologies behind them.
              </p>
              <p>
                Above all, I'm always looking for ways to learn, grow, and improve my skills further. Feel free to explore my site and learn more about myself!
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-2">
              <Link
                href="https://linkedin.com/in/montasirmoyen"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-transparent hover:bg-white/5 transition-colors"
                aria-label="LinkedIn"
              >
                <Image
                  src="/linkedin.png"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                  className="opacity-80 hover:opacity-100 transition-opacity"
                />
              </Link>
              <Link
                href="https://github.com/montasirmoyen"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-transparent hover:bg-white/5 transition-colors"
                aria-label="GitHub"
              >
                <Image
                  src="/github.png"
                  alt="GitHub"
                  width={24}
                  height={24}
                  className="opacity-80 hover:opacity-100 transition-opacity"
                />
              </Link>
              <Link
                href="https://twitter.com/montasirmoyen"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-transparent hover:bg-white/5 transition-colors"
                aria-label="Twitter"
              >
                <svg
                  className="w-5 h-5 text-white opacity-80 hover:opacity-100 transition-opacity"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* TODO: Image carousel */}
        </div>
      </div>
    </div>
  );
}

