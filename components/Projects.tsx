"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Calendar, ArrowUpRight, Code2 } from "lucide-react";

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  period: string;
  description: string;
  features: string[];
  skills: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
}

const PROJECTS: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Airport Security & Monitoring Dashboard",
    category: "IoT & Systems",
    period: "2025",
    description:
      "A centralized web interface for airport technicians to monitor CCTV telemetry, hardware status, and FIDS flight updates in real time with low-latency alerts.",
    features: [
      "Real-time CCTV telemetry & network health monitoring",
      "FIDS (Flight Information Display System) data sync",
      "Automated hardware failure alerting & log inspection",
    ],
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "WebSocket"],
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1200&auto=format&fit=crop",
    demoUrl: "https://mfarhanfarmanda.my.id",
    githubUrl: "https://github.com/farhanfarmanda",
  },
  {
    id: "proj-2",
    title: "HIMATEKKOM Official Portal",
    category: "Web Platform",
    period: "2025",
    description:
      "Integrated organizational hub supporting student management, event registration for 90+ participants, and internal division workflow automation.",
    features: [
      "Student registration & participant tracking system",
      "Interactive event schedule & tournament portal",
      "Internal document & budget transparency module",
    ],
    skills: ["React", "Next.js", "Framer Motion", "Tailwind CSS"],
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop",
    demoUrl: "https://mfarhanfarmanda.my.id",
    githubUrl: "https://github.com/farhanfarmanda",
  },
  {
    id: "proj-3",
    title: "Embedded Hardware & CCTV Telemetry",
    category: "Hardware & Networking",
    period: "2024",
    description:
      "Automated diagnostic tool to inspect network connectivity, camera frame rates, and security scanner responsiveness across distributed airport nodes.",
    features: [
      "Automated ping & network packet inspector",
      "CCTV frame-rate & quality telemetry logger",
      "Multi-node health status & CLI web interface",
    ],
    skills: ["C++", "Linux", "Networking", "Python"],
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    demoUrl: "https://mfarhanfarmanda.my.id",
  },
];

const CATEGORIES = [
  "All",
  "IoT & Systems",
  "Web Platform",
  "Hardware & Networking",
];

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="14"
      height="14"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = PROJECTS.filter((item) =>
    activeCategory === "All" ? true : item.category === activeCategory,
  );

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 max-w-5xl mx-auto overflow-hidden"
    >
      <div className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <div>
          <h2 className="text-xs font-mono font-semibold tracking-[0.2em] text-neutral-400 uppercase mb-2">
            PROJECTS
          </h2>
          <p className="text-lg sm:text-xl font-bold text-neutral-900 tracking-tight">
            Featured Engineering Works
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-neutral-900 text-white font-medium shadow-2xs"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200/70 border border-neutral-200/60"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((item) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="h-full flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-white border border-neutral-200/80 shadow-2xs hover:border-neutral-300 hover:shadow-md transition-all duration-300 group">
                <div>
                  <div className="relative aspect-video w-full rounded-2xl bg-neutral-100 overflow-hidden border border-neutral-200/70 mb-6">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-neutral-950/10 group-hover:bg-transparent transition-colors duration-300" />
                  </div>

                  <div className="flex items-center justify-between gap-2 flex-wrap mb-3">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-neutral-100 text-neutral-700 border border-neutral-200/70">
                      {item.category}
                    </span>
                    <span className="flex items-center gap-1.5 text-neutral-400 text-xs font-mono">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.period}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-neutral-900 tracking-tight mt-1 mb-2 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-5">
                    {item.description}
                  </p>

                  <div className="mb-6 space-y-2">
                    <span className="text-[11px] font-mono font-bold text-neutral-400 uppercase tracking-wider flex items-center gap-1">
                      <Code2 className="w-3 h-3 text-blue-600" /> Key Features
                    </span>
                    <ul className="space-y-1.5">
                      {item.features.map((feature, fIdx) => (
                        <li
                          key={fIdx}
                          className="flex items-start gap-2 text-xs text-neutral-600"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-5 border-t border-neutral-100 space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-[11px] font-mono font-medium rounded-xl bg-neutral-50 text-neutral-600 border border-neutral-200/80"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 pt-1">
                    {item.demoUrl && (
                      <a
                        href={item.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-neutral-900 text-white text-xs font-mono font-medium hover:bg-blue-600 transition-colors shadow-2xs"
                      >
                        <span>Live Demo</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}

                    {item.githubUrl && (
                      <a
                        href={item.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-neutral-100 text-neutral-700 border border-neutral-200/80 text-xs font-mono font-medium hover:bg-neutral-200/80 transition-colors"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>Source</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
