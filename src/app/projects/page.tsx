"use client";

import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectsPage() {
  return (
    <div className="pt-32 pb-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="text-sm text-gray-400 uppercase tracking-wider mb-2">
            Featured Case Studies
          </p>
          <h1 className="text-5xl md:text-6xl font-bold font-hero">
            Curated <span className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">work</span>
          </h1>
        </div>

        {/* Projects List */}
        <div className="space-y-24 md:space-y-32">
          {projects.map((project, index) => (
            <div
              key={project.slug}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
            >
              {/* Image - Left Side */}
              <Link href={`/projects/${project.slug}`} className="group">
                <div className="relative aspect-video rounded-lg overflow-hidden border border-white/10 hover:border-white/20 transition-all">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Link>

              {/* Content - Right Side */}
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-400 uppercase tracking-wider mb-2">
                    {project.category}
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold font-hero mb-3">
                    {project.title}
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-2">
                  {project.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300">
                      <span className="text-green-500 mt-1.5">•</span>
                      <span className="text-sm leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
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
    </div>
  );
}

