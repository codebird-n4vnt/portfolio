type Chip = { label: string; variant: "purple" | "orange" | "default" };
type Link = { label: string; href: string };
type Stat = { value: string; label: string };
type Project = {
  name: string;
  meta: string;
  tagline: string;
  description: string[];
  chips: Chip[];
  links: Link[];
  badge?: string;
  stats?: Stat[];
};

const GITHUB = "https://github.com/codebird-n4vnt";

const featured: Project = {
  name: "Sealed",
  meta: "Solana · Colosseum Crypto World's Fair · 2026",
  tagline: "Private stablecoin payroll on Solana.",
  description: [
    "Pay a team in USDC on a public chain and every salary becomes public. Sealed pays them with Token-2022 Confidential Balances instead: amounts and balances are encrypted on-chain, and the network checks every payment with zero-knowledge proofs. The employer, the employee and the company's accountant can read the numbers. Everyone else sees that a payment happened, but not how much.",
    "A payroll run is a resumable job that checks the chain before any retry, so a crash never pays anyone twice. Employees join from an invite link, decrypt their pay in the browser with keys derived from their own wallet, and never need SOL for fees. The accountant loads a view-only auditor key and exports every amount to CSV, and an Anchor vault program backs each company's token 1:1 with USDC.",
  ],
  stats: [
    { value: "26 s", label: "for a 10-person payroll run on devnet, one transaction per payment" },
    { value: "0 SOL", label: "needed by employees; the company sponsors every fee" },
    { value: "45 / 45", label: "payments in the accountant's CSV matched the chain" },
  ],
  chips: [
    { label: "TypeScript", variant: "purple" },
    { label: "Token-2022", variant: "purple" },
    { label: "ZK proofs (WASM)", variant: "purple" },
    { label: "Rust (Anchor)", variant: "orange" },
    { label: "Next.js", variant: "default" },
    { label: "@solana/kit", variant: "default" },
    { label: "MongoDB", variant: "default" },
  ],
  links: [{ label: "GitHub", href: `${GITHUB}/sealed` }],
};

