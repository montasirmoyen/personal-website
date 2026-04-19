"use client";

import Link from "next/link";
import Image from "next/image";

import type { CSSProperties, JSX } from "react";

import { Bot, Zap, Handshake, Leaf, Star } from "lucide-react";

import { blogs } from "@/lib/projects";
import { getTechIcon } from "@/lib/projects";

import AvailableForRoles from "@/components/ui/available-for-roles";
import TopBarBackground from "@/components/ui/topbar-bg";
import { Separator } from "@/components/ui/separator";
import { BackgroundGradient } from "@/components/ui/background-gradient"
import { Badge } from "@/components/ui/badge";
import { TextAnimate } from "@/components/ui/text-animate"
import TitleMark from "@/components/ui/title-mark";

type BlogSectionKey = "classic" | "challenge" | "collaboration" | "mini";

const sectionLabels: Record<BlogSectionKey, string> = {
    classic: "Classic",
    challenge: "Challenge",
    collaboration: "Collaboration",
    mini: "Mini",
};

const sectionDesc: Record<BlogSectionKey, string> = {
    classic: "More long term projects that are meant to be polished and comprehensive",
    challenge: "Done as part of a challenge, usually with a time constraint",
    collaboration: "Developed in collaboration with others",
    mini: "Smaller projects that are more experimental",
};

const sectionIcon: Record<BlogSectionKey, JSX.Element> = {
    classic: <Bot />,
    challenge: <Zap />,
    collaboration: <Handshake />,
    mini: <Leaf />,
};

const sectionOrder: BlogSectionKey[] = ["classic", "challenge", "collaboration", "mini"];

function getBlogSection(blog: (typeof blogs)[number]): BlogSectionKey {
    if (blog.mini) return "mini";
    if (blog.challenge) return "challenge";
    if (blog.collab) return "collaboration";
    return "classic";
}

