"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Send, CheckCircle2, User, MessageSquare } from "lucide-react";
import { sendEmail } from "@/app/actions/sendEmail";

const EASE = [0.16, 1, 0.3, 1] as const;

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      ease: EASE,
    },
  }),
};

const GmailIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={`${className} fill-current`} viewBox="0 0 24 24">
    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.272H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L12 9.545l8.073-6.052C21.69 2.28 24 3.434 24 5.457z" />
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const result = await sendEmail(formData);

    setIsSubmitting(false);

    if (result.success) {
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 4000);
    } else {
      alert("Gagal mengirim pesan: " + result.error);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Header Section */}
      <div className="mb-10">
        <h2 className="text-xs font-mono font-semibold tracking-[0.2em] text-neutral-400 uppercase mb-2">
          CONTACT
        </h2>
        <p className="text-lg sm:text-xl font-bold text-neutral-900 tracking-tight">
          Get In Touch
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
        {/* Contact Information */}
        <motion.div
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={cardVariants}
          className="md:col-span-5 p-6 sm:p-7 rounded-3xl bg-neutral-900 text-white border border-neutral-800 shadow-xl flex flex-col justify-between gap-6"
        >
          <div className="space-y-6">
            {/* Title */}
            <div className="flex items-center gap-2.5">
              <div className="p-2.5 rounded-xl bg-neutral-800 border border-neutral-700/80 text-neutral-300 shrink-0">
                <User className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-bold tracking-tight text-white">
                Contact Information
              </h3>
            </div>

            <div className="space-y-4 text-xs font-mono">
              {/* Gmail Item */}
              <div className="flex items-center gap-3 text-neutral-300">
                <div className="p-2.5 rounded-xl bg-neutral-800 border border-neutral-700/80 text-neutral-300 shrink-0">
                  <GmailIcon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="block text-[10px] text-neutral-400 uppercase tracking-wider font-semibold mb-0.5">
                    Email
                  </span>
                  <span className="truncate block text-neutral-300">
                    farhanfarmanda6@gmail.com
                  </span>
                </div>
              </div>

              {/* Phone Item */}
              <div className="flex items-center gap-3 text-neutral-300">
                <div className="p-2.5 rounded-xl bg-neutral-800 border border-neutral-700/80 text-neutral-300 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="block text-[10px] text-neutral-400 uppercase tracking-wider font-semibold mb-0.5">
                    Phone
                  </span>
                  <span className="block text-neutral-300">
                    +62 85156413209
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Connect Section */}
          <div className="pt-5 border-t border-neutral-800 space-y-3">
            <span className="block text-xs font-mono font-semibold text-neutral-400 uppercase tracking-wider">
              Connect with Me
            </span>
            <div className="flex items-center gap-3">
              {/* GitHub */}
              <a
                href="https://github.com/farhanfrmnd"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-neutral-800 border border-neutral-700/80 text-neutral-300 hover:text-white hover:bg-neutral-700 transition-all"
                aria-label="GitHub"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/muhammadfarhanfarmanda"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-neutral-800 border border-neutral-700/80 text-neutral-300 hover:text-white hover:bg-neutral-700 transition-all"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* Gmail */}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=farhanfarmanda6@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-neutral-800 border border-neutral-700/80 text-neutral-300 hover:text-white hover:bg-neutral-700 transition-all"
                aria-label="Gmail"
              >
                <GmailIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Send a Message */}
        <motion.div
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={cardVariants}
          className="md:col-span-7 p-6 sm:p-7 rounded-3xl bg-white border border-neutral-200/80 shadow-2xs hover:border-neutral-300 transition-all duration-300 flex flex-col justify-between gap-5"
        >
          {/* Title */}
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-neutral-900 text-white shrink-0">
              <MessageSquare className="w-4 h-4" />
            </div>
            <h3 className="text-lg font-bold tracking-tight text-neutral-900">
              Send a Message
            </h3>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-3.5 flex-1 flex flex-col justify-between"
          >
            <div className="space-y-3">
              {/* Column 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-mono font-semibold text-neutral-500 uppercase tracking-wider mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-3.5 py-2 rounded-xl bg-neutral-50 border border-neutral-200/80 text-neutral-900 text-xs font-mono placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 focus:bg-white transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono font-semibold text-neutral-500 uppercase tracking-wider mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="name@domain.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-3.5 py-2 rounded-xl bg-neutral-50 border border-neutral-200/80 text-neutral-900 text-xs font-mono placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 focus:bg-white transition-all"
                    required
                  />
                </div>
              </div>

              {/* Column 2 */}
              <div>
                <label className="block text-[11px] font-mono font-semibold text-neutral-500 uppercase tracking-wider mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full px-3.5 py-2 rounded-xl bg-neutral-50 border border-neutral-200/80 text-neutral-900 text-xs font-mono placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 focus:bg-white transition-all"
                  required
                />
              </div>

              {/* Column 3 */}
              <div>
                <label className="block text-[11px] font-mono font-semibold text-neutral-500 uppercase tracking-wider mb-1">
                  Message
                </label>
                <textarea
                  rows={3}
                  placeholder="Write your message..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-3.5 py-2 rounded-xl bg-neutral-50 border border-neutral-200/80 text-neutral-900 text-xs font-mono placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 focus:bg-white transition-all resize-none"
                  required
                />
              </div>
            </div>

            <div className="pt-1 flex items-center justify-between">
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="flex items-center gap-1.5 text-xs font-mono text-emerald-600 font-medium"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Message sent successfully!</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-900 text-white text-xs font-mono font-medium hover:bg-neutral-800 disabled:bg-neutral-400 transition-all shadow-2xs cursor-pointer ml-auto"
              >
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                <Send
                  className={`w-3.5 h-3.5 ${isSubmitting ? "animate-pulse" : ""}`}
                />
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
