import React from "react";
import { motion } from "framer-motion";
import projectsData from "../data/projects";
import ProjectModal from "./ProjectModal";

const Container = ({ children }) => (
  <div className="max-w-6xl mx-auto px-6">{children}</div>
);
const SectionTitle = ({ children }) => (
  <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-6">{children}</h2>
);

export default function Projects({ onOpenProject }) {
  const categories = ["All", "Full-Stack", "Frontend", "PWA", "Tools"];
  const [active, setActive] = React.useState("All");

  const filtered = React.useMemo(() => {
    if (active === "All") return projectsData;
    return projectsData.filter((p) => p.category === active);
  }, [active]);

  return (
    <section id="projects" className="py-16 border-t border-gray-200 dark:border-slate-700">
      <Container>
        <SectionTitle>Selected Projects</SectionTitle>

        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-lg text-sm transition ${
                active === cat
                  ? "bg-gold text-black border border-gold"
                  : "bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-700 text-gray-700 dark:text-gray-200 hover:text-gold hover:border-gold"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((p) => (
            <motion.div key={p.id} whileHover={{ y: -6 }}>
              <article
                role="button"
                onClick={() => onOpenProject && onOpenProject(p)}
                className="rounded-2xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm hover:shadow-lg transition cursor-pointer overflow-hidden"
              >
                <div className="w-full h-40 overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{p.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{p.desc}</p>
                      <div className="mt-3 text-xs text-gray-500 dark:text-gray-400">{p.tags.join(" · ")}</div>
                    </div>
                    <div className="text-xs text-gray-400">{p.status}</div>
                  </div>
                </div>
              </article>
            </motion.div>
          ))}
        </div>

        <div className="mt-10">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Upcoming & In progress</h3>
          <div className="flex gap-4 flex-wrap">
            <div className="p-3 rounded-lg bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-900 dark:text-gray-100 shadow-sm">Weather App — Coming soon</div>
            <div className="p-3 rounded-lg bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-900 dark:text-gray-100 shadow-sm">PDF Translator — In progress</div>
          </div>
        </div>
      </Container>
    </section>
  );
}

// expose modal helper so App can render modal (keeps Projects.jsx small)
Projects.ModalWrapper = ProjectModal;
