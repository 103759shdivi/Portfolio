"use client";
import React from "react";
import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glowOnHover?: boolean;
  animateScroll?: boolean;
  delay?: number;
  style?: React.CSSProperties;
}

export default function Card({
  children,
  className = "",
  glowOnHover = true,
  animateScroll = true,
  delay = 0,
  style,
}: CardProps) {
  const base: React.CSSProperties = {
    borderRadius: "1rem",
    padding: "1.5rem",
    background: "rgba(15, 23, 42, 0.7)",
    border: "1px solid rgba(255,255,255,0.07)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
  };

  const mergedStyle: React.CSSProperties = { ...base, ...style };

  const hoverClass = glowOnHover ? "card-hover-glow" : "";

  if (animateScroll) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
        style={mergedStyle}
        className={`${hoverClass} ${className}`}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div style={mergedStyle} className={`${hoverClass} ${className}`}>
      {children}
    </div>
  );
}
