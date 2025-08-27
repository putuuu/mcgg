"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <header className="bg-black/60 sticky top-0 z-50 backdrop-blur-md">
      <div className="max-w-[960px] mx-auto flex justify-between items-center p-4">
        {/* Logo / Title */}
        <Link href="/" className="text-xl font-bold text-white">
          MCGG
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileNavOpen(!isMobileNavOpen)}
        >
          {isMobileNavOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Navigation */}
        <nav
          className={`flex flex-col md:flex-row md:items-center md:gap-4 absolute md:static top-full left-0 w-full md:w-auto bg-black/80 md:bg-transparent transition-all duration-200 ${
            isMobileNavOpen ? "flex" : "hidden md:flex"
          }`}
        >
          <Link
            href="/commander"
            className="px-3 py-2 rounded-md text-white hover:bg-white/10 transition"
          >
            Commander
          </Link>
          <Link
            href="/synergyhero"
            className="px-3 py-2 rounded-md text-white hover:bg-white/10 transition"
          >
            Sinergi & Hero
          </Link>
          <Link
            href="/equipment"
            className="px-3 py-2 rounded-md text-white hover:bg-white/10 transition"
          >
            Equipment
          </Link>
          <Link
            href="/gogo-card"
            className="px-3 py-2 rounded-md text-white hover:bg-white/10 transition"
          >
            Gogo Card
          </Link>
          <Link
            href="/guide"
            className="px-3 py-2 rounded-md text-white hover:bg-white/10 transition"
          >
            Guide
          </Link>
          <Link
            href="/about"
            className="px-3 py-2 rounded-md text-white hover:bg-white/10 transition"
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
