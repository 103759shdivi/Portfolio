"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LOADING_STEPS = [
  "Initializing port environment...",
  "Loading portfolio datasets...",
  "Running asset configuration...",
  "Rendering interface hooks...",
  "Ready to launch."
];

export default function PageLoader() {
  const [progress, setProgress] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    // Progress counter
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            document.body.style.overflow = "";
          }, 600);
          return 100;
        }
        
        // Random step increments
        const increment = Math.floor(Math.random() * 8) + 4;
        const nextVal = Math.min(prev + increment, 100);
        
        // Update steps index
        const index = Math.min(
          Math.floor((nextVal / 100) * LOADING_STEPS.length),
          LOADING_STEPS.length - 1
        );
        setStepIndex(index);
        
        return nextVal;
      });
    }, 70);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-slate-950 bg-grid text-slate-100"
        >
          {/* Centered Glowing Logo */}
          <div className="relative mb-10">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative z-10 flex items-center justify-center w-20 h-20 rounded-2xl border border-purple-500/30 bg-slate-900/80 backdrop-blur shadow-lg shadow-purple-500/10"
            >
              <span className="font-mono text-3xl font-black text-gradient">KS</span>
            </motion.div>
            
            {/* Pulsing Backglow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-500/15 rounded-full filter blur-2xl animate-pulse-slow" />
          </div>

          {/* Progress Visuals */}
          <div className="w-72 md:w-96 text-left font-mono">
            {/* Terminal Console Output */}
            <div className="h-6 overflow-hidden mb-2 text-xs text-slate-400">
              <motion.span
                key={stepIndex}
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="inline-block"
              >
                &gt; {LOADING_STEPS[stepIndex]}
              </motion.span>
            </div>

            {/* Percentage Indicator */}
            <div className="flex justify-between items-baseline mb-1">
              <span className="text-xs text-purple-400 uppercase tracking-widest font-semibold">
                SYSTEM DEPLOY
              </span>
              <span className="text-xl font-bold text-emerald-400">{progress}%</span>
            </div>

            {/* Progress Bar Container */}
            <div className="h-[4px] w-full bg-slate-800 rounded-full overflow-hidden border border-white/5">
              <motion.div
                className="h-full bg-gradient-to-r from-purple-500 via-emerald-500 to-sky-500"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
