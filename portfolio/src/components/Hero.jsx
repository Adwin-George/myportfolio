import React from "react";
import { motion } from "framer-motion";
import logoImg from "../assets/logo.png";

const Container = ({ children }) => (
  <div className="max-w-6xl mx-auto px-6">{children}</div>
);

export default function Hero() {
  return (
    <main className="py-20 relative z-10">
      <Container>
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT TEXT BLOCK */}
          <motion.div
            initial={{ x: -10, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm tracking-widest text-gold uppercase">
              Hello, I'm
            </p>

            <h1 className="mt-2 text-5xl md:text-6xl font-extrabold leading-tight">
              Adwin George
            </h1>

            <p className="mt-5 text-lg text-gray-700 dark:text-gray-300 max-w-xl">
              Full-Stack developer building reliable, user-friendly web
              applications. Focused on maintainability, performance and clean UX.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href="#projects"
                className="px-4 py-2 rounded-lg bg-gold text-black font-semibold shadow"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 dark:text-gray-200 hover:border-gold hover:text-gold transition"
              >
                Contact
              </a>
            </div>

            {/* TECH QUICK ICONS */}
            <div className="mt-6 flex flex-wrap gap-3 items-center text-sm text-gray-700 dark:text-gray-200">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 12l10 5 10-5" />
                </svg>
                JavaScript
              </span>

              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="2" />
                </svg>
                React
              </span>

              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 12h18v8l-9 4-9-4z" />
                </svg>
                Node.js
              </span>
            </div>
          </motion.div>

          {/* RIGHT LOGO CARD */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 shadow-sm"
          >
            <div className="flex items-center gap-4">
              <div className="w-24 h-24 rounded-lg bg-gray-100 dark:bg-slate-700 flex items-center justify-center overflow-hidden border border-gray-200 dark:border-slate-700">
                <img
                  src={logoImg}
                  alt="AG Logo"
                  className="w-20 h-20 object-contain"
                />
              </div>

              <div>
                <div className="text-lg font-semibold">Adwin George</div>
                <div className="text-sm text-gray-500 dark:text-gray-300">
                  Full-Stack Developer
                </div>
              </div>
            </div>

            <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
              Currently shipping production features for web apps, PWAs and
              developer tools.
            </p>
          </motion.div>
        </div>
      </Container>
    </main>
  );
}
