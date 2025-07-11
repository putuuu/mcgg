"use client";

import Link from "next/link";

const features = [
  { title: "Commander", href: "/commander" },
  { title: "Hero", href: "/hero" },
  { title: "Synergy", href: "/sinergi" },
  { title: "Equipment", href: "/equipment" },
  { title: "Gogo Card", href: "/gogocard" },
  { title: "Guide", href: "/guide" },
];

export default function HomePage() {
  return (
    <main className="home-container">
      <h1 className="home-title">Magic Chess GO GO</h1>
      <p className="home-description">
        Explore everything about <strong>Magic Chess Go Go</strong> and dive
        into the world of <strong>MCNC</strong> — the ultimate 4v4 tournament!
      </p>

      <div className="link-grid">
        {features.map((item) => (
          <Link key={item.title} href={item.href} className="link-card">
            {item.title}
          </Link>
        ))}
      </div>

      <Link href="/mcnc" className="mcnc-button">
        🎯 See MCNC Tournament Info
      </Link>
    </main>
  );
}
