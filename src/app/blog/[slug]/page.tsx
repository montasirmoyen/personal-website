"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { blogs, getBlogBySlug } from "@/lib/projects";
import { ArrowLeft, ArrowRight, ExternalLink, Github, Computer, Hammer } from "lucide-react";
import { use } from "react";
import TopBarBackground from "@/components/TopBarBackground"
import AvailableForRoles from "@/components/AvailableForRoles"
import { Separator } from "@/components/ui/separator";
import TechStack from "@/components/TechStack";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { AvatarGroup, AvatarGroupTooltip } from "@/components/animate-ui/components/animate/avatar-group";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/animate-ui/components/animate/avatar";

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = use(params);
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const currentIndex = blogs.findIndex((item) => item.slug === blog.slug);
  const previousBlog = currentIndex > 0 ? blogs[currentIndex - 1] : null;
  const nextBlog = currentIndex >= 0 && currentIndex < blogs.length - 1 ? blogs[currentIndex + 1] : null;

  return (
    <BlogDetailContent
      blog={blog}
      previousBlog={previousBlog}
      nextBlog={nextBlog}
    />
  );
}

function BlogDetailContent({
  blog,
  previousBlog,
  nextBlog,
}: {
  blog: any;
  previousBlog: any | null;
  nextBlog: any | null;
}) {

  return (
    <div className="pt-32 px-4 md:px-6">
      <div className="max-w-5xl mx-auto mb-24">
        <TopBarBackground imageUrl={blog.image} transparency={25} />

        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/15 bg-black/40 text-sm text-gray-200 hover:text-white hover:border-white/35 hover:bg-white/10 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>
        </div>

        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-start justify-between gap-4 mb-2">
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
                Visit {blog.liveUrl ? "Live Demo" : "Game"}
                <ExternalLink size={16} />
              </Link>
            )}
          </div>

          {/* Collaborators */}
          {blog.collaborators && blog.collaborators.length > 0 && (
            <div className="flex items-center gap-2 mb-4">
              <Hammer size={16} className="text-gray-400" />
              <p className="text-sm text-gray-400">
                by
              </p>
              <AvatarGroup>
                {blog.collaborators?.map((avatar: { name: string; avatarImgUrl?: string }, index: number) => (
                  <Avatar key={index} className="border-black border-2">
                    <AvatarImage src={avatar.avatarImgUrl} />
                    <AvatarFallback>{avatar.name[0]}</AvatarFallback>
                    <AvatarGroupTooltip>{avatar.name}</AvatarGroupTooltip>
                  </Avatar>
                ))}
              </AvatarGroup>
            </div>
          )}

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
            <section id="tech-stack">
              <h2 className="text-2xl font-bold mb-4">Tech Stack</h2>
              <TechStack technologies={blog.technologies} />
            </section>

            {/* Blog Posts */}
            <section id="blog-posts">
              <h2 className="text-2xl font-bold mb-6">Development Blog Posts</h2>
              <div className="space-y-12">
                {blog.blogPosts.map((post: any, postIndex: number) => (
                  <div key={postIndex}>
                    <article
                      id={`post-${postIndex}`}
                      className="border-l-2 pl-6 scroll-mt-32"
                      style={{ borderColor: post.borderColor?.startsWith("#") ? post.borderColor : `#${post.borderColor}` }}
                    >
                      <div className="mb-2">
                        <h3 className="text-xl font-semibold text-white mb-2">{post.title}</h3>
                        <p className="text-sm text-gray-400">{post.date}</p>
                      </div>
                      <div className="space-y-0 leading-relaxed tracking-wide text-balance">
                        {post.content.map((item: any, itemIndex: number) => {
                          const marginBottom = item.marginBottom || 4;
                          const imageScale = item.scale || 1;
                          const marginClass = `mb-${marginBottom}`;
                          const content = (
                            <>
                              {item.type === "paragraph" && (
                                <p className={`${item.link ? 'text-blue-500' : 'text-gray'} ${marginClass}`}>
                                  {item.content}
                                </p>
                              )}
                              {item.type === "bulletpoints" && (
                                <ul className={`space-y-2 ${item.link ? 'text-blue-500' : 'text-gray'} ${marginClass}`}>
                                  {item.content.map((bullet: string, bulletIndex: number) => (
                                    <li key={bulletIndex} className="flex items-start gap-3">
                                      <span
                                        style={{ color: post.borderColor?.startsWith("#") ? post.borderColor : `#${post.borderColor}` }}
                                        className="font-bold">❖</span>
                                      <span>{bullet}</span>
                                    </li>
                                  ))}
                                </ul>
                              )}
                              {item.type === "image" && (
                                <div className={`space-y-2 ${item.link ? 'text-blue-500' : 'text-gray'} ${marginClass}`}>
                                  {item.content.map((imageSrc: string, imageIndex: number) => (
                                    <Image
                                      key={imageIndex}
                                      src={imageSrc}
                                      alt={`Image ${imageIndex + 1}`}
                                      width={1920 * imageScale}
                                      height={1080 * imageScale}
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

                    <Separator className="mt-12 bg-white/25" />
                  </div>
                ))}
              </div>

              <section id="more">
                {(previousBlog || nextBlog) && (
                  <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {previousBlog ? (
                      <HoverCard openDelay={10} closeDelay={100}>
                        <HoverCardTrigger asChild>
                          <Link
                            href={`/blog/${previousBlog.slug}`}
                            className="group rounded-xl border border-white/15 bg-linear-to-br from-white/8 to-white/3 p-4 hover:border-white/35 hover:from-white/12 hover:to-white/6 transition-all"
                          >
                            <div className="flex items-start justify-between gap-3">
                              <span className="mt-1 rounded-full border border-white/20 p-1.5 text-gray-200 group-hover:text-white group-hover:border-white/40 transition-colors">
                                <ArrowLeft size={16} />
                              </span>
                              <div className="text-right">
                                <p className="text-xs uppercase tracking-[0.2em] text-yellow-300/90 mb-1">Previous</p>
                                <p className="text-base font-semibold text-white leading-tight">{previousBlog.title}</p>
                                <p className="text-sm text-gray-400 mt-1">{previousBlog.date}</p>
                              </div>
                            </div>
                          </Link>
                        </HoverCardTrigger>
                        <HoverCardContent side="left" sideOffset={30} className="flex w-64 flex-col gap-0.5">
                          {previousBlog.image && (
                            <Image
                              src={previousBlog.image}
                              alt={previousBlog.title}
                              width={256}
                              height={144}
                              className="rounded-md mb-2 w-full object-cover"
                              unoptimized
                            />
                          )}
                          <div className="font-semibold text-white">{previousBlog.title}</div>
                          <div className="text-sm text-gray-300">{previousBlog.description}</div>
                          <div className="text-xs text-gray-400 mt-2">{previousBlog.date}</div>
                        </HoverCardContent>
                      </HoverCard>
                    ) : (
                      <div className="rounded-xl border border-dashed border-white/10 p-4 text-sm text-gray-500">
                        <div className="text-right">
                          <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-1">End</p>
                          <p className="text-base font-semibold text-white leading-tight">Latest</p>
                          <p className="text-sm text-gray-400 mt-1">You are on the latest blog</p>
                        </div>
                      </div>
                    )}

                    {nextBlog ? (
                      <HoverCard openDelay={10} closeDelay={100}>
                        <HoverCardTrigger asChild>
                          <Link
                            href={`/blog/${nextBlog.slug}`}
                            className="group rounded-xl border border-white/15 bg-linear-to-br from-white/8 to-white/3 p-4 hover:border-white/35 hover:from-white/12 hover:to-white/6 transition-all"
                          >
                            <div className="flex items-start justify-between gap-3">
                              <div>
                                <p className="text-xs uppercase tracking-[0.2em] text-emerald-300/90 mb-1">Next</p>
                                <p className="text-base font-semibold text-white leading-tight">{nextBlog.title}</p>
                                <p className="text-sm text-gray-400 mt-1">{nextBlog.date}</p>
                              </div>
                              <span className="mt-1 rounded-full border border-white/20 p-1.5 text-gray-200 group-hover:text-white group-hover:border-white/40 transition-colors">
                                <ArrowRight size={16} />
                              </span>
                            </div>
                          </Link>
                        </HoverCardTrigger>
                        <HoverCardContent side="right" sideOffset={30} className="flex w-64 flex-col gap-0.5">
                          {nextBlog.image && (
                            <Image
                              src={nextBlog.image}
                              alt={nextBlog.title}
                              width={256}
                              height={144}
                              className="rounded-md mb-2 w-full object-cover"
                              unoptimized
                            />
                          )}
                          <div className="font-semibold text-white">{nextBlog.title}</div>
                          <div className="text-sm text-gray-300">{nextBlog.description}</div>
                          <div className="text-xs text-gray-400 mt-2">{nextBlog.date}</div>
                        </HoverCardContent>
                      </HoverCard>
                    ) : (
                      <div className="rounded-xl border border-dashed border-white/10 p-4 text-sm text-gray-500">
                        <div className="text-right">
                          <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-1">End</p>
                          <p className="text-base font-semibold text-white leading-tight">Oldest</p>
                          <p className="text-sm text-gray-400 mt-1">You are on the oldest blog</p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </section>
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
                <a
                  href="#more"
                  className="block text-sm text-gray-400 hover:text-white transition-colors py-1"
                >
                  More Blogs
                </a>
              </nav>
            </div>
          </aside>
        </div>
      </div>

      <AvailableForRoles />
    </div>
  );
}