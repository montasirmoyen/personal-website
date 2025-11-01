import React from "react";
import Navbar from "./nav-bar";

export default function TopBar() {
  return (
    <header className="fixed top-0 left-0 right-0 backdrop-blur bg-black/25 backdrop-blur-sm z-10">
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-3 md:py-4">
        <Navbar />
      </div>
    </header>
  );
}

