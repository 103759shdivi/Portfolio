"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Layout, Server, Pocket, Sparkles } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import Card from "@/components/Shared/Card";
import SectionHeading from "@/components/Shared/SectionHeading";

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  Frontend: <Layout className="w-4 h-4" />,
  Backend: <Server className="w-4 h-4" />,
  "Tools & Infrastructure": <Pocket className="w-4 h-4" />,
  "Other Skills": <Sparkles className="w-4 h-4" />
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState(portfolioData.skills[0].title);

  const activeCategory = portfolioData.skills.find(
    (cat) => cat.title === activeTab
  ) || portfolioData.skills[0];

  return (
    <section id="skills" className="py-20 md:py-28 px-4 max-w-5xl mx-auto">
      <SectionHeading
        badgeText="✦ EXPERTISE"
        title="Technical Skillset"
        subtitle="A snapshot of my stack, development tooling, and professional competencies."
      />

      {/* Tabs Navigation */}
      <div className="flex justify-center mb-12">
        <div className="flex bg-slate-900/60 p-1.5 rounded-2xl border border-white/5 overflow-x-auto no-scrollbar max-w-full">
          {portfolioData.skills.map((category) => (
            <button
              key={category.title}
              onClick={() => setActiveTab(category.title)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold tracking-wide uppercase transition-colors whitespace-nowrap cursor-pointer relative ${
                activeTab === category.title
                  ? "text-purple-400"
                  : "text-slate-500 hover:text-slate-300"
              }`}
            >
              {activeTab === category.title && (
                <motion.div
                  layoutId="activeSkillsTab"
                  className="absolute inset-0 bg-slate-950 border border-white/5 rounded-xl shadow-lg"
                  transition={{ type: "spring", stiffness: 350, damping: 28 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1.5">
                {CATEGORY_ICONS[category.title] || <Cpu className="w-4 h-4" />}
                {category.title}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Skills Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {activeCategory.skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, delay: idx * 0.04 }}
              className="relative"
            >
              <Card glowOnHover={true} animateScroll={false} className="!p-5 relative overflow-hidden">
                <div className="flex justify-between items-baseline mb-2">
                  <span className="text-sm font-bold text-slate-100 font-mono">
                    {skill.name}
                  </span>
                  <span className="text-xs font-bold text-purple-400 font-mono">
                    {skill.level}%
                  </span>
                </div>

                {/* Loading bar track */}
                <div className="h-2 w-full bg-slate-950 border border-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
                    className="h-full bg-gradient-to-r from-purple-500 via-purple-600 to-emerald-500 rounded-full"
                  />
                </div>
                
                {/* Decorative mesh background glow for active skill */}
                <div className="absolute right-0 bottom-0 w-24 h-24 bg-purple-500/5 rounded-full filter blur-xl -z-10 pointer-events-none" />
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
