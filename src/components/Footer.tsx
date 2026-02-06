import Image from "next/image";
import Link from "next/link";
import { Linkedin, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          {/* Left Side - Logo and Description */}
          <div className="space-y-4">
            <Image
              src="/mm-logo.png"
              alt="Montasir Moyen Logo"
              width={60}
              height={60}
              className="mb-4"
              unoptimized
            />
            <p className="text-white text-sm leading-relaxed max-w-md">
              I'm Montasir, a software developer & engineer based in Boston, Massachusetts, USA. Thanks for visiting my website.
            </p>
          </div>

          {/* Right Side - General Links */}
          <div className="space-y-4 md:text-right">
            <h3 className="text-white/50 text-sm uppercase tracking-wider font-semibold">
              QUICK ROUTE
            </h3>
            <nav className="flex flex-col space-y-2 md:items-end">
              <Link
                href="/"
                className="text-white hover:text-white/80 transition-colors text-sm"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-white hover:text-white/80 transition-colors text-sm"
              >
                About
              </Link>
              <Link
                href="/projects"
                className="text-white hover:text-white/80 transition-colors text-sm"
              >
                Projects
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-white/50">
            <p>Copyright © 2026 Montasir Moyen. All rights reserved.</p>
          </div>

          <div className="gap-5 flex">
              <Link
                href={"https://www.linkedin.com/in/montasirmoyen/"}
                target="_blank">
                <Linkedin className="hover:text-white/50 transition" height={24} width={24} />
              </Link>
              <Link
                href={"https://www.github.com/montasirmoyen/"}
                target="_blank">
                <Github className="hover:text-white/50 transition" height={24} width={24} />
              </Link>
            </div>
        </div>
      </div>
    </footer>
  );
}