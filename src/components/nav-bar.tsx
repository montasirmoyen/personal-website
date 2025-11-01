import Link from "next/link";
import { Lightbulb, Briefcase, Book } from "lucide-react"

export default function Navbar() {
    return (
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Montasir Moyen</h1>
          <nav className="flex space-x-6 text-md font-semibold">
            <Link 
              href="/" 
              className="text-white hover:text-gray-300 transition-colors duration-200 font-medium flex items-center gap-2"
            >
              <Lightbulb className="w-4 h-4" />
              About
            </Link>
            <Link 
              href="/experience" 
              className="text-white hover:text-gray-300 transition-colors duration-200 font-medium flex items-center gap-2"
            >
              <Briefcase className="w-4 h-4" />
              Experience
            </Link>
            <Link 
              href="/education" 
              className="text-white hover:text-gray-300 transition-colors duration-200 font-medium flex items-center gap-2"
            >
              <Book className="w-4 h-4" />
              Education
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