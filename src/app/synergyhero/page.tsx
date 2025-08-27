"use client";
import React from "react";
import HeroSynergyGrid from "../components/synergyhero/HeroSynergyGrid";

const SynergyHeroPage = () => {
  return (
    <main className="mx-auto text-gray-100">
      <h1 className="text-center mt-4 mb-8 text-3xl font-bold">
        Synergy Overview
      </h1>

      {/* About Section */}
      <div className="text-center max-w-5xl mx-auto bg-black/30 p-6 rounded-xl leading-relaxed">
        <strong className="block mb-2">
          The Cosmic Trader has opened the gates!
        </strong>
        <p>
          Beyond the stars, a market of endless possibilities emerges. New
          alliances awaken, but the echoes of the old still remain.
        </p>
        <p className="mt-2">
          No more simple choices… now, power is won through the Auction. The
          weaker bid first, but the boldest claim it all.
        </p>
        <p className="mt-2">
          The future belongs to those who dare to trade with the cosmos.
        </p>
      </div>

      {/* Grid / Table */}
      <HeroSynergyGrid />
    </main>
  );
};

export default SynergyHeroPage;
