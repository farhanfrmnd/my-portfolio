"use client";

export default function Footer() {
  return (
    <footer className="w-full bg-neutral-900 border-t border-neutral-800 py-6 px-6 sm:px-10 lg:px-16 text-white">
      <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="font-sans font-bold text-sm sm:text-base tracking-wider uppercase text-white">
            PORTFOLIO.
          </span>
        </div>

        {/* Copyright */}
        <p className="text-neutral-400 text-center sm:text-right">
          © {new Date().getFullYear()}{" "}
          <span className="text-neutral-200 font-medium"> Muhammad Farhan Farmanda</span>.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}