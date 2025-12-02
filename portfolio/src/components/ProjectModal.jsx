import React from "react";
import { motion } from "framer-motion";

export default function ProjectModal({ project, onClose }) {
  React.useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.28, ease: "easeOut" }}
        className="relative z-10 w-full max-w-3xl rounded-2xl bg-white dark:bg-slate-900 shadow-xl overflow-hidden"
      >
        <div className="w-full h-56 overflow-hidden">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        </div>

        <div className="p-6">
          <div className="flex items-start gap-4">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">{project.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{project.desc}</p>
              <div className="mt-3 text-xs text-gray-500 dark:text-gray-400">{project.tags.join(" · ")}</div>
            </div>

            <div className="ml-auto flex items-start gap-2">
              {project.live ? (
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="px-3 py-2 rounded-md bg-gold text-black text-sm font-medium shadow">Visit</a>
              ) : null}
              {project.github ? (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="px-3 py-2 rounded-md border border-gray-200 text-sm text-gray-700 hover:text-gold transition">GitHub</a>
              ) : null}
              <button onClick={onClose} aria-label="Close" className="text-sm text-gray-500 hover:text-gray-800 dark:hover:text-gray-200">Close</button>
            </div>
          </div>

          <div className="mt-5 text-sm text-gray-700 dark:text-gray-300">
            <ul className="list-disc ml-5 space-y-2">
              <li>{project.detail1 || "Feature: well-structured UI & routing."}</li>
              <li>{project.detail2 || "Feature: responsive and accessible."}</li>
              <li>{project.detail3 || "Feature: production deployments and tests."}</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
