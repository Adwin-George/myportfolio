import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import FloatingParticles from "./components/FloatingParticles";
import GoldSparks from "./components/GoldSparks";


export default function App() {
  const [modalProject, setModalProject] = React.useState(null);
  const [isDark, setIsDark] = React.useState(() => {
    try {
      const saved = typeof window !== "undefined" && localStorage.getItem("theme");
      if (saved) return saved === "dark";
      if (typeof window !== "undefined" && window.matchMedia) {
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
      }
    } catch (e) {}
    return false;
  });

  React.useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <div className="min-h-screen font-sans bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-gray-100">
      <FloatingParticles />
      <GoldSparks />

      <Navbar isDark={isDark} setIsDark={setIsDark} />

      <main className="py-20">
        <Hero />
      </main>

      <Skills />

      <Projects onOpenProject={(p) => setModalProject(p)} />

      <Contact />

      <footer className="py-8 border-t border-gray-200 dark:border-slate-700">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
            <span>© {new Date().getFullYear()} Adwin George</span>
            <span>Built with care</span>
          </div>
        </div>
      </footer>

      {/* Project modal */}
      {modalProject && (
        <Projects.ModalWrapper
          project={modalProject}
          onClose={() => setModalProject(null)}
        />
      )}
    </div>
  );
}
