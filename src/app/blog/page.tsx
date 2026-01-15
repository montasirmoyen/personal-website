"use client";

import Link from "next/link";
import Image from "next/image";
import { blogs } from "@/lib/projects";
import { Badge } from "@/components/ui/badge";
import AvailableForRoles from "@/components/AvailableForRoles";
import { TextAnimate } from "@/components/ui/text-animate"
import { projects, getTechIcon } from "@/lib/projects";

export default function BlogPage() {
    return (
        <div className="pt-32 px-4 md:px-6">
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
                            Curated
                        </TextAnimate>

                        <TextAnimate
                            animation="slideLeft"
                            by="character"
                            className="text-5xl md:text-6xl font-bold font-hero 
                               bg-gradient-to-r from-blue-500 to-purple-500 
                               bg-clip-text text-transparent animate-gradient 
                               bg-[length:200%_auto]">
                            narratives.
                        </TextAnimate>
                    </div>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {blogs.map((blog) => (
                        <Link
                            key={blog.slug}
                            href={`/blog/${blog.slug}`}
                            className="group block"
                        >
                            <div className="bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:bg-white/10 transition-all duration-300 hover:scale-105 h-full">
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
                                        <span className="text-sm text-gray-400">
                                            {blog.date}
                                        </span>
                                    </div>

                                    <h2 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                                        {blog.title}
                                    </h2>

                                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                                        {blog.description}
                                    </p>

                                    {/* Technologies */}
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
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <AvailableForRoles />
        </div>
    );
}