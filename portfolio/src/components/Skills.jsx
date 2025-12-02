import React from "react";
import { motion } from "framer-motion";
import { ICON } from "../data/icons";

const Container = ({ children }) => (
  <div className="max-w-6xl mx-auto px-6">{children}</div>
);
const SectionTitle = ({ children }) => (
  <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-6">{children}</h2>
);

function Skill({ icon, label }) {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 12 }}
      viewport={{ once: true }}
      className="flex items-center gap-3 p-3 rounded-lg bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 shadow-sm"
    >
      <span className="w-8 h-8 flex items-center justify-center text-gray-700 dark:text-gray-200" dangerouslySetInnerHTML={{ __html: icon }} />
      <span className="text-gray-800 dark:text-gray-100 text-sm font-medium">{label}</span>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-16 border-t border-gray-200 dark:border-slate-700">
      <Container>
        <SectionTitle>Skills & Tools</SectionTitle>

        <div className="space-y-12">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Languages</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Skill icon={ICON.JS} label="JavaScript" />
              <Skill icon={ICON.PY} label="Python" />
              <Skill icon={ICON.C} label="C Programming" />
              <Skill icon={ICON.JAVA} label="Java" />
              <Skill icon={ICON.HTML} label="HTML5" />
              <Skill icon={ICON.CSS} label="CSS3" />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Frontend</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Skill icon={ICON.REACT} label="React" />
              <Skill icon={ICON.TAILWIND} label="Tailwind CSS" />
              <Skill icon={ICON.VITE} label="Vite" />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Backend</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Skill icon={ICON.NODE} label="Node.js" />
              <Skill icon={ICON.EXPRESS} label="Express.js" />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Database</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Skill icon={ICON.MONGO} label="MongoDB" />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Tools</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Skill icon={ICON.GIT} label="Git" />
              <Skill icon={ICON.GITHUB} label="GitHub" />
              <Skill icon={ICON.VSCODE} label="VS Code" />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Platforms</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Skill icon={ICON.VERCEL} label="Vercel" />
              <Skill icon={ICON.NETLIFY} label="Netlify" />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Web Technologies</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Skill icon={ICON.PWA} label="Progressive Web Apps" />
              <Skill icon={ICON.SW} label="Service Workers" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
