"use client";
import { Quote } from "lucide-react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolioData";
import Card from "@/components/Shared/Card";
import SectionHeading from "@/components/Shared/SectionHeading";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 px-4 max-w-5xl mx-auto">
      <SectionHeading
        badgeText="✦ ENDORSEMENTS"
        title="What People Say"
        subtitle="Recommendations and reviews from course instructors and workspace coordinators."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {portfolioData.testimonials.map((test, idx) => (
          <Card
            key={test.name}
            glowOnHover={true}
            className="relative flex flex-col justify-between group overflow-hidden"
            delay={idx * 0.1}
          >
            {/* Quote Icon */}
            <Quote className="absolute top-6 right-6 w-8 h-8 text-slate-800 group-hover:text-purple-500/10 transition-colors pointer-events-none" />

            {/* Testimonial Content */}
            <blockquote className="text-xs sm:text-sm text-slate-300 italic leading-relaxed mb-6 relative z-10 font-medium">
              &ldquo;{test.content}&rdquo;
            </blockquote>

            {/* Profile Avatar Header */}
            <div className="flex items-center gap-3.5 border-t border-white/5 pt-4">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/10 group-hover:border-purple-500/50 transition-colors">
                <Image
                  src={test.avatarUrl}
                  alt={test.name}
                  width={40}
                  height={40}
                  className="object-cover w-full h-full"
                  unoptimized
                />
              </div>

              <div>
                <cite className="block not-italic text-sm font-bold text-slate-100 font-sans">
                  {test.name}
                </cite>
                <span className="block text-[10px] text-purple-400 font-mono font-semibold">
                  {test.role}, {test.company}
                </span>
              </div>
            </div>

            {/* Ambient Background lighting */}
            <div className="absolute right-0 bottom-0 w-24 h-24 bg-emerald-500/5 rounded-full filter blur-xl -z-10 pointer-events-none" />
          </Card>
        ))}
      </div>
    </section>
  );
}
