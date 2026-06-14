"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, ChevronDown, ArrowUpRight, Code2 } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import Button from "@/components/Shared/Button";

const TYPED_ROLES = [
  "Software Engineer",
  "Full Stack Developer",
  "IT Executive & Specialist",
  "Creative Problem Solver"
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullText = TYPED_ROLES[roleIndex];
    const typingSpeed = isDeleting ? 30 : 80;

    if (!isDeleting && currentText === fullText) {
      // Wait before starting deletion
      timer = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && currentText === "") {
      timer = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % TYPED_ROLES.length);
      }, 100);
    } else {
      timer = setTimeout(() => {
        setCurrentText(
          isDeleting
            ? fullText.substring(0, currentText.length - 1)
            : fullText.substring(0, currentText.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  const handleScrollTo = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-4 bg-grid overflow-hidden"
    >
      {/* Background Decorative Blurs */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 rounded-full bg-purple-500/10 filter blur-3xl -z-10 animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-emerald-500/5 filter blur-3xl -z-10 animate-pulse-slow" style={{ animationDelay: "2s" }} />

      <div className="max-w-5xl w-full mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
        {/* Text Area */}
        <div className="md:col-span-7 flex flex-col items-start text-left order-2 md:order-1">
          {/* Avatar (place your photo at /public/profile.jpg) */}
          <motion.img
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            src="/profile.jpg"
            alt={portfolioData.personalDetails.name}
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-2 border-purple-500/30 mb-4"
          />
          {/* Status Chip */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            Open for Opportunities
          </motion.div>

          {/* Subtext Name */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-mono text-xs sm:text-sm text-purple-400 font-bold uppercase tracking-widest mb-1.5"
          >
            Hello World, I am
          </motion.p>

          {/* Name Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-3"
          >
            {portfolioData.personalDetails.name}
          </motion.h1>

          {/* Animated Role Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="h-10 text-lg sm:text-2xl font-bold font-mono text-slate-300 flex items-center mb-6"
          >
            <span>{currentText}</span>
            <span className="w-[3px] h-[22px] sm:h-[26px] bg-purple-500 ml-1.5 animate-pulse" />
          </motion.div>

          {/* Description Bio */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-slate-400 text-xs sm:text-sm md:text-base leading-relaxed max-w-lg mb-8 font-medium"
          >
            {portfolioData.personalDetails.bio}
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center gap-3 sm:gap-4"
          >
            <Button
              variant="glow"
              onClick={() => handleScrollTo("contact")}
              icon={<ArrowUpRight className="w-4 h-4" />}
            >
              Contact Me
            </Button>
            
            <Button
              variant="secondary"
              onClick={() => handleScrollTo("projects")}
            >
              View Projects
            </Button>

            <a href={portfolioData.personalDetails.cvUrl} download className="inline-block">
              <Button
                variant="outline"
                icon={<Download className="w-4 h-4" />}
                iconPosition="left"
              >
                Download CV
              </Button>
            </a>
          </motion.div>
        </div>

        {/* High-tech Orbits Graphic Area */}
        <div className="md:col-span-5 flex justify-center order-1 md:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center"
          >
            {/* Center Core Node */}
            <div className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 rounded-3xl border border-purple-500/30 bg-slate-900 flex items-center justify-center shadow-2xl shadow-purple-500/20">
              <Code2 className="w-10 h-10 text-purple-400 animate-pulse" />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-purple-500/10 to-emerald-500/10 -z-10 animate-pulse" />
            </div>

            {/* Orbit Outer Circle 1 */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              className="absolute w-48 h-48 sm:w-56 sm:h-56 rounded-full border border-dashed border-white/5 flex items-center justify-center"
            >
              {/* React Indicator Node */}
              <div className="absolute top-0 w-8 h-8 rounded-lg bg-slate-950/80 border border-white/10 flex items-center justify-center text-[10px] font-bold text-sky-400 font-mono shadow-md">
                JS
              </div>
              {/* TypeScript Node */}
              <div className="absolute bottom-0 w-8 h-8 rounded-lg bg-slate-950/80 border border-white/10 flex items-center justify-center text-[10px] font-bold text-purple-400 font-mono shadow-md">
                TS
              </div>
            </motion.div>

            {/* Orbit Outer Circle 2 */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
              className="absolute w-64 h-64 sm:w-76 sm:h-76 rounded-full border border-dashed border-white/5 flex items-center justify-center"
            >
              {/* MySQL Node */}
              <div className="absolute left-0 w-8 h-8 rounded-lg bg-slate-950/80 border border-white/10 flex items-center justify-center text-[10px] font-bold text-emerald-400 font-mono shadow-md">
                SQL
              </div>
              {/* Next.js Node */}
              <div className="absolute right-0 w-8 h-8 rounded-lg bg-slate-950/80 border border-white/10 flex items-center justify-center text-[10px] font-bold text-white font-mono shadow-md">
                NJS
              </div>
            </motion.div>

            {/* Extra Outer ambient halos */}
            <div className="absolute inset-0 border border-dashed border-purple-500/5 rounded-full scale-105 pointer-events-none animate-pulse-slow" />
            <div className="absolute inset-0 border border-dashed border-emerald-500/5 rounded-full scale-90 pointer-events-none animate-pulse-slow" style={{ animationDelay: "1s" }} />
          </motion.div>
        </div>
      </div>

      {/* Down Pointing Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer select-none" onClick={() => handleScrollTo("about")}>
        <span className="font-mono text-[9px] tracking-widest text-slate-500 uppercase">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-purple-400" />
        </motion.div>
      </div>
    </section>
  );
}
