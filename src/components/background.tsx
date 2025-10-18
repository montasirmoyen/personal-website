import React from "react";
import Link from "next/link";

type BackgroundProps = {
  backgroundImage: string;
  children: React.ReactNode;
};

export default function Background({ backgroundImage, children }: BackgroundProps) {
  return (
    <main
      className="bg-black bg-cover bg-center text-white flex items-center justify-center flex-1"
      style={{
        backgroundImage: `url(${backgroundImage})`
      }}
    >
      <div className="bg-black/80 backdrop-blur-sm max-w-5xl w-full flex flex-col px-8 py-8 rounded-lg shadow-lg">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Montasir Moyen</h1>
          <nav className="flex space-x-6 text-md font-semibold">
            <Link 
              href="/" 
              className="text-white hover:text-gray-300 transition-colors duration-200 font-medium"
            >
              About
            </Link>
            <Link 
              href="/experience" 
              className="text-white hover:text-gray-300 transition-colors duration-200 font-medium"
            >
              Experience
            </Link>
            <Link 
              href="/education" 
              className="text-white hover:text-gray-300 transition-colors duration-200 font-medium"
            >
              Education
            </Link>
          </nav>
        </div>
        {children}
      </div>
    </main>
  );
}
