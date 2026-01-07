// pages/index.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-32">
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-28 pb-20 px-6">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Build Smarter
            <span className="block text-[var(--neon-color,theme(colors.cyan.400))]">
              Magic Chess GoGo
            </span>
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-white/70 text-lg">
            Create compositions, learn 4v4 roles, and practice draft decisions
            with clean, patch-resistant tools.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <Link
              href="/builder"
              className="rounded-xl px-6 py-3 font-semibold
              bg-cyan-400/90 text-black hover:bg-cyan-300 transition"
            >
              Open Synergy Builder
            </Link>

            <Link
              href="/guides"
              className="rounded-xl px-6 py-3 font-semibold
              border border-white/20 hover:border-white/40 transition"
            >
              Start with Guides
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
            {/* Builder */}
            <ToolCard
              title="Synergy Builder"
              desc="Create and test compositions freely without meta pressure."
              href="/builder"
              accent="cyan"
            />

            {/* Guides */}
            <ToolCard
              title="Guides"
              desc="Learn fundamentals for Solo & 4v4 play that survive patches."
              href="/guides"
              accent="violet"
            />

            {/* Draft */}
            <ToolCard
              title="Draft Pick Simulator"
              desc="Practice real draft scenarios and decision making."
              href="/draft"
              accent="emerald"
            />
          </div>
        </div>
      </section>

      {/* ================= WHY MCGG ================= */}
      <section className="px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Why MCGG?
          </h2>

          <div className="grid md:grid-cols-4 gap-6 text-sm">
            <WhyCard text="Patch-resistant strategy focus" />
            <WhyCard text="Role-based 4v4 mindset" />
            <WhyCard text="Beginner-friendly explanations" />
            <WhyCard text="Clean tools over raw data" />
          </div>
        </div>
      </section>

      {/* ================= GUIDES PREVIEW ================= */}
      <section className="px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-semibold">Featured Guides</h2>
            <Link
              href="/guides"
              className="text-sm text-cyan-400 hover:underline"
            >
              View all
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <GuideCard title="4v4 Role Fundamentals" />
            <GuideCard title="Support vs Carry Decision Logic" />
            <GuideCard title="How to Pivot Compositions" />
          </div>
        </div>
      </section>

      {/* ================= BUILDER PREVIEW ================= */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4">
              Synergy Builder First
            </h2>
            <p className="text-white/70 mb-6">
              MCGG is built around composition thinking. The builder is not an
              extra feature — it is the core.
            </p>

            <Link
              href="/builder"
              className="inline-block rounded-xl px-6 py-3 font-semibold
              bg-cyan-400/90 text-black hover:bg-cyan-300 transition"
            >
              Try the Builder
            </Link>
          </div>

          {/* Dummy Preview Box */}
          <div
            className="h-64 rounded-2xl border border-white/10
            bg-white/5 backdrop-blur-sm
            flex items-center justify-center text-white/40"
          >
            Builder Preview
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

function GuideCard({ title }: { title: string }) {
  return (
    <div className="rounded-2xl p-6 border border-white/10 bg-white/5">
      <div className="h-24 rounded-lg bg-white/10 mb-4" />
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-white/60 mt-2">
        Concept-focused guide that remains relevant across seasons.
      </p>
    </div>
  );
}
