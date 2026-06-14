"use client";
import { motion, Variants } from "framer-motion";
import React from "react";
import Image from "next/image";
import Button from "@/components/Shared/Button";
import { portfolioData } from "@/data/portfolioData";

const techLogos = [
  {
    name: "React",
    x: -95,
    y: -55,
    icon: (
      <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-6 h-6 fill-none stroke-[#61dafb] stroke-[1.2]">
        <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
        <g>
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    )
  },
  {
    name: "Next.js",
    x: 95,
    y: -55,
    icon: (
      <svg viewBox="0 0 180 180" className="w-6 h-6 fill-white">
        <mask id="next-mask">
          <circle cx="90" cy="90" r="90" fill="white" />
        </mask>
        <circle cx="90" cy="90" r="90" fill="black" />
        <g mask="url(#next-mask)">
          <path d="M149.508 157.52L69.142 54H54v72h13.5V67.87l66.233 85.342a90.04 90.04 0 01-14.225 4.308z" fill="url(#next-gradient)" />
          <rect x="115.5" y="54" width="13.5" height="72" fill="url(#next-gradient)" />
        </g>
        <defs>
          <linearGradient id="next-gradient" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    )
  },
  {
    name: "TypeScript",
    x: -110,
    y: 25,
    icon: (
      <svg viewBox="0 0 100 100" className="w-5 h-5 rounded-[4px] fill-[#3178c6]">
        <rect width="100" height="100" />
        <text x="32" y="72" fill="white" fontFamily="sans-serif" fontWeight="bold" fontSize="36">TS</text>
      </svg>
    )
  },
  {
    name: "Node.js",
    x: 110,
    y: 25,
    icon: (
      <svg viewBox="0 0 256 256" className="w-6 h-6 fill-none">
        <path d="M136.2 21.3a18 18 0 0 0-16.4 0L42.5 66a18 18 0 0 0-9 15.6V172a18 18 0 0 0 9 15.6l77.3 44.7a18 18 0 0 0 16.4 0l77.3-44.7a18 18 0 0 0 9-15.6V81.6a18 18 0 0 0-9-15.6L136.2 21.3z" fil[...]
        <path d="M128 4L34.7 57.8C25.5 63.1 20 72.7 20 83.3v107.5c0 10.6 5.5 20.2 14.7 25.5l93.3 53.8c9.2 5.3 20.3 5.3 29.5 0l93.3-53.8c9.2-5.3 14.7-14.9 14.7-25.5V83.3c0-10.6-5.5-20.2-14.7-25.5L1[...]
        <path d="M128 15v226l88-50.8V65.8L128 15z" fill="#66cc33" />
        <path d="M128 65v126l44-25.4V90.4L128 65z" fill="#339933" />
      </svg>
    )
  },
  {
    name: "Tailwind CSS",
    x: 0,
    y: -110,
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565[...]
      </svg>
    )
  },
  {
    name: "Git",
    x: 0,
    y: 110,
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#F05032]">
        <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.187 0L8.708 2.624l2.76 2.76c.645-.215 1.379-.07 1.889.44.516.515.655 1.258.428 1.9l2.747 2.748c.644-.227 1.387-.087 1.902.428.77.7[...]
      </svg>
    )
  }
];

const floatingVariants = (index: number): Variants => ({
  initial: { scale: 0, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    y: [0, -8, 0],
    transition: {
      scale: { type: "spring", stiffness: 80, delay: index * 0.12 },
      opacity: { delay: index * 0.12 },
      y: {
        repeat: Infinity,
        duration: 3 + (index % 3) * 0.5,
        ease: "easeInOut",
        delay: index * 0.15
      }
    }
  }
});

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-4xl mx-auto px-4 py-24 text-center">

        {/* Animated Profile & Tech Stack Widget */}
        <div className="relative w-72 h-72 mx-auto mb-10 flex items-center justify-center">
          {/* Cyberpunk rotating outer ring */}
          <div className="absolute inset-0 border border-purple-500/10 rounded-full animate-[spin_80s_linear_infinite]" />
          <div className="absolute inset-4 border border-dashed border-emerald-500/10 rounded-full animate-[spin_50s_linear_infinite_reverse]" />

          {/* Subtle neon glowing backdrop */}
          <div className="absolute w-44 h-44 bg-gradient-to-tr from-purple-600 to-emerald-500 rounded-full blur-3xl opacity-25 animate-pulse" />

          {/* Central Profile Image with a glowing gradient border */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 90, damping: 15 }}
            className="relative w-40 h-40 rounded-full p-1 bg-gradient-to-tr from-purple-500 via-pink-500 to-emerald-400 shadow-[0_0_30px_rgba(168,85,247,0.25)] z-10 hover:shadow-[0_0_40px_rgba(1[...]
          >
            <div className="w-full h-full rounded-full overflow-hidden bg-slate-950 relative">
              <Image
                src="/kavinda.jpeg"
                alt="Kavinda Sudesh"
                fill
                className="object-cover"
                sizes="160px"
                priority
              />
            </div>
          </motion.div>

          {/* Orbiting / Floating Tech Stack Badges */}
          {techLogos.map((tech, index) => (
            <motion.div
              key={tech.name}
              variants={floatingVariants(index)}
              initial="initial"
              animate="animate"
              whileHover={{ scale: 1.2, zIndex: 30 }}
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                marginLeft: tech.x - 24, // Center aligning the badge (-width/2)
                marginTop: tech.y - 24,  // Center aligning the badge (-height/2)
              }}
              className="group z-20 flex items-center justify-center w-12 h-12 rounded-full bg-slate-900/90 border border-slate-800 hover:border-purple-400/80 hover:shadow-[0_0_20px_rgba(168,85,2[...]
            >
              <div className="w-6 h-6 flex items-center justify-center">
                {tech.icon}
              </div>

              {/* Custom tooltip */}
              <span className="absolute bottom-full mb-3 scale-0 group-hover:scale-100 transition-all duration-200 px-2 py-1 text-[11px] font-bold tracking-wide text-purple-100 bg-slate-950 borde[...]
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.h1 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-black text-white">{portfolioData.personalDetails.name}</motion.h1>
        <motion.p initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="text-xl text-purple-300 mt-3">{portfolioData.personalDetails.title}</motion[...]
        <motion.p initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }} className="text-slate-400 mt-6 max-w-2xl mx-auto">{portfolioData.personalDetails.bio}<[...]
        <motion.div className="mt-8 flex justify-center gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.18 }}>
          <Button variant="glow" onClick={() => { const el = document.getElementById('contact'); el?.scrollIntoView({ behavior: 'smooth' }) }}>Contact Me</Button>
          <a href={portfolioData.personalDetails.cvUrl} className="inline-block"><Button variant="outline">Download CV</Button></a>
        </motion.div>
      </div>
    </section>
  );
}
