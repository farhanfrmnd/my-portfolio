// components/Projects.tsx
"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

// Component SVG kustom untuk menggantikan ikon Github dari lucide-react
function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  image: string;
}

const PROJECTS: Project[] = [
  {
    id: "project-1",
    title: "E-Commerce Experience",
    description:
      "Platform belanja modern dengan performa tinggi, animasi transisi produk yang mulus, dan integrasi sistem pembayaran secara real-time.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    link: "https://example.com",
    github: "https://github.com",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "project-2",
    title: "AI Workspace Dashboard",
    description:
      "Antarmuka manajemen tugas berbasis AI yang menyederhanakan alur kerja tim melalui analitik data otomatis dan visualisasi interaktif.",
    tags: ["React", "Tailwind CSS", "Node.js", "OpenAI API"],
    link: "https://example.com",
    github: "https://github.com",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "project-3",
    title: "Minimalist Finance App",
    description:
      "Aplikasi pelacak keuangan pribadi dengan desain fokus pada tipografi yang bersih, kemudahan navigasi, serta keamanan data tinggi.",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    link: "https://example.com",
    github: "https://github.com",
    image:
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1000&auto=format&fit=crop",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 max-w-5xl mx-auto">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mb-16"
      >
        <span className="text-xs font-semibold tracking-wider uppercase text-neutral-400">
          Featured Works
        </span>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-900 mt-2">
          Projects.
        </h2>
      </motion.div>

      {/* Grid Projects */}
      <div className="grid grid-cols-1 gap-12">
        {PROJECTS.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.8,
              delay: index * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative flex flex-col md:flex-row items-center gap-8 p-6 md:p-8 rounded-3xl bg-neutral-50/60 border border-neutral-200/80 transition-colors duration-300 hover:bg-neutral-50"
          >
            {/* Project Image Preview */}
            <div className="w-full md:w-1/2 aspect-[16/10] overflow-hidden rounded-2xl bg-neutral-200 border border-neutral-200/60">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              />
            </div>

            {/* Project Details */}
            <div className="w-full md:w-1/2 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold tracking-tight text-neutral-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed mb-6 font-medium">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-neutral-500 bg-white border border-neutral-200/80 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="flex items-center gap-4">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-neutral-900 hover:text-neutral-500 transition-colors duration-300"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-neutral-500 hover:text-neutral-900 transition-colors duration-300"
                  >
                    <span>Source Code</span>
                    <GithubIcon className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
