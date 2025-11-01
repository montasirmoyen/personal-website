import Link from "next/link";
import { Lightbulb, Briefcase, Book } from "lucide-react"

export default function Navbar() {
    return (
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">Montasir Moyen</h1>
          <nav className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 text-sm sm:text-md font-semibold">
            <Link 
              href="/" 
              className="text-white hover:text-gray-300 transition-colors duration-200 font-medium flex items-center gap-1.5 sm:gap-2"
            >
              <Lightbulb className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm">About</span>
            </Link>
            <Link 
              href="/experience" 
              className="text-white hover:text-gray-300 transition-colors duration-200 font-medium flex items-center gap-1.5 sm:gap-2"
            >
              <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm">Experience</span>
            </Link>
            <Link 
              href="/education" 
              className="text-white hover:text-gray-300 transition-colors duration-200 font-medium flex items-center gap-1.5 sm:gap-2"
            >
              <Book className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm">Education</span>
            </Link>
            {/* 
            <Link 
              href="/projects" 
              className="text-white hover:text-gray-300 transition-colors duration-200 font-medium"
            >
              Projects
            </Link>
            */}
          </nav>
        </div>
    );
    }