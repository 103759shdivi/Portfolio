"use client";
import React from "react";
import { motion } from "framer-motion";
import { GitBranch, GitPullRequest, Star, Zap } from "lucide-react";
import Card from "@/components/Shared/Card";
import SectionHeading from "@/components/Shared/SectionHeading";

// Generate mock contribution grid data for a 24-week period (for responsive layout)
const GRID_COLUMNS = 24;
const GRID_ROWS = 7;

const STATS = [
  { icon: <GitBranch className="w-4 h-4 text-purple-400" />, label: "Commits", value: "840+" },
  { icon: <GitPullRequest className="w-4 h-4 text-emerald-400" />, label: "Pull Requests", value: "42" },
  { icon: <Star className="w-4 h-4 text-yellow-400" />, label: "Stars Earned", value: "18" },
  { icon: <Zap className="w-4 h-4 text-sky-400" />, label: "Current Streak", value: "12 Days" }
];

const LANGUAGES = [
  { name: "JavaScript", percent: 40, color: "bg-yellow-500" },
  { name: "TypeScript", percent: 35, color: "bg-blue-500" },
  { name: "Next.js & React", percent: 15, color: "bg-purple-500" },
  { name: "HTML & CSS", percent: 10, color: "bg-emerald-500" }
];

export default function GithubStats() {
  const [contribCells, setContribCells] = React.useState<number[]>(() =>
    Array.from({ length: GRID_COLUMNS * GRID_ROWS }).map(() => 0)
  );

  React.useEffect(() => {
    const cells = Array.from({ length: GRID_COLUMNS * GRID_ROWS }).map(() => {
      const rand = Math.random();
      if (rand < 0.4) return 0;
      if (rand < 0.7) return 1;
      if (rand < 0.9) return 2;
      return 3;
    });
    // Avoid synchronous setState inside effect to prevent cascading renders lint warning
    const id = setTimeout(() => setContribCells(cells), 0);
    return () => clearTimeout(id);
  }, []);

  const getCellColor = (level: number) => {
    switch (level) {
      case 1:
        return "bg-emerald-900/30 border-emerald-900/40";
      case 2:
        return "bg-emerald-700/50 border-emerald-700/60";
      case 3:
        return "bg-emerald-500/80 border-emerald-400 shadow shadow-emerald-500/20";
      default:
        return "bg-slate-900 border-white/5";
    }
  };

  return (
    <section id="github-stats" className="py-20 md:py-28 px-4 max-w-5xl mx-auto">
      <SectionHeading
        badgeText="✦ CODE METRICS"
        title="GitHub Statistics"
        subtitle="Tracking my development contributions, active timelines, and core programming languages."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Side: Stats cards & Languages */}
        <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
          {/* Quick Metrics grid */}
          <div className="grid grid-cols-2 gap-4">
            {STATS.map((stat, idx) => (
              <Card key={idx} className="!p-4 relative overflow-hidden group">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-slate-900 border border-white/5 flex items-center justify-center">
                    {stat.icon}
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                      {stat.label}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-slate-100 font-mono">
                      {stat.value}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Top Languages card */}
          <Card className="flex-grow">
            <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-widest font-mono">
              Top Languages
            </h3>
            <div className="flex flex-col gap-4">
              {LANGUAGES.map((lang, idx) => (
                <div key={lang.name} className="flex flex-col">
                  <div className="flex justify-between items-baseline mb-1.5">
                    <span className="text-xs font-bold text-slate-300 font-mono">{lang.name}</span>
                    <span className="text-xs font-bold text-slate-500 font-mono">{lang.percent}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-950 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.percent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: idx * 0.05, ease: "easeOut" }}
                      className={`h-full rounded-full ${lang.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Right Side: Contribution Grid Visual */}
        <div className="lg:col-span-7">
          <Card className="h-full flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-bold text-white mb-2 uppercase tracking-widest font-mono">
                Contribution Activity
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed font-medium mb-6">
                Mock representation of active version control commits, local code reviews, and deployments over the last 24 weeks.
              </p>
            </div>

            {/* Grid Container */}
            <div className="w-full overflow-x-auto no-scrollbar py-2">
              <div
                className="grid gap-1.5 w-max mx-auto"
                style={{
                  gridTemplateColumns: `repeat(${GRID_COLUMNS}, minmax(0, 1fr))`,
                  gridTemplateRows: `repeat(${GRID_ROWS}, minmax(0, 1fr))`,
                  gridAutoFlow: "column"
                }}
              >
                {contribCells.map((level, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.002 }}
                    className={`w-3 h-3 rounded-[2px] border ${getCellColor(level)} transition-colors duration-300`}
                  />
                ))}
              </div>
            </div>

            {/* Legend info footer */}
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/5 font-mono text-[10px] text-slate-500">
              <span>Less</span>
              <div className="flex gap-1 items-center">
                <div className="w-2.5 h-2.5 rounded-[2px] bg-slate-900 border border-white/5" />
                <div className="w-2.5 h-2.5 rounded-[2px] bg-emerald-900/30 border border-emerald-900/40" />
                <div className="w-2.5 h-2.5 rounded-[2px] bg-emerald-700/50 border border-emerald-700/60" />
                <div className="w-2.5 h-2.5 rounded-[2px] bg-emerald-500/80 border border-emerald-400" />
              </div>
              <span>More</span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
