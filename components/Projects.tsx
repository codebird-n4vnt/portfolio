type Chip = { label: string; variant: "purple" | "orange" | "default" };
type Project = {
  number: string;
  featured?: boolean;
  name: string;
  bullets: string[];
  chips: Chip[];
};

const projects: Project[] = [
  {
    number: "01",
    featured: true,
    name: "An Insurance Protocol",
    bullets: [
      "Architecting a decentralized peer-to-peer insurance platform on Solana for transparent, trust-minimized policy creation, premium pooling, and claim settlement.",
      "Developed on-chain programs in Rust using Anchor framework with PDAs; Next.js frontend with Solana Wallet Adapter for authentication.",
      "Integrating Docker, CI/CD pipelines, and Grafana observability for production-scale infrastructure deployment.",
      "Exploring LoRA fine-tuning for lightweight domain-specific models for automated insurance claim analysis and fraud detection.",
    ],
    chips: [
      { label: "Next.js", variant: "purple" },
      { label: "Rust (Anchor)", variant: "purple" },
      { label: "Solana", variant: "purple" },
      { label: "Tailwind", variant: "default" },
      { label: "Web3 SDKs", variant: "default" },
      { label: "Docker", variant: "orange" },
      { label: "Grafana", variant: "orange" },
      { label: "LoRA", variant: "orange" },
    ],
  },
  {
    number: "02",
    name: "Real-Time Chat App",
    bullets: [
      "Real-time messaging platform using Socket.IO with room-based chats, persistent message storage in MongoDB, and responsive layouts across all devices.",
      "JWT authentication, image sharing, and React Toastify notifications for an enhanced user experience.",
    ],
    chips: [
      { label: "React", variant: "purple" },
      { label: "Express", variant: "default" },
      { label: "Node.js", variant: "default" },
      { label: "Socket.io", variant: "default" },
      { label: "MongoDB", variant: "default" },
      { label: "Daisy UI", variant: "default" },
      { label: "Tailwind CSS", variant: "default" },
    ],
  },
  {
    number: "03",
    name: "Decentralised Exchange (DEX)",
    bullets: [
      "Built a DEX on Ethereum implementing an Automated Market Maker (AMM) for trustless token swaps without centralized order books.",
      "Designed ERC-20 token contracts integrated with liquidity pools for minting, transfers, approvals, and swap operations.",
      "Leveraged Uniswap V3 interfaces for interoperable smart contract components and production-grade DEX liquidity management.",
      "Web3 wallet connectivity in React frontend enabling on-chain swaps, real-time wallet state, and transaction signing.",
    ],
    chips: [
      { label: "React", variant: "purple" },
      { label: "Solidity", variant: "purple" },
      { label: "Ethereum", variant: "orange" },
      { label: "Tailwind", variant: "default" },
      { label: "Somnia Reactivity", variant: "default" },
      { label: "Uniswap V3", variant: "default" },
      { label: "ERC-20", variant: "default" },
    ],
  },
];

function TechChip({ label, variant }: Chip) {
  const styles: Record<string, React.CSSProperties> = {
    purple: {
      background: "rgba(113,42,226,0.08)",
      color: "var(--color-secondary)",
      border: "1px solid rgba(113,42,226,0.2)",
    },
    orange: {
      background: "rgba(249,115,22,0.08)",
      color: "var(--color-accent)",
      border: "1px solid rgba(249,115,22,0.2)",
    },
    default: {
      background: "var(--color-surface-low)",
      color: "var(--color-on-surface-var)",
      border: "1px solid var(--color-outline-var)",
    },
  };
  return (
    <span
      className="text-[11px] font-medium tracking-[0.04em] px-2.5 py-1 rounded-full"
      style={{ fontFamily: "var(--font-mono)", ...styles[variant] }}
    >
      {label}
    </span>
  );
}

