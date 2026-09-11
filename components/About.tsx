"use client";
import { motion } from "framer-motion";
import { GraduationCap, Code2, User } from "lucide-react";

const SMOOTH_EASE = [0.16, 1, 0.3, 1];

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.08,
      ease: SMOOTH_EASE,
    },
  }),
};

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto select-none">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: SMOOTH_EASE }}
        className="mb-8"
      >
        <p className="text-xs tracking-[0.3em] uppercase font-bold text-neutral-400">
          About
        </p>
      </motion.div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
        {/* Code Editor */}
        <motion.div
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          whileHover={{ y: -4, transition: { duration: 0.3, ease: "easeOut" } }}
          variants={cardVariants}
          className="md:col-span-7 rounded-3xl bg-neutral-950 border border-neutral-800 text-neutral-200 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 transform-gpu"
        >
          {/* Code Editor Top Bar */}
          <div className="flex items-center justify-between px-5 py-3.5 bg-neutral-900 border-b border-neutral-800/80">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#FF5F56] inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E] inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#27C93F] inline-block" />
            </div>
            <span className="text-xs font-mono text-neutral-400 font-medium">
              developer.ts
            </span>
            <div className="w-12" />
          </div>

          {/* Code Body */}
          <div className="p-7 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-neutral-300 flex-1 flex flex-col justify-center">
            <p>
              <span className="text-purple-400">const</span>{" "}
              <span className="text-yellow-300">Developer</span> = {"{"}
            </p>
            <p className="pl-4 sm:pl-6">
              <span className="text-red-400">name</span>:{" "}
              <span className="text-emerald-300">
                &quot;Muhammad Farhan Farmanda&quot;
              </span>
              ,
            </p>
            <p className="pl-4 sm:pl-6">
              <span className="text-red-400">role</span>:{" "}
              <span className="text-emerald-300">
                &quot;Software Engineer&quot;
              </span>
              ,
            </p>
            <p className="pl-4 sm:pl-6">
              <span className="text-red-400">location</span>:{" "}
              <span className="text-emerald-300">
                &quot;Bekasi, Indonesia&quot;
              </span>
              ,
            </p>
            <p className="pl-4 sm:pl-6">
              <span className="text-red-400">Status</span>:{" "}
              <span className="text-emerald-300">
                &quot;Open for opportunities&quot;
              </span>
              ,
            </p>
            <p>{"};"}</p>
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          whileHover={{ y: -4, transition: { duration: 0.3, ease: "easeOut" } }}
          variants={cardVariants}
          className="md:col-span-5 p-7 sm:p-8 rounded-3xl bg-white border border-neutral-200/80 flex flex-col justify-between gap-6 hover:border-neutral-300 shadow-2xs hover:shadow-md transition-all duration-300 transform-gpu"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-neutral-900 text-white flex items-center justify-center shadow-xs shrink-0">
              <GraduationCap className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold tracking-widest uppercase text-neutral-400">
              Education
            </span>
          </div>

          <div>
            <h3 className="text-lg font-bold text-neutral-900 tracking-tight">
              Computer Engineering
            </h3>
            <p className="text-neutral-500 text-xs mt-1 font-medium">
              Bachelor&apos;s Degree - Universitas Syiah Kuala
            </p>
            <p className="text-neutral-400 text-xs mt-3 font-medium flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 inline-block" />
              2022 - 2026
            </p>
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          whileHover={{ y: -4, transition: { duration: 0.3, ease: "easeOut" } }}
          variants={cardVariants}
          className="md:col-span-5 p-7 sm:p-8 rounded-3xl bg-white border border-neutral-200/80 flex flex-col justify-between gap-6 hover:border-neutral-300 shadow-2xs hover:shadow-md transition-all duration-300 transform-gpu"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-neutral-900 text-white flex items-center justify-center shadow-xs shrink-0">
              <Code2 className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold tracking-widest uppercase text-neutral-400">
              Tech Stack
            </span>
          </div>

          <div>
            <div className="flex flex-wrap gap-1.5">
              {[
                "TypeScript",
                "JavaScript",
                "Python",
                "C",
                "C++",
                "C#",
                "Java",
                "Next.js",
                "React",
                "Tailwind CSS",
                "IoT",
                "AR/VR",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-neutral-50 border border-neutral-200/80 text-neutral-700 hover:border-neutral-400 hover:bg-white transition-all cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* About Me Description */}
        <motion.div
          custom={4}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          whileHover={{ y: -4, transition: { duration: 0.3, ease: "easeOut" } }}
          variants={cardVariants}
          className="md:col-span-7 p-7 sm:p-8 rounded-3xl bg-white border border-neutral-200/80 flex flex-col justify-between gap-6 hover:border-neutral-300 shadow-2xs hover:shadow-md transition-all duration-300 transform-gpu"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-neutral-900 text-white flex items-center justify-center shadow-xs shrink-0">
              <User className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold tracking-widest uppercase text-neutral-400">
              About Me
            </span>
          </div>

          <div className="space-y-4 text-neutral-600 leading-relaxed text-sm">
            <p>
              Software Engineer with a{" "}
              <strong className="font-semibold text-neutral-900">
                Computer Engineering
              </strong>{" "}
              background, specializing in{" "}
              <strong className="font-semibold text-neutral-900">
                Web Development, IoT, and AR/VR solutions
              </strong>
              . I focus on building practical, reliable software that connects
              digital systems with real-world applications.
            </p>
            <p>
              My technical foundation includes extensive programming experience
              across Python, C, C++, C#, Java, JavaScript, and TypeScript,
              alongside hands-on work with IoT devices, AR/VR platforms, and web
              technologies. Backed by an engineering degree from{" "}
              <strong className="font-semibold text-neutral-900">
                Universitas Syiah Kuala
              </strong>{" "}
              and practical experience in technical systems maintenance and
              organizational leadership, I thrive in environments that require
              structured problem-solving and effective teamwork.
            </p>
            <p>
              Passionate about continuous learning and engineering software that
              works seamlessly.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
