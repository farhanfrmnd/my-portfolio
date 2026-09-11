"use client";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

export default function SocialFloat() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.1, delay: 0.4, ease: EASE }}
      className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-2 bg-white/70 backdrop-blur-md border border-black/10 p-2 rounded-full shadow-lg transform-gpu"
    >
      {/* GitHub */}
      <a
        href="https://github.com/farhanfrmnd"
        target="_blank"
        rel="noopener noreferrer"
        className="p-1.5 text-neutral-700 hover:text-black hover:scale-110 transition-all duration-200"
        aria-label="GitHub"
      >
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      </a>

      {/* LinkedIn */}
      <a
        href="https://linkedin.com/in/muhammadfarhanfarmanda"
        target="_blank"
        rel="noopener noreferrer"
        className="p-1.5 text-neutral-700 hover:text-black hover:scale-110 transition-all duration-200"
        aria-label="LinkedIn"
      >
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      </a>

      {/* Gmail */}
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=farhanfarmanda6@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="p-1.5 text-neutral-700 hover:text-black hover:scale-110 transition-all duration-200"
        aria-label="Email"
      >
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
        </svg>
      </a>
    </motion.div>
  );
}
