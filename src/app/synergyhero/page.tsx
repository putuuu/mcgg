import React from "react";
import HeroSynergyGrid from "../components/HeroSynergyGrid";

const SynergyHeroPage = () => {
  return (
    <main>
      <h1 style={{ textAlign: "center", marginTop: "1rem" }}>
        Hero ↔ Synergy Overview
      </h1>
      <HeroSynergyGrid />
    </main>
  );
};

export default SynergyHeroPage;
