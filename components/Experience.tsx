// components/Experience.tsx
"use client";
import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Briefcase, Users, Calendar, MapPin } from "lucide-react";

interface ExperienceItem {
  id: string;
  type: "work" | "org";
  category: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  skills: string[];
}

const EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp-1",
    type: "work",
    category: "Work Experience",
    role: "Technician (Internship)",
    company: "PT. Angkasa Pura Indonesia",
    location: "Aceh, Indonesia",
    period: "Aug 2025 - Sep 2025",
    description:
      "Monitored and troubleshot CCTV systems to support operational security. Maintained FIDS for real-time flight accuracy and assisted technical teams with security equipment like X-Ray Scanners and WTMD.",
    skills: [
      "CCTV Systems",
      "FIDS Maintenance",
      "Hardware Troubleshooting",
      "Airport Security",
    ],
  },
  {
    id: "exp-2",
    type: "org",
    category: "Organization",
    role: "Chairman",
    company: "Himpunan Mahasiswa Teknik Komputer USK (HIMATEKKOM USK)",
    location: "Banda Aceh, Indonesia",
    period: "Jan 2025 - Dec 2025",
    description:
      "Led 170 active members across 8 divisions to achieve organizational goals. Managed an annual budget of IDR 10 Million, ensuring financial efficiency and transparent reporting.",
    skills: [
      "Leadership",
      "Project Management",
      "Budgeting",
      "Strategic Planning",
    ],
  },
  {
    id: "exp-3",
    type: "org",
    category: "Organization",
    role: "Vice Head of Talent & Interest Division",
    company: "Himpunan Mahasiswa Teknik Komputer USK (HIMATEKKOM USK)",
    location: "Banda Aceh, Indonesia",
    period: "Jan 2024 - Dec 2024",
    description:
      "Co-initiated 4 division programs to enhance non-academic student potential. Organized the annual Computer Battle Tournament involving 90 participants.",
    skills: ["Event Management", "Team Leadership", "Program Planning"],
  },
  {
    id: "exp-4",
    type: "org",
    category: "Organization",
    role: "Member of Talent & Interest Department",
    company: "Badan Eksekutif Mahasiswa Fakultas Teknik USK (BEM-FT USK)",
    location: "Banda Aceh, Indonesia",
    period: "Mar 2024 - Dec 2024",
    description:
      "Served as core committee member for PIALA RAJA 2024 involving 13 student organizations, increasing overall faculty student engagement by up to 30%.",
    skills: ["Event Planning", "Public Relations", "Teamwork"],
  },
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 65%", "end 85%"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 max-w-5xl mx-auto select-none overflow-hidden"
    >
      {/* Header */}
      <div className="mb-16">
        <h2 className="text-xs font-mono font-semibold tracking-[0.2em] text-neutral-400 uppercase mb-2">
          EXPERIENCE
        </h2>
        <p className="text-lg sm:text-xl font-bold text-neutral-900 tracking-tight">
          Professional & Leadership Journey
        </p>
      </div>

      {/* Timeline Container */}
      <div ref={containerRef} className="relative">
        {/* Base Track Line */}
        <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-neutral-200 -translate-x-1/2 rounded-full" />

        {/* Active Progress Line */}
        <motion.div
          style={{ scaleY, transformOrigin: "top" }}
          className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-neutral-900 -translate-x-1/2 rounded-full z-10"
        />

        {/* Experience Cards */}
        <div className="space-y-12 md:space-y-16">
          {EXPERIENCES.map((item, idx) => {
            const isEven = idx % 2 === 0;
            const Icon = item.type === "work" ? Briefcase : Users;

            return (
              <div key={item.id} className="relative flex items-center">
                {/* Center Node Icon */}
                <motion.div
                  initial={{
                    backgroundColor: "#ffffff",
                    color: "#a3a3a3",
                    borderColor: "#e5e5e5",
                  }}
                  whileInView={{
                    backgroundColor: "#171717",
                    color: "#ffffff",
                    borderColor: "#171717",
                    scale: 1.05,
                  }}
                  viewport={{ margin: "-20% 0px -35% 0px" }}
                  transition={{ duration: 0.25 }}
                  className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6 w-9 h-9 rounded-full border flex items-center justify-center z-20 shadow-2xs"
                >
                  <Icon className="w-4 h-4" />
                </motion.div>

                {/* Card Wrapper */}
                <div className="w-full flex">
                  <div
                    className={`w-full md:w-[calc(50%-2.5rem)] pl-12 md:pl-0 ${
                      isEven ? "md:mr-auto" : "md:ml-auto"
                    }`}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-neutral-200/80 shadow-2xs hover:border-neutral-300 hover:shadow-md transition-all duration-300 group">
                        <div className="flex flex-col gap-1.5 mb-4">
                          <div className="flex items-center justify-between gap-2 flex-wrap">
                            <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-neutral-100 text-neutral-700 border border-neutral-200/70">
                              {item.category}
                            </span>
                            <span className="flex items-center gap-1.5 text-neutral-400 text-xs font-mono">
                              <Calendar className="w-3.5 h-3.5" />
                              {item.period}
                            </span>
                          </div>

                          <h3 className="text-base sm:text-lg font-bold text-neutral-900 tracking-tight mt-1 group-hover:text-black transition-colors">
                            {item.role}
                          </h3>

                          <div className="flex items-center justify-between text-xs font-medium text-neutral-500">
                            <span>{item.company}</span>
                            <span className="flex items-center gap-1 font-mono text-neutral-400 text-[11px]">
                              <MapPin className="w-3 h-3" />
                              {item.location}
                            </span>
                          </div>
                        </div>

                        <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6">
                          {item.description}
                        </p>

                        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-neutral-100">
                          {item.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-3 py-1 text-[11px] font-mono font-medium rounded-xl bg-neutral-50 text-neutral-600 border border-neutral-200/80"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
