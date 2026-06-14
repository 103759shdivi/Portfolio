"use client";
import React from "react";
import { motion } from "framer-motion";

interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onAnimationStart" | "onDragStart" | "onDragEnd" | "onDrag"> {
  variant?: "primary" | "secondary" | "glow" | "outline";
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({
  variant = "primary",
  children,
  icon,
  iconPosition = "right",
  className = "",
  onClick,
  ...props
}: ButtonProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case "glow":
        return "bg-gradient-to-r from-purple-500 via-purple-600 to-emerald-500 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 border-none";
      case "primary":
        return "glass-panel bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 border-purple-500/30 hover:border-purple-500/60 font-semibold";
      case "secondary":
        return "glass-panel bg-slate-900/60 hover:bg-slate-900/90 text-slate-200 border-white/5 hover:border-white/15 font-medium";
      case "outline":
        return "border border-slate-700 bg-transparent hover:bg-slate-800 hover:text-white text-slate-300 font-medium";
      default:
        return "";
    }
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm tracking-wide transition-all cursor-pointer select-none border ${getVariantStyles()} ${className}`}
      {...props}
    >
      {icon && iconPosition === "left" && <span className="flex-shrink-0">{icon}</span>}
      {children}
      {icon && iconPosition === "right" && <span className="flex-shrink-0">{icon}</span>}
    </motion.button>
  );
}
