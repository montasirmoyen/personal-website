"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { LimelightNav, NavItem } from "@/components/ui/navbar"

export default function NavBar() {
    const pathname = usePathname();
    const router = useRouter();

    const navItems: NavItem[] = [
        { 
            id: 'home', 
            label: 'Home',
            onClick: () => router.push('/')
        },
        { 
            id: 'about', 
            label: 'About',
            onClick: () => router.push('/about')
        },
        { 
            id: 'projects', 
            label: 'Projects',
            onClick: () => router.push('/projects')
        },
        { 
            id: 'blog', 
            label: 'Blog',
            onClick: () => router.push('/blog')
        },
    ];

    const getActiveIndex = () => {
        if (pathname === "/") return 0;
        if (pathname.startsWith("/about")) return 1;
        if (pathname.startsWith("/projects")) return 2;
        if (pathname.startsWith("/blog")) return 3;
        return 0;
    };

    return (
        <>
            <div className="bg-black/25 backdrop-blur-lg pointer-events-none fixed left-0 z-40 w-full select-none from-transparent to-[#0a0a0aa4] bg-gradient-to-t" style={{
                top: 0,
                height: 150,
                maskImage: 'linear-gradient(to bottom, black 50%, transparent)',
                WebkitBackdropFilter: 'blur(2px)',
                backdropFilter: 'blur(2px)',
            }}></div>
            <nav className="fixed inset-x-0 top-4 z-50 px-4 md:px-6">
                <div className="max-w-7xl mx-auto flex items-center justify-center gap-6">
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

                    <LimelightNav
                        items={navItems}
                        activeIndex={getActiveIndex()}
                    />
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