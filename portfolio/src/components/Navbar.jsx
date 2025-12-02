import React from "react";
import logoImg from "../assets/logo.png";

const Container = ({ children }) => (
  <div className="max-w-6xl mx-auto px-6">{children}</div>
);

export default function Navbar({ isDark, setIsDark, resumeHref }) {
  return (
    <header className="sticky top-0 z-40 bg-white/90 dark:bg-slate-800/60 backdrop-blur-md border-b border-gray-200 dark:border-slate-700">
      <Container>
        <nav className="flex items-center justify-between py-4">

          {/* LEFT — LOGO */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-white dark:bg-slate-900 border border-gold/40 shadow-sm overflow-hidden">
              <img
                src={logoImg}
                alt="AG Logo"
                className="w-8 h-8 object-contain"
              />
            </div>

            <span className="hidden sm:inline text-sm text-gray-600 dark:text-gray-300">
              Full-Stack Developer
            </span>
          </div>

          {/* RIGHT — LINKS */}
          <div className="flex items-center gap-4">

            <div className="hidden sm:flex items-center gap-6 text-sm">
              <a href="#projects" className="hover:text-gold transition">
                Projects
              </a>

              <a href="#skills" className="hover:text-gold transition">
                Skills
              </a>

              <a href="#contact" className="hover:text-gold transition">
                Contact
              </a>
            </div>

           <a 
  href="/resume.pdf"
  download="Adwin_George_Resume.pdf"
  className="cursor-pointer"
>
  Resume
</a>


            {/* Dark Mode Toggle */}
            <button
              onClick={() => setIsDark((s) => !s)}
              aria-label="Toggle dark mode"
              className="p-2 rounded-md bg-gray-100 dark:bg-slate-700 border border-gray-200 dark:border-slate-700"
            >
              {isDark ? "🌙" : "☀️"}
            </button>
          </div>
        </nav>
      </Container>
    </header>
  );
}
