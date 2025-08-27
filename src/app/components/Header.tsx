"use client";

import Link from "next/link";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function Header() {
  const [toolsOpen, setToolsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black/50 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <Link href="/" className="text-2xl font-bold text-yellow-300">
          GGG
        </Link>

        <ul className="flex gap-6 font-medium items-center relative">
          <li>
            <Link href="/commander" className="hover:text-yellow-400">
              Commander
            </Link>
          </li>

          <li className="relative group">
            <button className="px-3 py-2">Data</button>
            <ul className="absolute left-0 mt-1 w-40 bg-gray-800 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
              <li className="px-4 py-2 hover:bg-gray-700">
                <a href="/synergyhero">Sinergi Hero</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-700">
                <a href="/equipment">Equipment</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-700">
                <a href="/gogo-card">Gogo Card</a>
              </li>
            </ul>
          </li>

          <li>
            <Link href="/builder" className="hover:text-yellow-400">
              Synergy Builder
            </Link>
          </li>
          <li>
            <Link href="/guide" className="hover:text-yellow-400">
              Guide
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-yellow-400">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
