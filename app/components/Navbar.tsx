"use client";

import Link from "next/link";
import { useActiveSection } from "@/app/hooks/useActiveSection";

export default function Navbar() {
  const activeSection = useActiveSection();
  //const isHome = pathname === "/";
  return (
    <nav className="sticky top-0 z-50 w-full bg-olive text-cream py-4 shadow-md">
      <div className="max-w-5xl mx-auto flex justify-center gap-12 text-lg font-body">
        
        <Link 
          href="#home" 
          className={`group flex items-center gap-2 transition
            ${activeSection === "home" ? "text-accent" : "hover:text-accent"}
          `}
        >
          <svg
            className="w-5 h-5 transition-transform duration-200 group-hover:-translate-y-0.5"
            viewBox="0 0 24 24"
          >
            <path fill="currentColor" d="M20.25 10a1.25 1.25 0 1 0-2.5 0zm-14 0a1.25 1.25 0 1 0-2.5 0zm13.866 2.884a1.25 1.25 0 0 0 1.768-1.768zM12 3l.884-.884a1.25 1.25 0 0 0-1.768 0zm-9.884 8.116a1.25 1.25 0 0 0 1.768 1.768zM7 22.25h10v-2.5H7zM20.25 19v-9h-2.5v9zm-14 0v-9h-2.5v9zm15.634-7.884l-9-9l-1.768 1.768l9 9zm-10.768-9l-9 9l1.768 1.768l9-9zM17 22.25A3.25 3.25 0 0 0 20.25 19h-2.5a.75.75 0 0 1-.75.75zm-10-2.5a.75.75 0 0 1-.75-.75h-2.5A3.25 3.25 0 0 0 7 22.25z" />
          </svg>
         Home
        </Link>

        <Link 
          href="#about" 
          className={`group flex items-center gap-2 transition
            ${activeSection === "about" ? "text-accent" : "hover:text-accent"}
          `}
        >
          <svg
            className="w-5 h-5 transition-transform duration-200 group-hover:-translate-y-0.5"
            viewBox="0 0 24 24"
          >
            <path fill="currentColor" d="m21.88 2.15l-1.2.4a13.84 13.84 0 0 1-6.41.64a11.87 11.87 0 0 0-6.68.9A7.23 7.23 0 0 0 3.3 9.5a8.65 8.65 0 0 0 1.47 6.6c-.06.21-.12.42-.17.63A22.6 22.6 0 0 0 4 22h2a31 31 0 0 1 .59-4.32a9.25 9.25 0 0 0 4.52 1.11a11 11 0 0 0 4.28-.87C23 14.67 22 3.86 22 3.41zm-7.27 13.93c-2.61 1.11-5.73.92-7.48-.45a13.8 13.8 0 0 1 1.21-2.84A10.2 10.2 0 0 1 9.73 11a9 9 0 0 1 1.81-1.42A12 12 0 0 1 16 8V7a11.4 11.4 0 0 0-5.26 1.08a10.3 10.3 0 0 0-4.12 3.65a15 15 0 0 0-1 1.87a7 7 0 0 1-.38-3.73a5.24 5.24 0 0 1 3.14-4a8.9 8.9 0 0 1 3.82-.84c.62 0 1.23.06 1.87.11a16.2 16.2 0 0 0 6-.35C20 7.55 19.5 14 14.61 16.08" />
          </svg>
          About
        </Link>

        <Link 
          href="#projects" 
          className={`group flex items-center gap-2 transition
            ${activeSection === "projects" ? "text-accent" : "hover:text-accent"}
          `}
        >
          <svg 
            className="w-7 h-7 transition-transform duration-200 group-hover:-translate-y-0.5" 
            viewBox="0 0 16 16"
          >
            <path fill="currentColor" d="M5.465 9.83a.92.92 0 0 0 1.07-.001a1 1 0 0 0 .341-.459l.347-1.067a1.7 1.7 0 0 1 1.078-1.079l1.086-.353a.923.923 0 0 0-.037-1.75l-1.069-.346a1.7 1.7 0 0 1-1.08-1.078l-.353-1.084a.92.92 0 0 0-.869-.61a.92.92 0 0 0-.875.624l-.356 1.09A1.71 1.71 0 0 1 3.7 4.775l-1.084.351a.923.923 0 0 0 .013 1.745l1.067.347a1.71 1.71 0 0 1 1.081 1.083l.352 1.08c.063.18.181.337.337.448M4.007 6.263l-.855-.265l.864-.281a2.7 2.7 0 0 0 1.045-.659c.292-.3.512-.66.644-1.056l.265-.859l.28.862A2.7 2.7 0 0 0 7.968 5.72l.88.269l-.86.28A2.7 2.7 0 0 0 6.27 7.987l-.265.857l-.279-.859a2.7 2.7 0 0 0-1.719-1.721m6.527 7.587a.8.8 0 0 0 .465.148a.81.81 0 0 0 .759-.55l.248-.762c.053-.158.143-.303.26-.421s.262-.207.42-.259l.772-.252a.8.8 0 0 0-.023-1.521l-.764-.249a1.08 1.08 0 0 1-.68-.678l-.252-.774a.8.8 0 0 0-1.518.011l-.247.762a1.07 1.07 0 0 1-.664.679l-.776.253a.8.8 0 0 0-.388 1.221c.099.14.239.245.4.3l.763.247a1.08 1.08 0 0 1 .68.683l.253.774a.8.8 0 0 0 .292.388m-.914-2.793l-.178-.059l.184-.064a2.09 2.09 0 0 0 1.3-1.317l.058-.178l.06.181a2.08 2.08 0 0 0 1.316 1.316l.195.063l-.18.059a2.08 2.08 0 0 0-1.317 1.321l-.059.181l-.058-.181a2.07 2.07 0 0 0-1.32-1.322" />
          </svg>
          Projects
        </Link>

        <Link 
          href="#contact" 
          className={`group flex items-center gap-2 transition
            ${activeSection === "contact" ? "text-accent" : "hover:text-accent"}
          `}
        >
          <svg 
            className="w-5 h-5 transition-transform duration-200 group-hover:-translate-y-0.5" 
            viewBox="0 0 20 20"
          >
            <path fill="currentColor" d="M17.74 2.76a4.32 4.32 0 0 1 0 6.1l-1.53 1.52c-1.12 1.12-2.7 1.47-4.14 1.09l2.62-2.61l.76-.77l.76-.76c.84-.84.84-2.2 0-3.04a2.13 2.13 0 0 0-3.04 0l-.77.76l-3.38 3.38c-.37-1.44-.02-3.02 1.1-4.14l1.52-1.53a4.32 4.32 0 0 1 6.1 0M8.59 13.43l5.34-5.34c.42-.42.42-1.1 0-1.52c-.44-.43-1.13-.39-1.53 0l-5.33 5.34c-.42.42-.42 1.1 0 1.52c.44.43 1.13.39 1.52 0m-.76 2.29l4.14-4.15c.38 1.44.03 3.02-1.09 4.14l-1.52 1.53a4.32 4.32 0 0 1-6.1 0a4.32 4.32 0 0 1 0-6.1l1.53-1.52c1.12-1.12 2.7-1.47 4.14-1.1l-4.14 4.15c-.85.84-.85 2.2 0 3.05c.84.84 2.2.84 3.04 0" />
          </svg>
          Links
        </Link>

      </div>
    </nav>
  );
}