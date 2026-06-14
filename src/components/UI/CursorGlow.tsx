"use client";
import { useEffect } from "react";

export default function CursorGlow() {
  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      document.documentElement.style.setProperty("--x", `${ev.clientX}px`);
      document.documentElement.style.setProperty("--y", `${ev.clientY}px`);
    };
    window.addEventListener("pointermove", updateMousePosition);
    return () => {
      window.removeEventListener("pointermove", updateMousePosition);
    };
  }, []);

  return <div className="custom-cursor-glow" />;
}
