"use client";
import { motion } from "framer-motion";
import React from "react";

interface SectionHeadingProps {
  title: string;
  badgeText?: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  title,
  badgeText,
  subtitle,
  align = "center"
}: SectionHeadingProps) {
  const isLeft = align === "left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-12 md:mb-16 flex flex-col ${isLeft ? "items-start text-left" : "items-center text-center"}`}
    >
      {badgeText && (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest text-purple-400 bg-purple-500/10 border border-purple-500/20 uppercase mb-4">
          <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
          {badgeText}
        </span>
      )}

      <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
        {title.split(" ").map((word, idx) => {
          const isLast = idx === title.split(" ").length - 1;
          return (
            <span key={idx} className={isLast ? "text-gradient block sm:inline" : "text-white mr-2 sm:mr-3"}>
              {word}{" "}
            </span>
          );
        })}
      </h2>

      {subtitle && (
        <p className="max-w-2xl text-xs sm:text-sm text-slate-400 font-medium leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
