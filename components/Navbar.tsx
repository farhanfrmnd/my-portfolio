"use client";
import { useEffect, useState, useRef } from "react";
import { Download, X, Eye } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const NAV_ITEMS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isCvOpen, setIsCvOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const isScrollingRef = useRef(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-35% 0px -45% 0px",
      threshold: 0,
    };

    const handleIntersection: IntersectionObserverCallback = (entries) => {
      if (isScrollingRef.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions,
    );

    NAV_ITEMS.forEach((item) => {
      const targetId = item.href.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      isScrollingRef.current = true;
      setActiveSection(targetId);

      const navOffset = 90;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setTimeout(() => {
        isScrollingRef.current = false;
      }, 600);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0, ease: EASE }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-40 flex items-center justify-between px-6 py-2.5 w-[90%] max-w-6xl rounded-full bg-white/80 backdrop-blur-md border border-neutral-200/80 shadow-xs transform-gpu"
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleScroll(e, "#home")}
          className="font-bold tracking-tight text-neutral-900 text-sm hover:opacity-70 transition-opacity duration-300"
        >
          PORTFOLIO.
        </a>

        {/* Menu Navigasi */}
        <div className="hidden md:flex items-center gap-3 text-xs font-mono font-semibold tracking-wider uppercase py-1">
          {NAV_ITEMS.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className={`px-3 py-1.5 transition-colors duration-300 ease-out select-none ${
                  isActive
                    ? "text-neutral-900 font-bold"
                    : "text-neutral-400 font-medium hover:text-neutral-900"
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </div>

        {/* Tombol Preview CV */}
        <button
          onClick={() => setIsCvOpen(true)}
          className="group flex items-center gap-2 px-4 py-2 text-xs font-mono font-semibold tracking-wider uppercase rounded-full bg-neutral-100 border border-neutral-200/80 text-neutral-800 hover:bg-neutral-900 hover:text-white transition-all duration-300 cursor-pointer"
        >
          <span>Preview CV</span>
          <Eye className="w-3.5 h-3.5 transition-transform duration-300 group-hover:scale-110" />
        </button>
      </motion.nav>

      {/* Pop-up Modal CV */}
      <AnimatePresence>
        {isCvOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsCvOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm transform-gpu"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              style={{ willChange: "transform, opacity" }}
              className="relative w-full max-w-4xl h-[85vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10 border border-neutral-200 transform-gpu"
            >
              <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 bg-neutral-50/80">
                <h3 className="text-xs sm:text-sm font-mono font-bold tracking-wider uppercase text-neutral-800">
                  Curriculum Vitae
                </h3>
                <div className="flex items-center gap-3">
                  <a
                    href="/CV_Muhammad%20Farhan%20Farmanda.pdf"
                    download="CV_Muhammad Farhan Farmanda.pdf"
                    className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-mono font-semibold uppercase tracking-wider rounded-full bg-neutral-900 text-white hover:bg-neutral-800 transition-colors shadow-sm"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download CV</span>
                  </a>
                  <button
                    onClick={() => setIsCvOpen(false)}
                    className="p-1.5 rounded-full text-neutral-500 hover:text-white hover:bg-neutral-900 transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="flex-1 w-full bg-neutral-100 overflow-y-auto [-webkit-overflow-scrolling:touch]">
                <iframe
                  src="/CV_Muhammad%20Farhan%20Farmanda.pdf#toolbar=0&navpanes=0"
                  className="w-full h-full border-none"
                  title="PDF Preview"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