function BlogCard({ blog }: { blog: (typeof blogs)[number] }) {
    const typeBadges = [
        blog.challenge ? { label: "Challenge", className: "border-orange-500/70 bg-orange-500/15 text-orange-100" } : null,
        blog.collab ? { label: "Collaboration", className: "border-blue-500/70 bg-blue-500/15 text-blue-100" } : null,
        blog.mini ? { label: "Mini", className: "border-emerald-500/70 bg-emerald-500/15 text-emerald-100" } : null,
    ].filter(Boolean) as { label: string; className: string }[];

    const cardStyle = {
        "--blog-border": blog.primaryColor ? `${blog.primaryColor}66` : "rgb(255 255 255 / 0.12)",
        "--blog-border-hover": blog.primaryColor ? `${blog.primaryColor}aa` : "rgb(255 255 255 / 0.25)",
    } as CSSProperties;

    return (
        <Link
            key={blog.slug}
            href={`/blog/${blog.slug}`}
            className="group block h-full"
        >
            <article
                style={cardStyle}
                className="h-full overflow-hidden rounded-2xl border border-(--blog-border) bg-linear-to-b from-white/7 to-white/3 shadow-[0_10px_35px_-20px_rgba(0,0,0,0.9)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1 group-hover:border-(--blog-border-hover)"
            >
                <div className="relative aspect-video overflow-hidden">
                    <Image
                        src={blog.image}
                        alt={blog.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                        unoptimized
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/25 to-transparent" />

                    <div className="absolute left-4 right-4 top-4 flex items-start justify-between gap-3">
                        <Badge
                            variant="outline"
                            className="border-white/25 bg-black/45 text-white backdrop-blur-md"
                        >
                            {blog.status === "in-progress" ? "In Progress" : "Completed"}
                        </Badge>

                        <Badge
                            variant="outline"
                            className="border-white/20 bg-black/35 text-white/90 backdrop-blur-md"
                        >
                            {blog.category}
                        </Badge>
                    </div>

                    <div className="absolute inset-x-4 bottom-4">
                        <p className="text-sm text-white/70">{blog.date}</p>
                    </div>
                </div>

                <div className="p-6 md:p-7">
                    <div className="mb-3 flex flex-wrap gap-2">
                        {typeBadges.map((badge) => (
                            <Badge
                                key={badge.label}
                                variant="outline"
                                className={badge.className}
                            >
                                {badge.label}
                            </Badge>
                        ))}
                    </div>

                    <div className="mb-3 flex items-center gap-2.5">
                        <TitleMark
                            logo={blog.logo}
                            title={blog.title}
                            icon={blog.icon}
                            iconClassName={blog.iconClassName}
                            size="card"
                        />
                        <h2 className="text-2xl font-hero font-bold tracking-tight text-white transition-colors duration-300">
                            {blog.title}
                        </h2>
                    </div>

                    <p className="mb-5 line-clamp-3 text-sm leading-relaxed text-gray-300/95">
                        {blog.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-1">
                        {blog.technologies.map((tech) => {
                            const iconPath = getTechIcon(tech);
                            return (
                                <span
                                    key={tech}
                                    className="flex items-center gap-1.5 rounded-full border border-white/12 bg-white/6 px-3 py-1 text-xs text-gray-200/90 transition-colors duration-300 group-hover:border-white/20"
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
                </div>
            </article>
        </Link>
    );
}

export default function BlogPage() {
    const groupedBlogs = blogs.reduce<Record<BlogSectionKey, (typeof blogs)[number][]>>(
        (acc, blog) => {
            acc[getBlogSection(blog)].push(blog);
            return acc;
        },
        { classic: [], collaboration: [], challenge: [], mini: [] }
    );

    return (
        <div className="pt-32 px-4 md:px-6">
            <TopBarBackground transparency={10} imageUrl="cones.jpeg" />
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-10">
                    <p className="text-sm text-white/50 uppercase mb-2">
                        FEATURED WRITING & INSIGHTS
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
                            once
                            by="character"
                                     className="text-5xl md:text-6xl font-bold font-hero 
                                         bg-linear-to-r from-blue-500 to-purple-500 
                               bg-clip-text text-transparent animate-gradient 
                                         bg-size-[200%_auto]">
                            narratives
                        </TextAnimate>
                    </div>
                </div>

                {/* Hero */}
                {(() => {
                    const heroBlog = blogs.find((b) => b.heroBlog);
                    if (!heroBlog) return null;
                    return (
                        <div className="mb-16">
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-2">
                                    <Star className="text-blue-600" />
                                    <h2 className="text-2xl md:text-3xl font-hero font-bold text-white">
                                        Highlight
                                    </h2>
                                    <Badge
                                        variant="outline"
                                        className="border-white/20 bg-black/40 text-white"
                                    >
                                        Editor's Pick
                                    </Badge>
                                </div>
                            </div>
                            <p className="text-sm text-gray-400">
                                Featured project I returned to
                            </p>
                            <Separator className="mt-6 mb-8" />
                            <BackgroundGradient colors={["#2e3ffa", "#1d46fd"]}>
                                <Link href={`/blog/${heroBlog.slug}`} className="group block">
                                    <div className="rounded-3xl overflow-hidden">
                                        <div className="relative w-full aspect-21/9 overflow-hidden">
                                            <Image
                                                src={heroBlog.image}
                                                alt={heroBlog.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                unoptimized
                                            />
                                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/80 to-transparent" />
                                            <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent" />
                                            <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                                                <div className="flex flex-wrap gap-2 mb-4">
                                                    {heroBlog.challenge && (
                                                        <Badge variant="outline" className="border-orange-500 bg-orange-500/20 backdrop-blur-sm">Challenge</Badge>
                                                    )}
                                                    {heroBlog.collab && (
                                                        <Badge variant="outline" className="border-blue-500 bg-blue-500/20 backdrop-blur-sm">Collaboration</Badge>
                                                    )}
                                                    {heroBlog.mini && (
                                                        <Badge variant="outline" className="border-emerald-500 bg-emerald-500/20 backdrop-blur-sm">Mini</Badge>
                                                    )}
                                                    <Badge variant="outline" className="border-white/20 bg-black/40 text-white backdrop-blur-sm">
                                                        {heroBlog.status === "in-progress" ? "In Progress" : "Completed"}
                                                    </Badge>
                                                </div>
                                                <p className="text-sm text-gray-400 mb-2">{heroBlog.category}</p>
                                                <div className="mb-3 flex items-center gap-3">
                                                    <TitleMark
                                                        logo={heroBlog.logo}
                                                        title={heroBlog.title}
                                                        icon={heroBlog.icon}
                                                        iconClassName={heroBlog.iconClassName}
                                                        size="hero"
                                                    />
                                                    <h2 className="text-3xl md:text-5xl font-hero font-bold text-white">
                                                        {heroBlog.title}
                                                    </h2>
                                                </div>
                                                <p className="text-gray-300 text-base md:text-lg max-w-2xl mb-4">
                                                    {heroBlog.description}
                                                </p>
                                                <div className="flex flex-wrap gap-2">
                                                    {heroBlog.technologies.map((tech) => {
                                                        const iconPath = getTechIcon(tech);
                                                        return (
                                                            <span
                                                                key={tech}
                                                                className="px-3 py-1 text-xs rounded-full bg-white/10 border border-white/15 text-gray-300 flex items-center gap-1.5 backdrop-blur-sm"
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
                                                <p className="mt-4 text-sm text-gray-400">{heroBlog.date}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </BackgroundGradient>
                        </div>
                    );
                })()}

                {/* Sections */}
                {sectionOrder.map((sectionKey) => {
                    const sectionBlogs = groupedBlogs[sectionKey];

                    return (
                        <section key={sectionKey} className="mb-16">
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-2">
                                    {sectionIcon[sectionKey]}
                                    <h2 className="text-2xl md:text-3xl font-hero font-bold text-white">
                                        {sectionLabels[sectionKey]}
                                    </h2>
                                    <Badge
                                        variant="outline"
                                        className="border-white/20 bg-black/40 text-white"
                                    >
                                        {sectionBlogs.length}
                                    </Badge>
                                </div>
                            </div>
                            <p className="text-sm text-gray-400">
                                {sectionDesc[sectionKey]}
                            </p>

                            <Separator className="mt-6 mb-8" />

                            {sectionBlogs.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {sectionBlogs.map((blog) => (
                                        <BlogCard key={blog.slug} blog={blog} />
                                    ))}
                                </div>
                            ) : (
                                <p className="text-sm text-white/55">
                                    No posts in this section yet.
                                </p>
                            )}
                        </section>
                    );
                })}
            </div>

            <AvailableForRoles />
        </div>
    );
}