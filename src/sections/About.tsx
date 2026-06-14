import React from "react";
import SectionHeading from "@/components/Shared/SectionHeading";
import Card from "@/components/Shared/Card";
import { portfolioData } from "@/data/portfolioData";

export default function About() {
  return (
    <section id="about" className="section-wrapper">
      <div className="section-container">
        <SectionHeading
          badgeText="Profile"
          title="About Me"
          subtitle="Biography, education and a quick skills summary"
        />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
          <Card delay={0} className="md:col-span-2" style={{ gridColumn: "span 2" } as React.CSSProperties}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#fff", marginBottom: "1rem" }}>Biography</h3>
            <p style={{ color: "#94a3b8", lineHeight: 1.8, fontSize: "0.95rem" }}>
              {portfolioData.personalDetails.bio}
            </p>
          </Card>
          <Card delay={0.08}>
            <h4 style={{ fontSize: "0.9rem", fontWeight: 700, color: "#fff", marginBottom: "1rem" }}>Education</h4>
            <p style={{ color: "#94a3b8", fontSize: "0.9rem", lineHeight: 1.7 }}>HND in Computing</p>
            <p style={{ color: "#a78bfa", fontSize: "0.8rem", fontWeight: 500, marginTop: "0.4rem" }}>ESOFT Metro Campus</p>
          </Card>
        </div>
      </div>
    </section>
  );
}
