"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getBlogBySlug, getTechIcon } from "@/lib/projects";
import { ExternalLink, Github, Computer } from "lucide-react";
import { use } from "react";
import TopBarBackground from "@/components/TopBarBackground"
import AvailableForRoles from "@/components/AvailableForRoles"

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = use(params);
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  return <BlogDetailContent blog={blog} />;
}

function BlogDetailContent({ blog }: { blog: any }) {

  return (
    <div className="pt-32 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        <TopBarBackground imageUrl={blog.image} transparency={25} />

        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-start justify-between gap-4 mb-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold font-hero mb-3">
                {blog.title}
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed max-w-3xl">
                {blog.description}
              </p>
            </div>
            {(blog.liveUrl || blog.gameUrl) && (
              <Link
                href={blog.liveUrl || blog.gameUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-sm"
              >
                Check it out
                <ExternalLink size={16} />
              </Link>
            )}
          </div>

          {/* Date and Links */}
          <div className="flex items-center gap-4 flex-wrap">
            <p className="text-sm text-gray-500">{blog.date}</p>
            {blog.githubUrl && (
              <Link
                href={blog.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
              >
                <Github size={16} />
                Source Code
              </Link>
            )}
            {blog.projectUrl && (
              <Link
                href={blog.projectUrl}
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
              >
                <Computer size={16} />
                Project Page
              </Link>
            )}
            {blog.liveUrl && (
              <Link
                href={blog.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
              >
                <ExternalLink size={16} />
                Live Demo
              </Link>
            )}
            {blog.gameUrl && (
              <Link
                href={blog.gameUrl}
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

        {/* Main Content */}
        <div className="flex gap-8 relative">
          {/* Main Content Area */}
          <div className="flex-1 space-y-12 min-w-0">
            {/* Tech Stack */}
            <section id="tech-stack">
              <h2 className="text-2xl font-bold mb-4">Tech Stack</h2>
              <div className="flex flex-wrap gap-2">
                {blog.technologies.map((tech: string) => {
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

            {/* Blog Posts */}
            <section id="blog-posts">
              <h2 className="text-2xl font-bold mb-6">Development Blog Posts</h2>
              <div className="space-y-8">
                {blog.blogPosts.map((post: any, postIndex: number) => (
                  <article
                    key={postIndex}
                    id={`post-${postIndex}`}
                    className="border-l-2 pl-6 scroll-mt-32"
                    style={{ borderColor: post.borderColor?.startsWith("#") ? post.borderColor : `#${post.borderColor}` }}
                  >
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold text-white mb-2">{post.title}</h3>
                      <p className="text-sm text-gray-400">{post.date}</p>
                    </div>
                    <div className="space-y-0">
                      {post.content.map((item: any, itemIndex: number) => {
                        const marginClass = `mb-${item.marginBottom}`;
                        const content = (
                          <>
                            {item.type === "paragraph" && (
                              <p className={`${item.link ? 'text-blue-500' : 'text-gray-300'} leading-relaxed ${marginClass}`}>
                                {item.content}
                              </p>
                            )}
                            {item.type === "bulletpoints" && (
                              <ul className={`list-disc list-inside space-y-2 ${item.link ? 'text-blue-500' : 'text-gray-300'} ${marginClass}`}>
                                {item.content.map((bullet: string, bulletIndex: number) => (
                                  <li key={bulletIndex}>{bullet}</li>
                                ))}
                              </ul>
                            )}
                            {item.type === "image" && (
                              <div className={`space-y-2 ${item.link ? 'text-blue-500' : 'text-gray-300'} ${marginClass}`}>
                                {item.content.map((imageSrc: string, imageIndex: number) => (
                                  <Image
                                    key={imageIndex}
                                    src={imageSrc}
                                    alt={`Image ${imageIndex + 1}`}
                                    width={1920}
                                    height={1080}
                                    className="rounded"
                                    unoptimized
                                  />
                                ))}
                              </div>
                            )}
                          </>
                        );

                        if (item.link) {
                          return (
                            <Link
                              key={itemIndex}
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-500 underline transition-colors"
                            >
                              {content}
                            </Link>
                          );
                        }

                        return <div key={itemIndex}>{content}</div>;
                      })}
                    </div>
                    <p className="mt-2 text-sm text-white/50 italic">
                      — Montasir
                    </p>
                  </article>
                ))}
              </div>
            </section>
          </div>

          {/* Table of Contents */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-32">
              <h3 className="text-sm font-semibold text-gray-400 uppercase mb-4">On this blog</h3>
              <nav className="space-y-2">
                {blog.blogPosts.map((post: any, postIndex: number) => (
                  <a
                    key={postIndex}
                    href={`#post-${postIndex}`}
                    className="block text-sm text-gray-400 hover:text-white transition-colors py-1"
                  >
                    {post.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>
        </div>
      </div>

      <AvailableForRoles />
    </div>
  );
}