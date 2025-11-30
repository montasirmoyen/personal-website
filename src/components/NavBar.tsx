"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Search } from "lucide-react";
import { useState } from "react";
import { ShineBorder } from "@/components/ui/shine-border"

export default function NavBar() {
    const pathname = usePathname();

    const isActive = (path: string) => {
        if (path === "/") {
            return pathname === "/";
        }
        return pathname.startsWith(path);
    };

    return (
        <>
            <div className="backdrop-blur-sm pointer-events-none fixed left-0 z-40 w-full select-none from-transparent to-black dark:to-[#0a0a0aa4] bg-gradient-to-t" style={{
                top: 0,
                height: 150,
                maskImage: 'linear-gradient(to bottom, black 50%, transparent)',
                WebkitBackdropFilter: 'blur(5px)',
                backdropFilter: 'blur(5px)',
            }}></div>
            <nav className="fixed inset-x-0 top-4 z-50 px-4 md:px-6">
                <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0">
                        <Image
                            src="/mm-logo.png"
                            alt="Montasir Moyen Logo"
                            width={40}
                            height={40}
                            className="w-10 h-10"
                        />
                    </Link>

                    {/* Navigation Bar */}
                    <div className="backdrop-blur-sm flex items-center gap-1 px-1 py-1 rounded-full bg-transparent">
                        <ShineBorder shineColor={["#ffffffff"]} />

                        <div className="flex items-center gap-5 text-sm text-white">
                            <NavLink href="/" isActive={isActive("/")}>
                                Home
                            </NavLink>
                            <NavLink href="/about" isActive={isActive("/about")}>
                                About
                            </NavLink>
                            <NavLink href="/experience" isActive={isActive("/experience")}>
                                Experience
                            </NavLink>
                            <NavLink href="/education" isActive={isActive("/education")}>
                                Education
                            </NavLink>
                            <NavLink href="/projects" isActive={isActive("/projects")}>
                                Projects
                            </NavLink>
                        </div>
                    </div>

                    {/* Search Icon */}
                    <button className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-transparent border border-white/10 hover:bg-white/20 transition-colors">
                        <Search size={18} className="text-white" />
                    </button>
                </div>
            </nav>
        </>
    );
}

function NavLink({
    href,
    isActive,
    children
}: {
    href: string;
    isActive: boolean;
    children: React.ReactNode;
}) {
    return (
        <Link href={href} className={`relative px-3 py-1 rounded-full transition-all 
        ${isActive ? "bg-white text-black font-bold" : "opacity-80 hover:bg-white/5 hover:opacity-100 text-white"}`}>
            {children}
        </Link>
    );
}