type SkillGroup = {
  category: string;
  tags: string[];
  highlight?: boolean;
};

const skillGroups: SkillGroup[] = [
  {
    category: "Web3 & Blockchain",
    tags: ["Solana", "Ethereum", "Somnia", "elizaOS", "Kamino", "Foundry", "Anchor"],
  },
  {
    category: "Languages",
    tags: ["JavaScript", "TypeScript", "Rust", "Solidity", "C++"],
  },
  {
    category: "Frontend",
    tags: ["React", "Next.js", "HTML5", "Tailwind CSS"],
  },
  {
    category: "Backend & APIs",
    tags: ["Node.js", "Express.js", "WebSockets", "REST APIs", "Socket.io"],
  },
  {
    category: "Database & Tools",
    tags: ["MongoDB", "Git", "Data Structures", "Open Source", "LeetCode"],
  },
  {
    category: "Currently Learning",
    tags: ["Docker", "CI/CD", "Grafana", "LoRA Fine-tuning"],
    highlight: true,
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-[1280px] mx-auto">
        <p
          className="text-[12px] font-semibold uppercase tracking-[0.12em] mb-3"
          style={{ fontFamily: "var(--font-mono)", color: "var(--color-secondary)" }}
        >
          // Technical Skills
        </p>
        <h2
          className="font-bold tracking-[-0.02em] mb-12"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(28px, 3vw, 40px)",
            color: "var(--color-primary)",
          }}
        >
          My Tech Stack
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map(({ category, tags, highlight }) => (
            <div
              key={category}
              className="rounded-[1.5rem] p-8 border border-transparent transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-outline-var)]"
              style={{
                background: highlight
                  ? "linear-gradient(135deg, #fdf4ff 0%, #f0ebff 100%)"
                  : "var(--color-surface)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.04)",
              }}
            >
              <p
                className="text-[11px] font-semibold uppercase tracking-[0.1em] mb-4 flex items-center gap-2"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "var(--color-secondary)",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: "var(--color-secondary)" }}
                />
                {category}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[12px] font-medium px-3 py-1.5 rounded-full cursor-default transition-all duration-200 hover:scale-[1.04]"
                    style={{
                      fontFamily: "var(--font-mono)",
                      background: highlight
                        ? "rgba(113,42,226,0.08)"
                        : "var(--color-surface-low)",
                      color: highlight
                        ? "var(--color-secondary)"
                        : "var(--color-on-bg)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
