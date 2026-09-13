"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, ExternalLink, Award } from "lucide-react";

interface ProjectTemplate {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  detailUrl?: string;
}

interface CertificationTemplate {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  credentialUrl?: string;
}

const TECH_ICONS: Record<string, string> = {
  Unity: "https://cdn.simpleicons.org/unity/000000",
  "C++": "https://cdn.simpleicons.org/cplusplus",
  Figma: "https://cdn.simpleicons.org/figma",
  Android: "https://cdn.simpleicons.org/android",
  Arduino: "https://cdn.simpleicons.org/arduino",
  Firebase: "https://cdn.simpleicons.org/firebase",
  HTML: "https://cdn.simpleicons.org/html5",
};

// Komponen ikon di luar kartu dengan stroke awal dan saat hover menjadi background putih & stroke lebih gelap
function ProjectTag({ name }: { name: string }) {
  const iconUrl = TECH_ICONS[name];
  const [hasError, setHasError] = useState(false);

  if (!iconUrl || hasError) return null;

  return (
    <div
      title={name}
      className="p-2 rounded-xl bg-neutral-100/60 border border-neutral-200/80 hover:bg-white hover:border-neutral-400 hover:shadow-2xs transition-all duration-200 flex items-center justify-center cursor-default shrink-0"
    >
      <img
        src={iconUrl}
        alt={name}
        className="w-3.5 h-3.5 object-contain"
        onError={() => setHasError(true)}
      />
    </div>
  );
}

// Komponen interaktif khusus di dalam pop-up (ikon minimalis yang memanjang menampilkan nama saat di-hover)
function TechIcon({ name }: { name: string }) {
  const iconUrl = TECH_ICONS[name];
  const [hasError, setHasError] = useState(false);

  if (!iconUrl || hasError) return null;

  return (
    <div className="group/tech relative flex items-center gap-0 hover:gap-1.5 px-2 py-1.5 rounded-xl bg-neutral-50 border border-neutral-200/80 hover:bg-white hover:border-neutral-300 transition-all duration-300 cursor-default overflow-hidden shrink-0 shadow-2xs">
      <img
        src={iconUrl}
        alt={name}
        className="w-3.5 h-3.5 object-contain shrink-0"
        onError={() => setHasError(true)}
      />
      <span className="text-[11px] font-mono text-neutral-700 max-w-0 opacity-0 group-hover/tech:max-w-[120px] group-hover/tech:opacity-100 transition-all duration-300 ease-in-out whitespace-nowrap overflow-hidden">
        {name}
      </span>
    </div>
  );
}

