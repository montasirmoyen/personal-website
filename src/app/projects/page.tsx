"use client";

import Image from "next/image";
import Link from "next/link";
import { projects, getTechIcon } from "@/lib/projects";
import { ExternalLink, Github } from "lucide-react";
import TopBarBackground from "@/components/TopBarBackground";
import { TextAnimate } from "@/components/ui/text-animate"
import { BackgroundGradient } from "@/components/ui/background-gradient"
import AvailableForRoles from "@/components/AvailableForRoles"

export default function ProjectsPage() {
  return (
    <div className="pt-32 px-4 md:px-6">
      <TopBarBackground transparency={25} imageUrl="dark-wapper.jpg" />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-2">
          <p className="text-sm text-white/50 uppercase mb-2">
            FEATURED PROJECT RESEARCH
          </p>
          <div className="flex flex-col items-start">
            <TextAnimate
              animation="blurInUp"
              by="character"
              className="text-5xl md:text-6xl font-bold font-hero"
            >
              Curated project
            </TextAnimate>

            <TextAnimate
              animation="slideLeft"
              by="character"
              className="text-5xl md:text-6xl font-bold font-hero 
               bg-gradient-to-r from-blue-500 to-purple-500 
               bg-clip-text text-transparent animate-gradient 
               bg-[length:200%_auto]">
              showcase.
            </TextAnimate>
          </div>
        </div>

        {/* Projects List */}
        <div className="mt-12 space-y-10 md:space-y-20">
          {projects.map((project, index) => (
            <div
              key={project.slug}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
            >
              {/* Image - Left Side */}
              <BackgroundGradient>
                <Link href={`/projects/${project.slug}`}
                  className="group">
                  <div className="aspect-video overflow-hidden transition-all">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="rounded-3xl object-cover"
                      unoptimized
                    />
                  </div>
                </Link>
              </BackgroundGradient>

              {/* Content - Right Side */}
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-400 uppercase mb-2">
                    {project.category}
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold mb-3">
                    {project.title}
                  </h2>
                  <p className="text-gray-300">
                    {project.description}
                  </p>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-2">
                  {project.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300">
                      <span className="">•</span>
                      <span className="text-sm">{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech) => {
                    const iconPath = getTechIcon(tech);
                    return (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-gray-300 flex items-center gap-1.5"
                      >
                        {iconPath && (
                          <Image
                            src={iconPath}
                            alt={tech}
                            width={14}
                            height={14}
                            className="object-contain"
                            unoptimized
                          />
                        )}
                        {tech}
                      </span>
                    );
                  })}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 pt-2">
                  {project.liveUrl && (
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      <ExternalLink size={16} />
                      Visit Website
                    </Link>
                  )}
                  {project.gameUrl && (
                    <Link
                      href={project.gameUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      <ExternalLink size={16} />
                      View Game
                    </Link>
                  )}
                  {project.githubUrl && (
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      <Github size={16} />
                      View Source Code
                    </Link>
                  )}
                </div>

                {/* Date */}
                <p className="text-xs text-gray-500 pt-2">
                  {project.date}
                  {project.status === "in-progress" && (
                    <span className="ml-2 px-2 py-0.5 rounded bg-yellow-500/20 text-yellow-500">
                      Work In Progress
                    </span>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AvailableForRoles/>
    </div>
  );
}