const projects: Project[] = [
  {
    name: "Insure",
    meta: "Solana · 2026",
    tagline: "Parametric insurance that pays when the data says so.",
    description: [
      "Farmers buy drought cover and travellers buy flight-delay cover in USDC, and anyone can fund a vault to underwrite it. When a claim is filed, an oracle keeper fetches the rainfall or flight data, applies the vault's published rule in deterministic code and settles on-chain within minutes. The measured value and a SHA-256 hash of the evidence are stored on the claim, and the claim page re-hashes that evidence in the browser so anyone can check a payout.",
      "Every policy is fully collateralised, and underwriters can't withdraw or pause their way out of a pending claim. A security review of the hackathon version found 20 issues, three of them critical (one let anyone drain every vault). The rebuild fixes each one and covers it with a regression test.",
    ],
    chips: [
      { label: "Rust (Anchor)", variant: "purple" },
      { label: "Next.js", variant: "purple" },
      { label: "Oracle keeper", variant: "orange" },
      { label: "Blinks", variant: "default" },
      { label: "LiteSVM", variant: "default" },
    ],
    links: [
      { label: "Live demo", href: "https://insure-weld.vercel.app" },
      { label: "GitHub", href: `${GITHUB}/insure` },
    ],
  },
  {
    name: "Mand(ate)",
    meta: "ENS · Arc · HackMoney 2026",
    badge: "ENS prize",
    tagline: "A public discovery layer for on-chain credit.",
    description: [
      "Private credit deals usually live in one platform's database, so a borrower turned down there stays invisible to every other lender. Mand(ate) moves discovery onto ENS: borrowers claim a subname under borrowerlist.n4vnt.eth and publish their financing intent as text records (loan type, ticket size, tenure, industry, location, ROI), and lenders publish their criteria under lenderlist.n4vnt.eth.",
      "Any ENS-aware app can read those records, so an unfunded deal can surface to the next suitable lender. Once a borrower accepts a term sheet, the lender funds the loan in USDC on Arc through an escrow contract that sends 99% to the borrower and 1% to the protocol. Built in a week at ETHGlobal HackMoney 2026, where it won ENS's Integrate ENS prize.",
    ],
    chips: [
      { label: "Solidity", variant: "purple" },
      { label: "ENS", variant: "purple" },
      { label: "Arc (USDC)", variant: "orange" },
      { label: "Foundry", variant: "default" },
      { label: "React", variant: "default" },
      { label: "wagmi + viem", variant: "default" },
    ],
    links: [
      { label: "ETHGlobal", href: "https://ethglobal.com/showcase/mand-ate-3npu6" },
      { label: "GitHub", href: `${GITHUB}/mandate` },
    ],
  },
  {
    name: "FluxDEX",
    meta: "Somnia testnet · 2026",
    tagline: "Uniswap V3 liquidity that re-centres itself.",
    description: [
      "A concentrated-liquidity position only earns fees while the price stays inside its range, and LPs usually re-centre it by hand or with an off-chain bot. FluxDEX does it on-chain. Each FluxVault owns a Uniswap V3 position and subscribes to its pool's Swap events through Somnia Reactivity, so the chain itself calls the vault after a swap. If the price has left the range, the vault burns the position and mints a new one around the current tick, checked against a TWAP to resist manipulation.",
      "Storage reads on Somnia cost hundreds of times more gas than on Ethereum, so the hot path caches state in memory and packs its config into one slot. A Node indexer streams prices and rebalances to a React dashboard over WebSockets.",
    ],
    chips: [
      { label: "Solidity", variant: "purple" },
      { label: "Uniswap V3", variant: "purple" },
      { label: "Somnia Reactivity", variant: "orange" },
      { label: "Foundry", variant: "default" },
      { label: "Node.js", variant: "default" },
      { label: "React", variant: "default" },
    ],
    links: [{ label: "GitHub", href: `${GITHUB}/FluxDEX` }],
  },
  {
    name: "Kamino plugin for elizaOS",
    meta: "Solana · AI agents · 2026",
    tagline: "Lend and borrow on Kamino by asking an agent.",
    description: [
      "A plugin for the elizaOS agent framework that lets an AI agent use Kamino Finance's lending markets on Solana from plain-language requests. Ask it to \"lend 100 USDC\" or \"repay max\", and the agent's language model turns the request into structured parameters, picks the matching action and signs the transaction.",
      "It covers supplying and withdrawing, depositing and withdrawing collateral, borrowing and repaying, plus a health check that reports LTV, borrow limit and liquidation risk. A market provider puts live APYs, liquidity and LTVs into the agent's context on every turn. Each action is small and single-purpose with a precise description, because that's what keeps the agent's planner from choosing the wrong one.",
    ],
    chips: [
      { label: "TypeScript", variant: "purple" },
      { label: "elizaOS", variant: "purple" },
      { label: "Kamino klend-sdk", variant: "orange" },
      { label: "@solana/kit", variant: "default" },
      { label: "Bun", variant: "default" },
    ],
    links: [
      {
        label: "GitHub",
        href: `${GITHUB}/eliza/tree/feat/plugin-kamino-pr/plugins/plugin-kamino`,
      },
    ],
  },
  {
    name: "Hangout",
    meta: "Full stack · 2025",
    tagline: "Real-time one-to-one chat.",
    description: [
      "A full-stack chat app on the MERN stack with Socket.IO. Messages are saved to MongoDB and pushed straight to the recipient's socket, and a presence list the server broadcasts on every connect and disconnect shows who's online. You can send images as well as text: the server uploads them to Cloudinary, resized to fit, and stores the link with the message.",
      "Passwords are hashed with bcrypt, and sessions are JWTs in an httpOnly cookie that lasts seven days. On the client, Zustand stores hold auth, chat and theme state, and the UI is built with Tailwind and DaisyUI, so you can switch between DaisyUI's 32 themes.",
    ],
    chips: [
      { label: "React", variant: "purple" },
      { label: "Socket.IO", variant: "purple" },
      { label: "Node.js", variant: "default" },
      { label: "Express", variant: "default" },
      { label: "MongoDB", variant: "default" },
      { label: "Zustand", variant: "default" },
      { label: "DaisyUI", variant: "default" },
    ],
    links: [{ label: "GitHub", href: `${GITHUB}/hangout` }],
  },
];

