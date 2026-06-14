import "./globals.css";
import type { Metadata } from "next";
import { portfolioData } from "@/data/portfolioData";
import Navbar from "@/components/Shared/Navbar";
import Footer from "@/components/Shared/Footer";
import AnimatedBackground from "@/components/Sections/AnimatedBackground";

export const metadata: Metadata = {
  title: `${portfolioData.personalDetails.name} | ${portfolioData.personalDetails.title}`,
  description: portfolioData.personalDetails.bio,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="min-h-screen bg-[#030712] text-slate-100 flex flex-col">
        <AnimatedBackground />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
