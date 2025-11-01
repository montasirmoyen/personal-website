import React from "react";

export default function Footer() {
  return (
    <footer className="absolute bottom-0 left-0 right-0 backdrop-blur bg-black/25 backdrop-blur-sm mt-auto">
      <div className="max-w-4xl mx-auto px-8 py-4">
        <div className="flex items-center justify-center space-x-5">
          {/* 
            <a 
            href="mailto:rmm05890@su.suffolk.edu" 
            className="inline-block transition hover:opacity-70"
            aria-label="Email"
            >
            <img src="/email.png" alt="Email" className="w-6 h-6" />
            </a>
            */}
          <a
            href="https://github.com/montasirmoyen"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition hover:opacity-70"
            aria-label="GitHub"
          >
            <img src="/github.png" alt="GitHub" className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/montasirmoyen"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition hover:opacity-70"
            aria-label="LinkedIn"
          >
            <img src="/linkedin.png" alt="LinkedIn" className="w-6 h-6" />
          </a>
        </div>
        <div className="text-center mt-2">
          <p className="text-sm text-white">© 2025 Montasir Moyen</p>
        </div>
      </div>
    </footer>
  );
}
