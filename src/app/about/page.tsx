"use client";

import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="p-8 max-w-3xl mx-auto text-gray-100">
      {/* Title */}
      <h1 className="text-center text-4xl font-bold mb-8">
        About This Website
      </h1>

      {/* About Section */}
      <section className="bg-black/30 p-6 rounded-xl leading-relaxed backdrop-blur-md">
        <p>
          <strong>Magic Chess Go Go</strong> is a strategic auto-battler game
          that combines synergies, heroes, equipment, and tactical planning.
          This site is built to help players explore content and optimize their
          strategy.
        </p>

        <p className="mt-4">
          This website is developed and maintained by{" "}
          <strong>Khoceng Orenzzz</strong>.
        </p>

        <p className="mt-4">
          Big Thanks to <strong>Klinik KB 24 Jam</strong>.
        </p>

        <p className="mt-6 text-sm text-gray-400 italic">
          Disclaimer: This is a fan-made website and is not affiliated with
          Moonton or the official Magic Chess Go Go team.
        </p>
      </section>

      {/* Roadmap Section */}
      <section className="mt-12 bg-black/30 p-6 rounded-xl backdrop-blur-md">
        <h2 className="text-2xl font-semibold mb-4 text-white">
          What’s Coming
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>🔥 Weekly recommended compositions (meta highlights)</li>
          <li>📆 Upcoming MCNC Tournament info & schedule</li>
          <li>🧭 Season patch notes & analysis</li>
          <li>📚 Tips, tricks, and strategy guides</li>
        </ul>
      </section>

      {/* Back Link */}
      <div className="text-center mt-12 text-sm">
        <Link
          href="/"
          className="text-yellow-400 font-semibold hover:underline"
        >
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}
