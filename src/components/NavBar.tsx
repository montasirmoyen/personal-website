"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Search, ChevronDown } from "lucide-react";

export default function NavBar() {
    const pathname = usePathname();

    const isActive = (path: string) => {
        if (path === "/") {
            return pathname === "/";
        }
        return pathname.startsWith(path);
    };

    return (
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
                <div className="flex items-center gap-1 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
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
                        {/* <button className="relative flex items-center gap-1 opacity-80 hover:opacity-100 transition-opacity">
                            More
                            <ChevronDown size={14} />
                        </button> */}
                    </div>
                </div>

                {/* Search Icon */}
                <button className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-colors">
                    <Search size={18} className="text-white" />
                </button>
            </div>
        </nav>
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
        <Link
            href={href}
            className={`relative px-3 py-1.5 rounded-full transition-all ${isActive
                ? "bg-white/20 text-white"
                : "opacity-80 hover:opacity-100 text-white"
                }`}
        >
            {isActive && (
                <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-white rounded-full" />
            )}
            {children}
        </Link>
    );
}