const PROJECTS: ProjectTemplate[] = [
  {
    id: "1",
    number: "01",
    title: "Automatic Vacuum Cleaning Robots",
    category: "Robotics & Embedded",
    description:
      "An autonomous Arduino-based vacuum cleaning robot engineered to detect obstacles and automatically clear small debris. Integrated with ultrasonic sensors for real-time obstacle avoidance, DC motors for precise maneuvering, and a custom suction mechanism, achieving 90% navigation accuracy in automated indoor cleaning routines.",
    image: "/projects/project-1.png",
    tags: ["Arduino", "C++"],
    detailUrl: "#",
  },
  {
    id: "2",
    number: "02",
    title: "ARmory - Markerless AR App",
    category: "Mobile & AR",
    description:
      "An interactive Android application utilizing Markerless Augmented Reality (AR) to visualize 10 traditional Sumatran weapons in 3D. Built with Unity 3D, Vuforia SDK, and C#, it enables 3D object manipulation, historical insights, and interactive quizzes on real-world flat surfaces.",
    image: "/projects/project-2.png",
    tags: ["Unity", "Figma", "Android"],
    detailUrl:
      "https://drive.google.com/drive/folders/15XIEiMhJPIRhzZg7DmcxDxZsKtFVoEYT?usp=sharing",
  },
  {
    id: "3",
    number: "03",
    title: "Smart Irrigation System",
    category: "Embedded Systems",
    description:
      "An autonomous Arduino-based smart irrigation system engineered to optimize agricultural plant watering through real-time soil condition monitoring. The system uses soil moisture sensors to automatically trigger water pumps via relay modules when soil dryness is detected. Integrated with ultrasonic level sensors for reservoir monitoring and an LCD display for live system status, reducing water waste and maximizing irrigation efficiency.",
    image: "/projects/project-3.png",
    tags: ["Arduino", "C++"],
    detailUrl: "#",
  },
  {
    id: "4",
    number: "04",
    title: "LPG Gas Mass Monitoring System",
    category: "Embedded Systems",
    description:
      "An autonomous, microcontroller-based LPG mass monitoring system engineered to track the real-time weight of gas cylinders and prevent unexpected outages. Built using an Arduino Uno integrated with a high-precision load cell sensor and HX711 amplifier module, the system continuously calculates cylinder mass and displays live metrics on an LCD screen. Featuring a programmable safety threshold, it triggers dual audio-visual alerts via a buzzer and LED indicators whenever gas levels drop below critical limits, ensuring timely replacements and enhanced household safety.",
    image: "/projects/project-4.png",
    tags: ["Arduino", "C++"],
    detailUrl: "#",
  },
  {
    id: "5",
    number: "05",
    title: "BTraffic",
    category: "Internet of Things (IoT)",
    description:
      "An innovative IoT-based smart traffic monitoring system that estimates road congestion using Bluetooth Low Energy (BLE) signals instead of traditional cameras. Powered by an ESP32 microcontroller, the device scans nearby BLE devices, filters signals by RSSI strength, and counts unique detections to approximate real-time vehicle density. The system dynamically classifies traffic conditions such as smooth or congested and syncs live metrics and sequential logs to Firebase Realtime Database for remote tracking via a web dashboard. This project showcases practical expertise in embedded systems, wireless protocols, real-time data streaming, and cloud integration for modern smart city infrastructures.",
    image: "/projects/project-5.png",
    tags: ["C++", "Firebase", "HTML"],
    detailUrl: "https://youtu.be/J8Qr0RRU5_o?si=ZG6WMpLHDkSgqw_y",
  },
  {
    id: "6",
    number: "06",
    title: "Mobile Money",
    category: "UI/UX Design",
    description:
      "A mobile banking application that enables users to securely manage their finances through features such as login/logout, balance inquiry, cash withdrawal, deposits, and money transfers. Designed with a clean and intuitive interface, the app provides smooth navigation and efficient transaction flows to deliver a simple and reliable digital banking experience.",
    image: "/projects/project-6.png",
    tags: ["Figma"],
    detailUrl: "#",
  },
];

