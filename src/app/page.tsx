import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-28">
      {/* HERO */}
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
              className="rounded-xl px-6 py-3 font-semibold bg-cyan-400/90 text-black hover:bg-cyan-300 transition"
            >
              View Tier List
            </Link>

            <Link
              href="/builder"
              className="rounded-xl px-6 py-3 font-semibold border border-white/20 hover:border-white/40 transition"
            >
              Open Lineup Builder
            </Link>
          </div>
        </div>
      </section>

      {/* CORE TOOLS */}
      <section className="px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Core Tools
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <ToolCard
              title="Tier List"
              desc="Season-based meta snapshot for Solo & 4v4."
              href="/tier-list"
            />
            <ToolCard
              title="Synergy Explorer"
              desc="Understand factions and roles."
              href="/synergyhero"
            />
            <ToolCard
              title="Lineup Builder"
              desc="Build and test compositions."
              href="/builder"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function ToolCard({
  title,
  desc,
  href,
}: {
  title: string;
  desc: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:-translate-y-1"
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-white/60 text-sm">{desc}</p>
    </Link>
  );
}