const moreProjects: { name: string; desc: string; href: string }[] = [
  {
    name: "airBNB-clone",
    desc: "Listings, a three-step host flow and bookings. React, Express, MongoDB, Cloudinary.",
    href: `${GITHUB}/airBNB-clone`,
  },
  {
    name: "crypto-wallet",
    desc: "My first Solana project: a web wallet with accounts and SOL transfers. In progress.",
    href: `${GITHUB}/crypto-wallet`,
  },
  {
    name: "cpi-w-pda",
    desc: "A native Rust Solana program that creates a PDA through a signed CPI.",
    href: `${GITHUB}/cpi-w-pda`,
  },
  {
    name: "linkedin-adblocker",
    desc: "A browser extension that hides sponsored posts and sidebar ads on LinkedIn.",
    href: `${GITHUB}/linkedin-adblocker`,
  },
  {
    name: "UpperEdge-Cryptotracker",
    desc: "Live coin prices from the Coinranking API, in plain HTML, CSS and JavaScript.",
    href: `${GITHUB}/UpperEdge-Cryptotracker`,
  },
  {
    name: "ICP-SPEED_TYPING",
    desc: "A typing-speed test deployed as canisters on the Internet Computer, with a Motoko backend.",
    href: `${GITHUB}/ICP-SPEED_TYPING`,
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
      color: "#c2410c",
      border: "1px solid rgba(249,115,22,0.25)",
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

function ProjectLinks({ links }: { links: Link[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {links.map(({ label, href }, i) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[12px] font-semibold border transition-all duration-200 hover:-translate-y-0.5 ${
            i === 0
              ? "bg-[var(--color-primary)] border-[var(--color-primary)] text-white hover:bg-[var(--color-secondary)] hover:border-[var(--color-secondary)]"
              : "border-[var(--color-outline-var)] text-[var(--color-primary)] hover:border-[var(--color-secondary)] hover:text-[var(--color-secondary)]"
          }`}
          style={{ fontFamily: "var(--font-display)" }}
        >
          {label === "GitHub" && <GitHubIcon />}
          {label}
          <ArrowIcon />
        </a>
      ))}
    </div>
  );
}

function CardHeader({
  project,
  number,
  large = false,
}: {
  project: Project;
  number: string;
  large?: boolean;
}) {
  return (
    <>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-4">
        <p
          className="text-[11px] font-semibold uppercase tracking-[0.1em]"
          style={{ fontFamily: "var(--font-mono)", color: "var(--color-outline)" }}
        >
          {number} · {project.meta}
        </p>
        {project.badge && (
          <span
            className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.08em] px-2.5 py-0.5 rounded-full"
            style={{
              fontFamily: "var(--font-mono)",
              background: "rgba(249,115,22,0.1)",
              color: "#c2410c",
              border: "1px solid rgba(249,115,22,0.25)",
            }}
          >
            <TrophyIcon />
            {project.badge}
          </span>
        )}
      </div>
      <h3
        className={`${large ? "text-[32px]" : "text-[24px]"} font-bold tracking-[-0.01em] mb-1`}
        style={{ fontFamily: "var(--font-display)", color: "var(--color-primary)" }}
      >
        {project.name}
      </h3>
      <p
        className="text-[15px] font-semibold mb-4"
        style={{ fontFamily: "var(--font-display)", color: "var(--color-secondary)" }}
      >
        {project.tagline}
      </p>
    </>
  );
}

function Description({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="flex flex-col gap-3">
      {paragraphs.map((p) => (
        <p
          key={p.slice(0, 32)}
          className="text-[14.5px] leading-[1.7]"
          style={{ color: "var(--color-on-surface-var)" }}
        >
          {p}
        </p>
      ))}
    </div>
  );
}

const cardClass =
  "relative bg-white rounded-[1.5rem] border border-transparent overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--color-outline-var)] group";
const cardShadow = { boxShadow: "0 20px 40px rgba(0,0,0,0.04)" };

function HoverBar() {
  return (
    <div
      className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      style={{ background: "linear-gradient(90deg, var(--color-secondary), var(--color-accent))" }}
    />
  );
}

function ProjectCard({ project, number }: { project: Project; number: string }) {
  return (
    <article className={`${cardClass} flex flex-col p-7 sm:p-9`} style={cardShadow}>
      <HoverBar />
      <CardHeader project={project} number={number} />
      <div className="mb-6">
        <Description paragraphs={project.description} />
      </div>
      <div className="mt-auto flex flex-col gap-5">
        <div className="flex flex-wrap gap-1.5">
          {project.chips.map((c) => (
            <TechChip key={c.label} {...c} />
          ))}
        </div>
        <ProjectLinks links={project.links} />
      </div>
    </article>
  );
}

function FeaturedCard({ project }: { project: Project }) {
  return (
    <article className={cardClass} style={cardShadow}>
      <HoverBar />
      <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_1fr] gap-10 p-7 sm:p-9 lg:p-11">
        <div>
          <CardHeader project={project} number="01 · Featured" large />
          <Description paragraphs={project.description} />
        </div>
        <div className="flex flex-col gap-7 lg:pl-10 lg:border-l border-[var(--color-outline-var)]">
          {project.stats && (
            <dl className="flex flex-col gap-5">
              {project.stats.map(({ value, label }) => (
                <div key={value}>
                  <dt
                    className="text-[30px] font-extrabold tracking-[-0.03em] leading-none mb-1.5"
                    style={{ fontFamily: "var(--font-display)", color: "var(--color-primary)" }}
                  >
                    {value}
                  </dt>
                  <dd className="text-[13.5px] leading-[1.55]" style={{ color: "var(--color-on-surface-var)" }}>
                    {label}
                  </dd>
                </div>
              ))}
            </dl>
          )}
          <div className="mt-auto flex flex-col gap-5">
            <div className="flex flex-wrap gap-1.5">
              {project.chips.map((c) => (
                <TechChip key={c.label} {...c} />
              ))}
            </div>
            <ProjectLinks links={project.links} />
          </div>
        </div>
      </div>
    </article>
  );
}

function MoreCard() {
  return (
    <article
      className="relative rounded-[1.5rem] p-7 sm:p-9 flex flex-col"
      style={{ background: "var(--color-primary-card)", boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
    >
      <p
        className="text-[11px] font-semibold uppercase tracking-[0.1em] mb-4"
        style={{ fontFamily: "var(--font-mono)", color: "rgba(255,255,255,0.45)" }}
      >
        More on GitHub
      </p>
      <h3
        className="text-[24px] font-bold tracking-[-0.01em] mb-5"
        style={{ fontFamily: "var(--font-display)", color: "#fff" }}
      >
        Earlier and smaller builds
      </h3>
      <ul className="flex flex-col gap-1 mb-7">
        {moreProjects.map(({ name, desc, href }) => (
          <li key={name}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link block rounded-xl px-3 py-2.5 -mx-3 transition-colors duration-200 hover:bg-white/[0.06]"
            >
              <span
                className="flex items-center gap-1.5 text-[13px] font-semibold mb-0.5 text-white transition-colors duration-200 group-hover/link:text-[#c4b5fd]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {name}
                <ArrowIcon />
              </span>
              <span className="block text-[13.5px] leading-[1.55]" style={{ color: "rgba(255,255,255,0.6)" }}>
                {desc}
              </span>
            </a>
          </li>
        ))}
      </ul>
      <a
        href={GITHUB}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto self-start inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[12px] font-semibold border border-white/20 text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-white/50"
        style={{ fontFamily: "var(--font-display)" }}
      >
        <GitHubIcon />
        All repositories
        <ArrowIcon />
      </a>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-[1280px] mx-auto">
        <p
          className="text-[12px] font-semibold uppercase tracking-[0.12em] mb-3"
          style={{ fontFamily: "var(--font-mono)", color: "var(--color-secondary)" }}
        >
          # Projects
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

        <div className="flex flex-col gap-5">
          <FeaturedCard project={featured} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {projects.map((p, i) => (
              <ProjectCard key={p.name} project={p} number={String(i + 2).padStart(2, "0")} />
            ))}
            <MoreCard />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Inline SVG icons ── */
function GitHubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}
function ArrowIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}
function TrophyIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4zM17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3" />
    </svg>
  );
}
