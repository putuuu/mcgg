"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

// Semua kode header yang tadi, dipindah ke sini
export default function Header() {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-container">
        <Link href="/">
          <h1 className="site-title">MCGG</h1>
        </Link>

        <button
          className="mobile-menu-button"
          onClick={() => setMobileNavOpen(!isMobileNavOpen)}
        >
          {isMobileNavOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        <nav className={`site-nav ${isMobileNavOpen ? "open" : ""}`}>
          {/* <Link href="/">Home</Link> */}
          <Link href="/commander">Commander</Link>
          <Link href="/synergyhero">Sinergi & Hero</Link>
          <Link href="/equipment">Equipment</Link>
          {/* <Link href="/commander">Commander</Link> */}
          <Link href="/gogo-card">Gogo Card</Link>
          <Link href="/guide">Guide</Link>
          <Link href="/mcnc">MCNC</Link>
          <Link href="/about">About</Link>
        </nav>
      </div>
    </header>
  );
}
