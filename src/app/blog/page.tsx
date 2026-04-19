"use client";

import Link from "next/link";
import Image from "next/image";

import { useState, type CSSProperties } from "react";

import { Bot, BookOpen, Star } from "lucide-react";

import { blogs } from "@/lib/projects";
import { getTechIcon } from "@/lib/projects";

import AvailableForRoles from "@/components/ui/available-for-roles";
import TopBarBackground from "@/components/ui/topbar-bg";
import { Separator } from "@/components/ui/separator";
import { BackgroundGradient } from "@/components/ui/background-gradient"
import { Badge } from "@/components/ui/badge";
import { TextAnimate } from "@/components/ui/text-animate"
import TitleMark from "@/components/ui/title-mark";
import { Button } from "@/components/ui/button";

function BlogCard({ blog }: { blog: (typeof blogs)[number] }) {
    const isDevLog = !blog.writingType || blog.writingType === "devlog";

    const typeBadges = isDevLog
        ? [
            blog.challenge ? { label: "Challenge", className: "border-orange-500/70 bg-orange-500/15 text-orange-100" } : null,
            blog.collab ? { label: "Collaboration", className: "border-blue-500/70 bg-blue-500/15 text-blue-100" } : null,
            blog.mini ? { label: "Mini", className: "border-emerald-500/70 bg-emerald-500/15 text-emerald-100" } : null,
        ].filter(Boolean) as { label: string; className: string }[]
        : [];

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

                    <div className="absolute left-3 right-3 top-3 flex items-start justify-between gap-2 sm:left-4 sm:right-4 sm:top-4 sm:gap-3">
                        {blog.status && (
                            <Badge variant="outline" className="border-white/20 bg-black/40 text-[10px] text-white backdrop-blur-sm sm:text-xs">
                                {blog.status === "in-progress" ? "In Progress" : "Completed"}
                            </Badge>
                        )}

                        <Badge
                            variant="outline"
                            className="max-w-[58%] truncate border-white/20 bg-black/35 text-[10px] text-white/90 backdrop-blur-md sm:max-w-none sm:text-xs"
                        >
                            {blog.category}
                        </Badge>
                    </div>

                    <div className="absolute inset-x-3 bottom-3 sm:inset-x-4 sm:bottom-4">
                        <p className="text-xs text-white/70 sm:text-sm">{blog.date}</p>
                    </div>
                </div>

                <div className="p-5 md:p-7">
                    {typeBadges.length > 0 && (
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
                    )}

                    <div className="mb-3 flex items-center gap-2">
                        <TitleMark
                            logo={blog.logo}
                            title={blog.title}
                            icon={blog.icon}
                            iconClassName={blog.iconClassName}
                            size="card"
                        />
                        <h2 className="text-xl font-hero font-bold tracking-tight text-white transition-colors duration-300 sm:text-2xl">
                            {blog.title}
                        </h2>
                    </div>

                    <p className="mb-5 line-clamp-3 text-sm leading-relaxed text-gray-300/95">
                        {blog.description}
                    </p>

                    {isDevLog && blog.technologies.length > 0 && (
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
                    )}

                    {!isDevLog && blog.tags && blog.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 pt-1">
                            {blog.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full border border-white/12 bg-white/6 px-3 py-1 text-xs text-gray-200/90 capitalize"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </article>
        </Link>
    );
}

export default function BlogPage() {
    const devLogs = blogs.filter((b) => !b.writingType || b.writingType === "devlog");
    const personalWritings = blogs.filter((b) => b.writingType === "personal");
    const heroBlog = blogs.find((b) => b.heroBlog);
    const [visibleDevLogs, setVisibleDevLogs] = useState(3);
    const [visiblePersonalWritings, setVisiblePersonalWritings] = useState(3);

    const shownDevLogs = devLogs.slice(0, visibleDevLogs);
    const shownPersonalWritings = personalWritings.slice(0, visiblePersonalWritings);

    return (
        <div className="px-4 pt-24 md:px-6 md:pt-32">
            <TopBarBackground transparency={10} imageUrl="cones.jpeg" />
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-10">
                    <p className="text-sm text-white/50 uppercase mb-2">
                        WRITING & INSIGHTS
                    </p>
                    <div className="flex flex-col items-start">
                        <TextAnimate
                            animation="blurInUp"
                            by="character"
                            className="text-4xl font-bold font-hero sm:text-5xl md:text-6xl"
                        >
                            Curated
                        </TextAnimate>

                        <TextAnimate
                            animation="slideLeft"
                            once
                            by="character"
                            className="text-4xl font-bold font-hero sm:text-5xl md:text-6xl 
                                         bg-linear-to-r from-blue-500 to-purple-500 
                               bg-clip-text text-transparent animate-gradient 
                                         bg-size-[200%_auto]">
                            narratives
                        </TextAnimate>
                    </div>
                </div>

                {/* Hero */}
                {heroBlog && (
                    <div className="mb-12 md:mb-16">
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-wrap items-center gap-2">
                                <Star className="size-4 text-blue-600 md:size-5" />
                                <h2 className="text-xl font-hero font-bold text-white md:text-3xl">
                                    Highlight
                                </h2>
                                <Badge
                                    variant="outline"
                                    className="border-white/20 bg-black/40 text-xs text-white"
                                >
                                    Editor's Pick
                                </Badge>
                            </div>
                        </div>
                        <p className="text-sm text-gray-400">
                            Featured post I returned to
                        </p>
                        <Separator className="mt-6 mb-8" />
                        <BackgroundGradient colors={["#2e3ffa", "#1d46fd"]}>
                            <Link href={`/blog/${heroBlog.slug}`} className="group block">
                                <div className="rounded-3xl overflow-hidden">
                                    <div className="relative w-full aspect-4/5 overflow-hidden sm:aspect-16/10 lg:aspect-21/9">
                                        <Image
                                            src={heroBlog.image}
                                            alt={heroBlog.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            unoptimized
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/80 to-transparent" />
                                        <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent" />
                                        <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6 md:p-12">
                                            <div className="mb-3 flex flex-wrap gap-2 sm:mb-4">
                                                {heroBlog.challenge && (
                                                    <Badge variant="outline" className="border-orange-500 bg-orange-500/20 text-[10px] backdrop-blur-sm sm:text-xs">Challenge</Badge>
                                                )}
                                                {heroBlog.collab && (
                                                    <Badge variant="outline" className="border-blue-500 bg-blue-500/20 text-[10px] backdrop-blur-sm sm:text-xs">Collaboration</Badge>
                                                )}
                                                {heroBlog.mini && (
                                                    <Badge variant="outline" className="border-emerald-500 bg-emerald-500/20 text-[10px] backdrop-blur-sm sm:text-xs">Mini</Badge>
                                                )}
                                                {heroBlog.status && (
                                                    <Badge variant="outline" className="border-white/20 bg-black/40 text-[10px] text-white backdrop-blur-sm sm:text-xs">
                                                        {heroBlog.status === "in-progress" ? "In Progress" : "Completed"}
                                                    </Badge>
                                                )}
                                            </div>
                                            <p className="mb-2 text-xs text-gray-400 sm:text-sm">{heroBlog.category}</p>
                                            <div className="mb-2 flex items-center gap-2 sm:mb-3 sm:gap-3">
                                                <TitleMark
                                                    logo={heroBlog.logo}
                                                    title={heroBlog.title}
                                                    icon={heroBlog.icon}
                                                    iconClassName={heroBlog.iconClassName}
                                                    size="hero"
                                                />
                                                <h2 className="text-2xl font-hero font-bold text-white sm:text-3xl md:text-5xl">
                                                    {heroBlog.title}
                                                </h2>
                                            </div>
                                            <p className="mb-3 max-w-2xl text-sm text-gray-300 sm:mb-4 sm:text-base md:text-lg">
                                                {heroBlog.description}
                                            </p>
                                            {heroBlog.technologies.length > 0 && (
                                                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                                    {heroBlog.technologies.map((tech) => {
                                                        const iconPath = getTechIcon(tech);
                                                        return (
                                                            <span
                                                                key={tech}
                                                                className="flex items-center gap-1 rounded-full border border-white/15 bg-white/10 px-2 py-0.5 text-[10px] text-gray-300 backdrop-blur-sm sm:gap-1.5 sm:px-3 sm:py-1 sm:text-xs"
                                                            >
                                                                {iconPath && (
                                                                    <Image
                                                                        src={iconPath}
                                                                        alt={tech}
                                                                        width={12}
                                                                        height={12}
                                                                        className="object-contain"
                                                                        unoptimized
                                                                    />
                                                                )}
                                                                {tech}
                                                            </span>
                                                        );
                                                    })}
                                                </div>
                                            )}
                                            <p className="mt-3 text-xs text-gray-400 sm:mt-4 sm:text-sm">{heroBlog.date}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </BackgroundGradient>
                    </div>
                )}

                {/* Dev Section */}
                {devLogs.length > 0 && (
                    <section className="mb-16">
                        <div className="flex items-center gap-3 mb-1">
                            <Bot size={24} />
                            <h2 className="text-2xl md:text-3xl font-hero font-bold text-white">Dev Blogs</h2>
                            <Badge variant="secondary" className="ml-1 rounded-full px-2.5 py-0.5">
                                {devLogs.length}
                            </Badge>
                        </div>
                        <p className="text-sm text-gray-400 mb-6">
                            Engineering progress, architecture decisions, and development chronicles
                        </p>
                        <Separator className="mb-8" />
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {shownDevLogs.map((blog) => (
                                <BlogCard key={blog.slug} blog={blog} />
                            ))}
                        </div>
                        {visibleDevLogs < devLogs.length && (
                            <div className="mt-8 flex justify-center">
                                <Button
                                    type="button"
                                    variant="default"
                                    onClick={() => setVisibleDevLogs((count) => count + 3)}
                                    className="rounded-full border px-5 py-2.5 text-sm font-medium"
                                >
                                    Load More
                                </Button>
                            </div>
                        )}
                    </section>
                )}

                {/* Personal Writing Section */}
                {personalWritings.length > 0 && (
                    <section className="mb-16">
                        <div className="flex items-center gap-3 mb-1">
                            <BookOpen size={22} />
                            <h2 className="text-2xl md:text-3xl font-hero font-bold text-white">Personal</h2>
                            <Badge variant="secondary" className="ml-1 rounded-full px-2.5 py-0.5">
                                {personalWritings.length}
                            </Badge>
                        </div>
                        <p className="text-sm text-gray-400 mb-6">
                            Career reflections, plans, and thoughts beyond the terminal
                        </p>
                        <Separator className="mb-8" />
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {shownPersonalWritings.map((blog) => (
                                <BlogCard key={blog.slug} blog={blog} />
                            ))}
                        </div>
                        {visiblePersonalWritings < personalWritings.length && (
                            <div className="mt-8 flex justify-center">
                                <Button
                                    type="button"
                                    variant="default"
                                    onClick={() => setVisiblePersonalWritings((count) => count + 3)}
                                    className="rounded-full border px-5 py-2.5 text-sm font-medium"
                                >
                                    Load More
                                </Button>
                            </div>
                        )}
                    </section>
                )}
            </div>

            <AvailableForRoles />
        </div>
    );
}

