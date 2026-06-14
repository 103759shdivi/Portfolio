"use client";
import { ArrowUp } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { motion } from "framer-motion";

export default function Footer() {
  const scrollToTop = () => {
    const target = document.getElementById("home");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full border-t border-white/5 bg-slate-950/40 py-8 px-6 mt-16">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left Side: Copyright */}
        <p className="text-[10px] sm:text-xs font-mono text-slate-500 font-semibold text-center sm:text-left select-none">
          © {new Date().getFullYear()} {portfolioData.personalDetails.name}. Crafted with Next.js 15 & Framer Motion.
        </p>

        {/* Right Side: Back to top button */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-lg border border-white/10 bg-slate-900/50 hover:bg-slate-900 hover:border-purple-500/50 text-slate-400 hover:text-purple-400 transition-all cursor-pointer shadow-lg"
          title="Back to Top"
        >
          <ArrowUp className="w-4.5 h-4.5" />
        </motion.button>
      </div>
    </footer>
  );
}
