"use client";
import { motion } from "framer-motion";
import { Briefcase, CheckCircle2 } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import Card from "@/components/Shared/Card";
import SectionHeading from "@/components/Shared/SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 px-4 max-w-5xl mx-auto">
      <SectionHeading
        badgeText="✦ CAREER"
        title="Work Experience"
        subtitle="A look into my professional roles, task achievements, and local workplace contributions."
      />

      <div className="relative border-l border-white/10 pl-6 sm:pl-8 ml-4 max-w-3xl mx-auto">
        {/* Timeline Path Line Highlight */}
        <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-purple-500 via-emerald-500 to-transparent" />

        {portfolioData.experience.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative mb-12 last:mb-0"
          >
            {/* Timeline Dot Node */}
            <span className="absolute -left-[35px] sm:-left-[43px] top-1.5 flex items-center justify-center w-8 h-8 rounded-full border border-purple-500/30 bg-slate-900 shadow-lg shadow-purple-500/10">
              <Briefcase className="w-4 h-4 text-purple-400" />
            </span>

            <Card className="relative overflow-hidden group">
              {/* Floating Period Tag */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-white/5">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                    {exp.role}
                  </h3>
                  <span className="text-xs font-semibold text-emerald-400 font-mono">
                    {exp.company}
                  </span>
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-mono font-bold text-slate-400 bg-white/5 border border-white/10">
                  {exp.period}
                </span>
              </div>

              {/* Responsibilities */}
              <ul className="flex flex-col gap-2.5">
                {exp.description.map((item, idx2) => (
                  <motion.li
                    key={idx2}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + idx2 * 0.05 }}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400 leading-relaxed font-medium"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Background ambient lighting */}
              <div className="absolute right-0 bottom-0 w-32 h-32 bg-emerald-500/5 rounded-full filter blur-xl -z-10 pointer-events-none" />
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
