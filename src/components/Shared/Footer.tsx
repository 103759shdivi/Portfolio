import React from "react";

export default function Footer(){
  return (
    <footer className="py-8 text-center text-slate-500 text-sm">
      <div className="max-w-6xl mx-auto px-4">© {new Date().getFullYear()} Kavinda Sudesh — Built with Next.js</div>
    </footer>
  );
}
