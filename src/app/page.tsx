// pages/index.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-28">
      {/* ================= HERO ================= */}
      <section className="relative pt-28 pb-20 px-6">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Magic Chess GoGo
            <span className="block text-cyan-400">
              Tools for Smarter Decisions
            </span>
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-white/70 text-lg">
            Understand the meta, explore synergies, and build lineups with tools
            designed for long-term decision making.
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <Link
              href="/tier-list"
              className="
                rounded-xl px-6 py-3 font-semibold
                bg-cyan-400/90 text-black
                hover:bg-cyan-300 transition
              "
            >
              View Tier List
            </Link>

            <Link
              href="/builder"
              className="
                rounded-xl px-6 py-3 font-semibold
                border border-white/20
                hover:border-white/40 transition
              "
            >
              Open Lineup Builder
            </Link>
          </div>
        </div>
      </section>

      {/* ================= CORE TOOLS ================= */}
      <section className="px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Core Tools
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <ToolCard
              title="Tier List"
              desc="Season-based meta snapshot."
              href="/tier-list"
              accent="cyan"
            />

            <ToolCard
              title="Synergy Explorer"
              desc="Browse factions and roles to understand how compositions are formed."
              href="/synergyhero"
              accent="violet"
            />

            <ToolCard
              title="Lineup Builder"
              desc="Build and test compositions freely with real synergy logic."
              href="/builder"
              accent="emerald"
            />
          </div>
        </div>
      </section>

      {/* ================= WHY THIS SITE ================= */}
      {/* <section className="px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold text-center mb-12">
            What Makes This Different
          </h2>

          <div className="grid md:grid-cols-4 gap-6 text-sm">
            <WhyCard text="Decision-focused, not stat-dump heavy" />
            <WhyCard text="Season & patch aware tools" />
            <WhyCard text="Composition-first mindset" />
            <WhyCard text="Built for Solo and 4v4 understanding" />
          </div>
        </div>
      </section> */}

      {/* ================= COMING SOON ================= */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Coming Next
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <ComingCard
              title="Concept-based Guides"
              desc="Clear explanations for Solo & 4v4 fundamentals."
            />
            <ComingCard
              title="4v4 Role Breakdown"
              desc="Support vs Carry mindset explained with examples."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function ToolCard({
  title,
  desc,
  href,
  accent,
}: {
  title: string;
  desc: string;
  href: string;
  accent: "cyan" | "violet" | "emerald";
}) {
  const accentMap = {
    cyan: "hover:border-cyan-400/60",
    violet: "hover:border-violet-400/60",
    emerald: "hover:border-emerald-400/60",
  };

  return (
    <Link
      href={href}
      className={`
        rounded-2xl p-6 border border-white/10
        bg-white/5 backdrop-blur-sm
        transition-all hover:-translate-y-1
        ${accentMap[accent]}
      `}
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-white/60 text-sm">{desc}</p>
    </Link>
  );
}

function WhyCard({ text }: { text: string }) {
  return (
    <div className="rounded-xl p-5 border border-white/10 bg-white/5 text-white/70">
      {text}
    </div>
  );
}

function ComingCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl p-6 border border-dashed border-white/20 bg-white/5">
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-white/60">{desc}</p>
      <span className="mt-4 inline-block text-xs text-white/40">
        Coming soon
      </span>
    </div>
  );
}
