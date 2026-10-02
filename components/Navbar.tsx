"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "About",    href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills",   href: "#skills" },
  { label: "Awards",   href: "#achievements" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.45 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sticky top-4 z-50 flex justify-center px-6 mt-4">
      <div
        className="flex items-center gap-5 sm:gap-8 px-5 sm:px-6 py-[10px] rounded-full border"
        style={{
          background: "rgba(255,255,255,0.82)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderColor: "var(--color-outline-var)",
          boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
        }}
      >
        <a
          href="#about"
          className="text-[15px] font-extrabold tracking-tight"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-primary)" }}
        >
          NS.
        </a>
        <ul className="flex gap-4 sm:gap-7 list-none">
          {links.map(({ label, href }) => {
            const isActive = activeSection === href.slice(1);
            return (
              <li key={href}>
                <a
                  href={href}
                  className="text-[11px] font-semibold uppercase tracking-[0.08em] transition-colors duration-200"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: isActive
                      ? "var(--color-primary)"
                      : "var(--color-on-surface-var)",
                  }}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
