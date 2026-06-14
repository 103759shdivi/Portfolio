"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, MapPin, GraduationCap, Briefcase, FileCode2 } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import Card from "@/components/Shared/Card";
import SectionHeading from "@/components/Shared/SectionHeading";

type FileTab = "about.json" | "nebula.ts" | "config.yaml";

const FILE_CONTENTS: Record<FileTab, string> = {
  "about.json": `{
  "name": "Kavinda Sudesh",
  "role": "Software Engineer",
  "degree": "HND in Computing (Software)",
  "school": "ESOFT Metro Campus",
  "location": "Colombo, Sri Lanka",
  "focus": [
    "Full-Stack Web Dev",
    "Modern UX/UI Design",
    "Troubleshooting & Support"
  ]
}`,
  "nebula.ts": `import { SoftwareDev, ITSupport } from "nebula-homes";

class ITExecutive implements SoftwareDev, ITSupport {
  name = "Kavinda Sudesh";
  duties = [
    "IT Infrastructure support",
    "Custom software development",
    "Social media advertising campaigns"
  ];
  
  solveProblem(issue: string): boolean {
    // Analyze, trace, resolve
    console.log(\`Tracing issue: \${issue}\`);
    return true; // Zero office downtime
  }
}`,
  "config.yaml": `developer:
  alias: kavindasudesh
  editor: VS Code
  shell: powershell
  os: Windows
  coffee_consumed: true
  ready_to_build: true
`
};

export default function About() {
  const [activeTab, setActiveTab] = useState<FileTab>("about.json");

  const personalData = [
    { icon: <User className="w-4 h-4 text-purple-400" />, label: "Name", value: portfolioData.personalDetails.name },
    { icon: <Briefcase className="w-4 h-4 text-purple-400" />, label: "Current Role", value: "IT Executive" },
    { icon: <GraduationCap className="w-4 h-4 text-purple-400" />, label: "Education", value: "HND in Computing" },
    { icon: <MapPin className="w-4 h-4 text-purple-400" />, label: "Location", value: portfolioData.personalDetails.location }
  ];

  return (
    <section id="about" className="py-20 md:py-28 px-4 max-w-5xl mx-auto">
      <SectionHeading
        badgeText="✦ PROFILE"
        title="About Kavinda"
        subtitle="Bridging the gap between software development, IT operations, and digital experience design."
      />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
        {/* Bio Text Column */}
        <div className="md:col-span-6 flex flex-col gap-6">
          <Card glowOnHover={false}>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 rounded bg-purple-500" />
              The Journey
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
              I graduated with an <strong>HND in Computing (Software Engineering)</strong> from ESOFT Metro Campus. My academic foundation, combined with hands-on practice, drove me to focus on full-stack web applications and interactive front-ends.
            </p>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              In my current role at <strong>Nebula Homes Construction</strong>, I manage network architectures, solve software configuration blockers, and drive social media advertising. This diverse scope has shaped me into a developer who understands both clean code writing and real-world system deployments.
            </p>
          </Card>

          {/* Quick Details List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {personalData.map((item, idx) => (
              <Card key={idx} glowOnHover={true} className="!p-4" delay={idx * 0.05}>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-slate-900 border border-white/5 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                      {item.label}
                    </span>
                    <span className="text-xs font-semibold text-slate-200">{item.value}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Core metrics counters */}
          <div className="grid grid-cols-3 gap-4 text-center mt-2">
            <div className="p-4 rounded-2xl bg-slate-900/30 border border-white/5">
              <span className="block text-2xl font-black text-purple-400">2+</span>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Years Experience</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/30 border border-white/5">
              <span className="block text-2xl font-black text-emerald-400">5+</span>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Projects Built</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/30 border border-white/5">
              <span className="block text-2xl font-black text-sky-400">100%</span>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Dedication</span>
            </div>
          </div>
        </div>

        {/* Visual Interactive Terminal Column */}
        <div className="md:col-span-6">
          <div className="w-full rounded-2xl border border-white/10 bg-slate-950 overflow-hidden shadow-2xl">
            {/* Header controls bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-white/5">
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ef4444] opacity-80" />
                <span className="w-3 h-3 rounded-full bg-[#eab308] opacity-80" />
                <span className="w-3 h-3 rounded-full bg-[#22c55e] opacity-80" />
              </div>
              <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest select-none">
                Interactive IDE
              </div>
              <div className="w-12" /> {/* spacer */}
            </div>

            {/* Editor Workspace tabs */}
            <div className="flex bg-slate-900/60 border-b border-white/5 overflow-x-auto no-scrollbar font-mono text-xs">
              {(["about.json", "nebula.ts", "config.yaml"] as FileTab[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex items-center gap-1.5 px-4 py-2 border-r border-white/5 transition-colors cursor-pointer ${
                    activeTab === tab
                      ? "bg-slate-950 text-purple-400 border-t-2 border-t-purple-500/80"
                      : "text-slate-500 hover:bg-slate-900 hover:text-slate-300"
                  }`}
                >
                  <FileCode2 className="w-3.5 h-3.5" />
                  {tab}
                </button>
              ))}
            </div>

            {/* Code Output panel */}
            <div className="p-6 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto h-72 sm:h-80 bg-slate-950/70 text-slate-300 no-scrollbar">
              <AnimatePresence mode="wait">
                <motion.pre
                  key={activeTab}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  className="text-left"
                >
                  <code className="block">
                    {/* Render colorized mock syntax based on file content */}
                    {FILE_CONTENTS[activeTab].split("\n").map((line, index) => {
                      // Very basic styling helper for presentation
                      let lineStyle = "text-slate-300";
                      
                      if (activeTab === "about.json") {
                        if (line.includes('"')) {
                          lineStyle = "text-emerald-400";
                        }
                      } else if (activeTab === "nebula.ts") {
                        if (line.trim().startsWith("import") || line.trim().startsWith("class") || line.trim().startsWith("return")) {
                          lineStyle = "text-purple-400";
                        } else if (line.includes("console.log") || line.includes("`") || line.includes("'")) {
                          lineStyle = "text-emerald-400";
                        }
                      } else if (activeTab === "config.yaml") {
                        if (line.includes(":")) {
                          lineStyle = "text-sky-400";
                        }
                      }

                      return (
                        <div key={index} className="flex">
                          {/* Line numbers gutter */}
                          <span className="w-6 text-slate-600 text-right pr-2 select-none text-[10px]">
                            {index + 1}
                          </span>
                          <span className={lineStyle}>{line}</span>
                        </div>
                      );
                    })}
                  </code>
                </motion.pre>
              </AnimatePresence>
            </div>

            {/* Bottom Status bar */}
            <div className="flex items-center justify-between px-4 py-1.5 bg-slate-900 border-t border-white/5 text-[10px] font-mono text-slate-500">
              <div>UTF-8</div>
              <div>TypeScript / JSON / YAML</div>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Live Connection
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
