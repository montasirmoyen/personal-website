"use client";

import Link from "next/link";
import Image from "next/image";
import { blogs } from "@/lib/projects";
import { Badge } from "@/components/ui/badge";
import AvailableForRoles from "@/components/AvailableForRoles";
import { TextAnimate } from "@/components/ui/text-animate"
import { getTechIcon } from "@/lib/projects";
import TopBarBackground from "@/components/TopBarBackground";
import { Separator } from "@/components/ui/separator";
import { Bot, Zap, Handshake, Leaf, Star } from "lucide-react";
import { JSX } from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient"

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
    return (
        <Link
            key={blog.slug}
            href={`/blog/${blog.slug}`}
            className="group block"
        >
            <div className="bg-black border border-white/10 rounded-lg overflow-hidden transition-all duration-250 shadow-lg hover:scale-105 hover:border-white/35 h-full">
                <div className="relative aspect-video overflow-hidden">
                    <Image
                        src={blog.image}
                        alt={blog.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                        unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                        {blog.challenge && (
                            <Badge
                                variant="outline"
                                className="border-orange-500 bg-orange-500/20 backdrop-blur-sm ml-2"
                            >
                                Challenge
                            </Badge>
                        )}
                        {blog.collab && (
                            <Badge
                                variant="outline"
                                className="border-blue-500 bg-blue-500/20 backdrop-blur-sm ml-2"
                            >
                                Collaboration
                            </Badge>
                        )}
                        {blog.mini && (
                            <Badge
                                variant="outline"
                                className="border-emerald-500 bg-emerald-500/20 backdrop-blur-sm ml-2"
                            >
                                Mini
                            </Badge>
                        )}
                        <Badge
                            variant="outline"
                            className="border-white/20 bg-black/40 text-white backdrop-blur-sm"
                        >
                            {blog.status === "in-progress" ? "In Progress" : "Completed"}
                        </Badge>
                    </div>
                </div>

                <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-sm text-gray-400 font-medium">
                            {blog.category}
                        </span>
                    </div>

                    <h2 className={`text-2xl font-hero font-bold mb-3 transition-colors`}>
                        {blog.title}
                    </h2>

                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        {blog.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                        {blog.technologies.map((tech) => {
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

                    <p className="mt-5 text-sm text-gray-400">
                        {blog.date}
                    </p>
                </div>
            </div>
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
                               bg-gradient-to-r from-blue-500 to-purple-500 
                               bg-clip-text text-transparent animate-gradient 
                               bg-[length:200%_auto]">
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
                                    <Star className="text-red-400" />
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
                                Featured journey I'm writing about
                            </p>
                            <Separator className="mt-6 mb-8" />
                            <BackgroundGradient colors={["#900e0e", "#ff0084"]}>
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
                                                <h2 className="text-3xl md:text-5xl font-hero font-bold text-white mb-3">
                                                    {heroBlog.title}
                                                </h2>
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