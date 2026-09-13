// components/Contact.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, MessageSquare, ArrowUpRight } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.08,
      ease: EASE,
    },
  }),
};

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-5xl mx-auto">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: EASE }}
        className="mb-8"
      >
        <p className="text-xs tracking-[0.3em] uppercase font-bold text-neutral-400">
          Contact
        </p>
      </motion.div>

      {/* Bento Grid (Disesuaikan dengan max-w-5xl dan grid col-span-5 & 7 seperti section About) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
        {/* Info Card (col-span-5) */}
        <motion.div
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          whileHover={{ y: -4, transition: { duration: 0.3, ease: "easeOut" } }}
          variants={cardVariants}
          className="md:col-span-5 p-7 sm:p-8 rounded-3xl bg-white border border-neutral-200/80 flex flex-col justify-between h-full hover:border-neutral-300 shadow-2xs hover:shadow-md transition-all duration-300 transform-gpu"
        >
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-neutral-900 text-white flex items-center justify-center shadow-xs shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold tracking-widest uppercase text-neutral-400">
                Get in Touch
              </span>
            </div>

            <div>
              <h3 className="text-lg font-bold text-neutral-900 tracking-tight">
                Let&apos;s talk about your project
              </h3>
              <p className="text-neutral-500 text-xs mt-2 font-medium leading-relaxed">
                Punya ide menarik atau butuh partner kolaborasi? Mari diskusikan
                bagaimana kita bisa mewujudkannya bersama.
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-neutral-100 text-xs font-mono mt-6">
            <div className="flex items-center justify-between">
              <span className="text-neutral-400">Email:</span>
              <a
                href="mailto:contact@yoursaas.ai"
                className="font-semibold text-neutral-900 hover:text-neutral-600 transition-colors flex items-center gap-1"
              >
                contact@yoursaas.ai
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Form Card (col-span-7) */}
        <motion.div
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          whileHover={{ y: -4, transition: { duration: 0.3, ease: "easeOut" } }}
          variants={cardVariants}
          className="md:col-span-7 p-7 sm:p-8 rounded-3xl bg-white border border-neutral-200/80 flex flex-col justify-between h-full hover:border-neutral-300 shadow-2xs hover:shadow-md transition-all duration-300 transform-gpu"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-2xl bg-neutral-900 text-white flex items-center justify-center shadow-xs shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-neutral-900 tracking-tight">
                Send a Message
              </h3>
              <p className="text-xs text-neutral-500 font-mono mt-0.5">
                Isi form di bawah ini
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-3.5 flex-1 flex flex-col justify-between"
          >
            <div className="space-y-3.5">
              <div>
                <label className="block text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-wider mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Masukkan nama lengkap"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  className="w-full px-4 py-2 rounded-xl bg-neutral-50 border border-neutral-200/80 text-neutral-900 placeholder:text-neutral-400 text-xs font-mono focus:outline-none focus:border-neutral-900 focus:bg-white transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-wider mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="nama@domain.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-2 rounded-xl bg-neutral-50 border border-neutral-200/80 text-neutral-900 placeholder:text-neutral-400 text-xs font-mono focus:outline-none focus:border-neutral-900 focus:bg-white transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-wider mb-1">
                  Message
                </label>
                <textarea
                  rows={3}
                  placeholder="Tuliskan pesan..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-2 rounded-xl bg-neutral-50 border border-neutral-200/80 text-neutral-900 placeholder:text-neutral-400 text-xs font-mono focus:outline-none focus:border-neutral-900 focus:bg-white transition-all resize-none"
                  required
                />
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-neutral-900 text-white text-xs font-mono font-medium hover:bg-neutral-800 active:scale-95 transition-all shadow-2xs cursor-pointer"
              >
                <span>Send Message</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
