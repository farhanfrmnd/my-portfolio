// components/TextLoop.tsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface TextLoopProps {
  text?: string;
  texts?: string[];
  shape?: string;
  speed?: number; // Nilai lebih besar = lebih lambat/halus
  direction?: "forward" | "backward";
  separator?: string;
  curviness?: number;
  fontSize?: number;
  fontWeight?: number;
  letterSpacing?: number;
  uppercase?: boolean;
  color?: string;
  ribbon?: boolean;
  ribbonColor?: string;
  ribbonWidth?: number;
  pauseOnHover?: boolean;
}

export default function TextLoop({
  text = "Portfolio",
  texts,
  speed = 40, // Nilai default diperlambat
  direction = "forward",
  separator = "✦",
  fontSize = 28, // Ukuran font default dikecilkan
  fontWeight = 800,
  letterSpacing = 2,
  uppercase = true,
  color = "#ffffff",
  ribbon = true,
  ribbonColor = "#000000",
  ribbonWidth = 56, // Tinggi pita/banner dikecilkan
  pauseOnHover = false,
}: TextLoopProps) {
  const [isPaused, setIsPaused] = useState(false);

  // Ambil array texts jika ada, atau gunakan text tunggal
  const items = texts && texts.length > 0 ? texts : [text];

  // Duplikasi item agar pengulangan teks tidak pernah terputus di layar lebar
  const repeatedItems = Array(20).fill(items).flat();

  // Durasi diperhitungkan agar animasi berjalan sangat mulus dan santai
  const duration = speed;
  const xAnimation = direction === "forward" ? ["0%", "-50%"] : ["-50%", "0%"];

  return (
    <div
      className="relative overflow-hidden w-full flex items-center select-none"
      style={{
        backgroundColor: ribbon ? ribbonColor : "transparent",
        height: ribbon ? `${ribbonWidth}px` : "auto",
      }}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      <motion.div
        className="flex items-center gap-10 whitespace-nowrap min-w-max"
        animate={isPaused ? { x: 0 } : { x: xAnimation }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: duration,
          ease: "linear",
        }}
      >
        {repeatedItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-10"
            style={{
              color,
              fontSize: `${fontSize}px`,
              fontWeight,
              letterSpacing: `${letterSpacing}px`,
              textTransform: uppercase ? "uppercase" : "none",
            }}
          >
            <span>{item}</span>
            {/* Bintang separator menggunakan warna putih penuh tanpa opacity */}
            {separator && <span style={{ color }}>{separator}</span>}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
