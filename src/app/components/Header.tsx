"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-black/70 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <Link href="/" className="text-2xl font-bold text-yellow-300">
          GGG
        </Link>

        <ul className="flex gap-6 font-medium items-center">
          <li>
            <Link
              href="/tier-list"
              className="hover:text-yellow-400 transition-colors"
            >
              Tier List
            </Link>
          </li>

          <li>
            <Link
              href="/synergyhero"
              className="hover:text-yellow-400 transition-colors"
            >
              Synergy
            </Link>
          </li>

          <li>
            <Link
              href="/builder"
              className="hover:text-yellow-400 transition-colors"
            >
              Lineup Builder
            </Link>
          </li>

          <li>
            <Link
              href="/draft"
              className="hover:text-yellow-400 transition-colors"
            >
              Draft
            </Link>
          </li>

          <li>
            <Link
              href="/about"
              className="hover:text-yellow-400 transition-colors"
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
