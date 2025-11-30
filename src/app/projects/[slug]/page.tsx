"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getProjectBySlug } from "@/lib/projects";
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react";
import { use, useState } from "react";
import TopBarBackground from "@/components/TopBarBackground"

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = use(params);
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailContent project={project} />;
}

function ProjectDetailContent({ project }: { project: any }) {
  const [expandedFeatures, setExpandedFeatures] = useState<number[]>([]);

  const toggleFeature = (index: number) => {
    setExpandedFeatures((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="pt-32 pb-24 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        <TopBarBackground imageUrl={project.image} />

        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-start justify-between gap-4 mb-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold font-hero mb-3">
                {project.title}
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed max-w-3xl">
                {project.description}
              </p>
            </div>
            <Link
              href={project.liveUrl || project.gameUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-sm"
            >
              Check it out
              <ExternalLink size={16} />
            </Link>
          </div>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech: string) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Date and Links */}
          <div className="flex items-center gap-4 flex-wrap">
            <p className="text-sm text-gray-500">{project.date}</p>
            {project.githubUrl && (
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
              >
                <Github size={16} />
                Source Code
              </Link>
            )}
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
              >
                <ExternalLink size={16} />
                Live Demo
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
          </div>
        </div>

        {/* Project Image */}
        <div className="mb-16 rounded-lg overflow-hidden border border-white/10">
          <div className="relative aspect-video">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </div>

        {/* Content Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <section id="overview">
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-gray-300 leading-relaxed">{project.overview}</p>
            </section>

            {/* Key Features */}
            <section id="key-features">
              <h2 className="text-2xl font-bold mb-6">Key Features</h2>
              <div className="space-y-4">
                {project.keyFeatures.map((feature: any, index: number) => (
                  <div
                    key={index}
                    className="border border-white/10 rounded-lg overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFeature(index)}
                      className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors text-left"
                    >
                      <h3 className="font-semibold text-white">{feature.title}</h3>
                      {expandedFeatures.includes(index) ? (
                        <ChevronUp size={20} className="text-gray-400" />
                      ) : (
                        <ChevronDown size={20} className="text-gray-400" />
                      )}
                    </button>
                    {expandedFeatures.includes(index) && (
                      <div className="p-4 pt-0 border-t border-white/10">
                        <p className="text-gray-300 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Tech Stack */}
            <section id="tech-stack">
              <h2 className="text-2xl font-bold mb-4">Tech Stack</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech: string) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm rounded-full bg-white/5 border border-white/10 text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* Challenges & Learnings */}
            <section id="challenges">
              <h2 className="text-2xl font-bold mb-6">Challenges & Learnings</h2>
              <div className="space-y-6">
                {project.challenges.map((challenge: any, index: number) => (
                  <div key={index} className="border-l-2 border-green-500 pl-4">
                    <h3 className="font-semibold text-white mb-2">
                      {challenge.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {challenge.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Outcome */}
            <section id="outcome">
              <h2 className="text-2xl font-bold mb-4">Outcome</h2>
              <p className="text-gray-300 leading-relaxed">{project.outcome}</p>
            </section>
          </div>

          {/* Sidebar - Table of Contents */}
          <div className="lg:col-span-1">
            <div className="sticky top-32">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                On this page
              </h3>
              <nav className="space-y-2">
                <a
                  href="#overview"
                  className="block text-sm text-gray-300 hover:text-white transition-colors py-1 scroll-smooth"
                >
                  Overview
                </a>
                <a
                  href="#key-features"
                  className="block text-sm text-gray-300 hover:text-white transition-colors py-1 scroll-smooth"
                >
                  Key Features
                </a>
                <a
                  href="#tech-stack"
                  className="block text-sm text-gray-300 hover:text-white transition-colors py-1 scroll-smooth"
                >
                  Tech Stack
                </a>
                <a
                  href="#challenges"
                  className="block text-sm text-gray-300 hover:text-white transition-colors py-1 scroll-smooth"
                >
                  Challenges & Learnings
                </a>
                <a
                  href="#outcome"
                  className="block text-sm text-gray-300 hover:text-white transition-colors py-1 scroll-smooth"
                >
                  Outcome
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