const CERTIFICATIONS: CertificationTemplate[] = [
  {
    id: "1",
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    issueDate: "2024",
    credentialId: "AWS-12345678",
    credentialUrl: "https://aws.amazon.com",
  },
  {
    id: "2",
    title: "Meta Front-End Developer Professional",
    issuer: "Meta (Coursera)",
    issueDate: "2023",
    credentialId: "META-87654321",
    credentialUrl: "https://coursera.org",
  },
  {
    id: "3",
    title: "Sertifikat Pelatihan / Offline",
    issuer: "Lembaga Pelatihan Nasional",
    issueDate: "2023",
    credentialId: "CERT-999000",
    credentialUrl: "#",
  },
];

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] =
    useState<ProjectTemplate | null>(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  return (
    <div className="py-20 px-4 sm:px-6 max-w-6xl mx-auto overflow-hidden flex flex-col gap-24">
      {/* Projects Section */}
      <section id="projects">
        <div className="mb-12">
          <h2 className="text-xs font-mono font-semibold tracking-[0.2em] text-neutral-400 uppercase mb-2">
            PROJECTS
          </h2>
          <p className="text-lg sm:text-xl font-bold text-neutral-900 tracking-tight">
            Featured Portfolio Showcase
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((item, idx) => {
            const isEven = idx % 2 === 0;
            const validTags = item.tags.filter((tag) => TECH_ICONS[tag]);

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.4,
                  delay: idx * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative flex flex-col justify-between p-6 rounded-3xl bg-white border border-neutral-200/80 shadow-2xs hover:border-neutral-300 hover:shadow-md transition-all duration-300"
              >
                <div className="flex flex-col gap-4">
                  {isEven ? (
                    <>
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-2xl sm:text-3xl font-extrabold font-mono text-neutral-300 group-hover:text-neutral-900 transition-colors">
                            {item.number}
                          </span>
                          <span className="text-[10px] font-mono font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-600 border border-neutral-200/70">
                            {item.category}
                          </span>
                        </div>

                        <h3 className="text-base font-bold text-neutral-900 tracking-tight group-hover:text-neutral-600 transition-colors">
                          {item.title}
                        </h3>
                      </div>

                      <div className="relative aspect-video w-full rounded-2xl bg-neutral-100 overflow-hidden border border-neutral-200/70">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="relative aspect-video w-full rounded-2xl bg-neutral-100 overflow-hidden border border-neutral-200/70">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                        />
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-2xl sm:text-3xl font-extrabold font-mono text-neutral-300 group-hover:text-neutral-900 transition-colors">
                            {item.number}
                          </span>
                          <span className="text-[10px] font-mono font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-600 border border-neutral-200/70">
                            {item.category}
                          </span>
                        </div>

                        <h3 className="text-base font-bold text-neutral-900 tracking-tight group-hover:text-neutral-600 transition-colors">
                          {item.title}
                        </h3>
                      </div>
                    </>
                  )}
                </div>

                <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {validTags.map((tag) => (
                      <ProjectTag key={tag} name={tag} />
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedProject(item)}
                    className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-xl bg-neutral-900 text-white text-xs font-mono font-medium hover:bg-neutral-800 transition-colors shadow-2xs cursor-pointer shrink-0"
                  >
                    <span>Detail</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications">
        <div className="mb-12">
          <h2 className="text-xs font-mono font-semibold tracking-[0.2em] text-neutral-400 uppercase mb-2">
            CERTIFICATIONS
          </h2>
          <p className="text-lg sm:text-xl font-bold text-neutral-900 tracking-tight">
            Licenses & Professional Credentials
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.4,
                delay: idx * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative flex flex-col justify-between p-6 rounded-3xl bg-white border border-neutral-200/80 shadow-2xs hover:border-neutral-300 hover:shadow-md transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-2xl bg-neutral-900 text-white shadow-2xs">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-medium text-neutral-400">
                    {cert.issueDate}
                  </span>
                </div>

                <h3 className="text-base font-bold text-neutral-900 tracking-tight group-hover:text-neutral-600 transition-colors mb-1">
                  {cert.title}
                </h3>
                <p className="text-xs font-mono text-neutral-500 mb-4">
                  {cert.issuer}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center justify-between min-h-[42px]">
                {cert.credentialId ? (
                  <span className="text-[11px] font-mono text-neutral-400">
                    ID: {cert.credentialId}
                  </span>
                ) : (
                  <span />
                )}

                {cert.credentialUrl && cert.credentialUrl !== "#" && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-xl bg-neutral-900 text-white text-xs font-mono font-medium hover:bg-neutral-800 transition-colors shadow-2xs shrink-0 ml-auto"
                  >
                    <span>Verify</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modal Detail Project */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-neutral-950/70 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200/80 shadow-2xl"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-neutral-100 hover:bg-neutral-900 hover:text-white text-neutral-500 transition-all cursor-pointer z-20"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
                {/* Left Column: Image & Technologies Used */}
                <div className="md:col-span-5 w-full flex flex-col gap-5">
                  <div className="relative aspect-4/3 md:aspect-square w-full rounded-2xl bg-neutral-100 overflow-hidden border border-neutral-200/70 shadow-2xs">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>

                  <div>
                    <span className="text-[10px] font-mono font-semibold text-neutral-400 uppercase tracking-wider block mb-2">
                      Technologies Used
                    </span>
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {selectedProject.tags
                        .filter((tag) => TECH_ICONS[tag])
                        .map((tag) => (
                          <TechIcon key={tag} name={tag} />
                        ))}
                    </div>
                  </div>
                </div>

                {/* Right Column: Title, Description, & Button at Bottom Right */}
                <div className="md:col-span-7 flex flex-col justify-between space-y-5 h-full">
                  <div>
                    <div className="flex items-center gap-3 mb-3 pr-8">
                      <span className="text-3xl font-extrabold font-mono text-neutral-300">
                        {selectedProject.number}
                      </span>
                      <span className="text-[10px] font-mono font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-600 border border-neutral-200/70">
                        {selectedProject.category}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight mb-3">
                      {selectedProject.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                      {selectedProject.description}
                    </p>
                  </div>

                  {selectedProject.detailUrl &&
                    selectedProject.detailUrl !== "#" && (
                      <div className="pt-4 border-t border-neutral-100 flex justify-end">
                        <a
                          href={selectedProject.detailUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-900 text-white text-xs font-mono font-semibold hover:bg-neutral-800 transition-all shadow-2xs w-full sm:w-auto"
                        >
                          <span>View</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
