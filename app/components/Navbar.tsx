"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-olive text-cream py-4 shadow-md">
      <div className="max-w-5xl mx-auto flex justify-center gap-12 text-lg font-body">
        
        <Link 
          href="/" 
          className="flex items-center gap-2 hover:text-accent transition"
        >
          <span>🏡</span> Home
        </Link>

        <Link 
          href="/about" 
          className="flex items-center gap-2 hover:text-accent transition"
        >
          <span>🌿</span> About
        </Link>

        <Link 
          href="/links" 
          className="flex items-center gap-2 hover:text-accent transition"
        >
          <span>🔗</span> Links
        </Link>

        <Link 
          href="/projects" 
          className="flex items-center gap-2 hover:text-accent transition"
        >
          <span>✨</span> Projects
        </Link>

      </div>
    </nav>
  );
}