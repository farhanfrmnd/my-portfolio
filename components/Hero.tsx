"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yScroll = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacityScroll = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="home"
      className="min-h-screen w-full relative flex flex-col justify-between items-center overflow-hidden pt-28 sm:pt-32 select-none"
    >
      {/* Container Teks */}
      <div className="w-full text-center z-0 px-4 flex flex-col items-center gap-2.5 sm:gap-3.5 pointer-events-none">
        <div className="overflow-hidden py-1">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.1, ease: EASE }}
            className="text-xs sm:text-sm md:text-base tracking-[0.35em] uppercase font-bold text-neutral-500 antialiased"
          >
            SOFTWARE ENGINEER
          </motion.p>
        </div>

        <div className="overflow-hidden py-1 max-w-5xl px-4">
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.2, ease: EASE }}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-black tracking-tight leading-none text-neutral-900 whitespace-nowrap antialiased"
          >
            MUHAMMAD FARHAN FARMANDA
          </motion.h1>
        </div>
      </div>

      {/* Foto Utama - Ukuran diperbesar */}
      <motion.div
        style={{ y: yScroll, opacity: opacityScroll }}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3, ease: EASE }}
        className="relative w-[320px] h-[400px] sm:w-[390px] sm:h-[490px] md:w-[460px] md:h-[560px] pointer-events-none z-10 -mb-6 sm:-mb-10 transform-gpu"
      >
        <Image
          src="/photo.png"
          alt="Muhammad Farhan Farmanda"
          fill
          className="object-contain object-bottom"
          priority
        />
      </motion.div>
    </section>
  );
}
