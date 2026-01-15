"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getProjectBySlug, getTechIcon } from "@/lib/projects";
import { ExternalLink, Github } from "lucide-react";
import { use } from "react";
import TopBarBackground from "@/components/TopBarBackground"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/animate-ui/components/radix/accordion';
import AvailableForRoles from "@/components/AvailableForRoles"

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

  return (
    <div className="pt-32 px-4 md:px-6">
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
            {(project.liveUrl || project.gameUrl) && (
              <Link
                href={project.liveUrl || project.gameUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-sm"
              >
                Check it out
                <ExternalLink size={16} />
              </Link>
            )}
          </div>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech: string) => {
              const iconPath = getTechIcon(tech);
              return (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm rounded-full bg-white/5 border border-white/10 text-gray-300 flex items-center gap-1.5"
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

         <div className="lg:col-span-2 space-y-12">
            {/* Overview or Blog Posts */}
            {project.blogPosts ? (
              <section id="blog-posts">
                <h2 className="text-2xl font-bold mb-6">Blog Posts</h2>
                <div className="space-y-8">
                  {project.blogPosts.map((post: any, postIndex: number) => (
                    <article key={postIndex} className="border-l-2 border-blue-500 pl-6">
                      <div className="mb-4">
                        <h3 className="text-xl font-semibold text-white mb-2">{post.title}</h3>
                        <p className="text-sm text-gray-400">{post.date}</p>
                      </div>
                      <div className="space-y-0">
                        {post.content.map((item: any, itemIndex: number) => {
                          const marginClass = `mb-${item.marginBottom}`;
                          if (item.type === "paragraph") {
                            return (
                              <p
                                key={itemIndex}
                                className={`text-gray-300 leading-relaxed ${marginClass}`}
                              >
                                {item.content}
                              </p>
                            );
                          } else if (item.type === "bulletpoints") {
                            return (
                              <ul
                                key={itemIndex}
                                className={`list-disc list-inside space-y-2 text-gray-300 ${marginClass}`}
                              >
                                {item.content.map((bullet: string, bulletIndex: number) => (
                                  <li key={bulletIndex}>{bullet}</li>
                                ))}
                              </ul>
                            );
                          }
                          return null;
                        })}
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ) : (
              <section id="overview">
                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                <p className="text-gray-300 leading-relaxed">{project.overview}</p>
              </section>
            )}

            {/* Key Features */}
            {project.keyFeatures && (
              <section id="key-features">
                <h2 className="text-2xl font-bold mb-6">Key Features</h2>
                <Accordion type="multiple">
                  {project.keyFeatures.map((feature: any, index: number) => (
                    <AccordionItem
                      key={index}
                      value={`feature-${index}`}
                      className="border-b border-white/10 overflow-hidden"
                    >
                      <AccordionTrigger
                        className="w-full flex items-center
                         justify-between p-4 
                      hover:bg-white/5 transition-colors text-left">
                        <h3 className="font-semibold text-white">{feature.title}</h3>
                      </AccordionTrigger>
                      <AccordionContent className="p-4 border-t border-white/10">
                        <p className="text-gray-300 leading-relaxed">
                          {feature.description}
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>
            )}

            {/* Tech Stack */}
            <section id="tech-stack">
              <h2 className="text-2xl font-bold mb-4">Tech Stack</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech: string) => {
                  const iconPath = getTechIcon(tech);
                  return (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm rounded-full bg-white/5 border border-white/10 text-gray-300 flex items-center gap-1.5"
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
            </section>

            {/* Challenges & Learnings */}
            {project.challenges && (
              <section id="challenges">
                <h2 className="text-2xl font-bold mb-6">Challenges & Learnings</h2>
                <div className="space-y-6">
                  {project.challenges.map((challenge: any, index: number) => (
                    <div key={index} className="border-l-2 border-yellow-500 pl-4">
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
            )}

            {/* Outcome */}
            {project.outcome && (
              <section id="outcome">
                <h2 className="text-2xl font-bold mb-4">Outcome</h2>
                <p className="text-gray-300 leading-relaxed">{project.outcome}</p>
              </section>
            )}
          </div>
      </div>

      <AvailableForRoles />
    </div>
  );
}