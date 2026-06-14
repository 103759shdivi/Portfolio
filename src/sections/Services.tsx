import React from "react";
import SectionHeading from "@/components/Shared/SectionHeading";
import Card from "@/components/Shared/Card";
import { portfolioData } from "@/data/portfolioData";

export default function Services() {
  return (
    <section id="services" className="section-wrapper">
      <div className="section-container">
        <SectionHeading
          badgeText="Offerings"
          title="Services"
          subtitle="How I can help your company or project"
        />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
          {portfolioData.services.map((s, idx) => (
            <Card key={idx} delay={idx * 0.07}>
              <h4 style={{ fontWeight: 700, color: "#fff", fontSize: "1rem", marginBottom: "0.75rem" }}>{s.title}</h4>
              <p style={{ color: "#94a3b8", fontSize: "0.875rem", lineHeight: 1.7 }}>{s.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