function ProjectCard({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  return (
    <article
      className={`relative bg-white rounded-[1.5rem] p-9 border border-transparent overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.003] hover:border-[var(--color-outline-var)] group ${className}`}
      style={{ boxShadow: "0 20px 40px rgba(0,0,0,0.04)" }}
    >
      {/* Top gradient bar on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: "linear-gradient(90deg, var(--color-secondary), var(--color-accent))" }}
      />

      <p
        className="text-[11px] font-semibold uppercase tracking-[0.1em] mb-4"
        style={{ fontFamily: "var(--font-mono)", color: "var(--color-outline)" }}
      >
        {project.number}
        {project.featured && " · FEATURED"}
      </p>

      <h3
        className="text-[22px] font-bold tracking-[-0.01em] mb-3"
        style={{ fontFamily: "var(--font-display)", color: "var(--color-primary)" }}
      >
        {project.name}
      </h3>

      <ul className="flex flex-col gap-1.5 mb-5">
        {project.bullets.map((b, i) => (
          <li
            key={i}
            className="text-[14px] leading-[1.65] pl-4 relative"
            style={{ color: "var(--color-on-surface-var)" }}
          >
            <span
              className="absolute left-0 top-0 text-[12px]"
              style={{ color: "var(--color-secondary)" }}
            >
              →
            </span>
            {b}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-1.5">
        {project.chips.map((c) => (
          <TechChip key={c.label} {...c} />
        ))}
      </div>
    </article>
  );
}

export default function Projects() {
  const [p1, p2, p3] = projects;

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-[1280px] mx-auto">
        <p
          className="text-[12px] font-semibold uppercase tracking-[0.12em] mb-3"
          style={{ fontFamily: "var(--font-mono)", color: "var(--color-secondary)" }}
        >
          // Projects
        </p>
        <h2
          className="font-bold tracking-[-0.02em] mb-12"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(28px, 3vw, 40px)",
            color: "var(--color-primary)",
          }}
        >
          Selected Work
        </h2>

        {/* Bento grid */}
        <div className="grid grid-cols-12 gap-5">
          {/* P1 — 7/12 */}
          <ProjectCard project={p1} className="col-span-12 lg:col-span-7" />
          {/* P2 — 5/12 */}
          <ProjectCard project={p2} className="col-span-12 lg:col-span-5" />
          {/* P3 — Full width, 2-col inner */}
          <article
            className="col-span-12 relative bg-white rounded-[1.5rem] border border-transparent overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--color-outline-var)] group"
            style={{ boxShadow: "0 20px 40px rgba(0,0,0,0.04)" }}
          >
            <div
              className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: "linear-gradient(90deg, var(--color-secondary), var(--color-accent))" }}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-9">
              {/* Left */}
              <div>
                <p
                  className="text-[11px] font-semibold uppercase tracking-[0.1em] mb-4"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--color-outline)" }}
                >
                  03
                </p>
                <h3
                  className="text-[20px] font-bold tracking-[-0.01em] mb-3"
                  style={{ fontFamily: "var(--font-display)", color: "var(--color-primary)" }}
                >
                  {p3.name}
                </h3>
                <ul className="flex flex-col gap-1.5">
                  {p3.bullets.slice(0, 2).map((b, i) => (
                    <li
                      key={i}
                      className="text-[14px] leading-[1.65] pl-4 relative"
                      style={{ color: "var(--color-on-surface-var)" }}
                    >
                      <span className="absolute left-0 top-0 text-[12px]" style={{ color: "var(--color-secondary)" }}>→</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Right */}
              <div className="flex flex-col justify-end">
                <ul className="flex flex-col gap-1.5 mb-5">
                  {p3.bullets.slice(2).map((b, i) => (
                    <li
                      key={i}
                      className="text-[14px] leading-[1.65] pl-4 relative"
                      style={{ color: "var(--color-on-surface-var)" }}
                    >
                      <span className="absolute left-0 top-0 text-[12px]" style={{ color: "var(--color-secondary)" }}>→</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5">
                  {p3.chips.map((c) => (
                    <TechChip key={c.label} {...c} />
                  ))}
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
