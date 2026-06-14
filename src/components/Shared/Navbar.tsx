"use client";
import React from "react";
import { portfolioData } from "@/data/portfolioData";
import useToggle from "@/hooks/useToggle";

const NAV = ["home","about","skills","experience","projects","certifications","services","testimonials","contact"];

export default function Navbar(){
  const { toggle } = useToggle(false);
  return (
    <header className="fixed inset-x-4 top-4 z-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between bg-transparent">
          <a href="#home" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-slate-900 border border-white/5 flex items-center justify-center text-purple-400 font-bold">KS</div>
            <span className="hidden sm:inline text-sm font-semibold text-white">{portfolioData.personalDetails.name}</span>
          </a>
          <nav className="hidden md:flex items-center gap-4">
            {NAV.map((n)=> <a key={n} href={`#${n}`} className="text-sm text-slate-300 hover:text-purple-300">{n}</a>)}
          </nav>
          <div className="md:hidden">
            <button onClick={toggle} className="p-2 rounded-md bg-slate-900 border border-white/5">Menu</button>
          </div>
        </div>
      </div>
    </header>
  );
}
