"use client";

import Link from "next/link";
import { useState, useRef } from "react";

export default function Header() {
  const [open, setOpen] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleEnter = (menu: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(menu);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(null), 200);
  };

  return (
    <header className="sticky top-0 z-50 bg-black/70 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <Link href="/" className="text-2xl font-bold text-yellow-300">
          GGG
        </Link>

        <ul className="flex gap-6 font-medium items-center">
          {/* <li>
            <Link
              href="/patches"
              className="hover:text-yellow-400 transition-colors"
            >
              New Update
            </Link>
          </li> */}
          <li>
            <Link
              href="/guide"
              className="hover:text-yellow-400 transition-colors"
            >
              Guide
            </Link>
          </li>

          {/* Dropdown CSS-only */}
          <div
            className="relative"
            onMouseEnter={() => handleEnter("data")}
            onMouseLeave={handleLeave}
          >
            <button className="hover:text-yellow-400">Data</button>
            {open === "data" && (
              <div
                className="
                absolute left-0 mt-2 w-48 bg-black/80 rounded-md shadow-lg 
                text-sm text-white
                before:absolute before:-top-2 before:left-0 before:w-full before:h-2 before:bg-transparent
              "
              >
                <Link
                  href="/commander"
                  className="block px-4 py-2 hover:bg-white/10"
                >
                  Commander
                </Link>
                <Link
                  href="/gogo-card"
                  className="block px-4 py-2 hover:bg-white/10"
                >
                  Go Go Card
                </Link>
                <Link
                  href="/synergyhero"
                  className="block px-4 py-2 hover:bg-white/10"
                >
                  Synergy
                </Link>
                <Link
                  href="/equipment"
                  className="block px-4 py-2 hover:bg-white/10"
                >
                  Equipment
                </Link>
              </div>
            )}
          </div>

          <li>
            <Link
              href="/builder"
              className="hover:text-yellow-400 transition-colors"
            >
              Synergy Builder
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
