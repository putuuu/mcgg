// pages/index.tsx
import HeroSection from "./components/home/HeroSection";
import FeatureSection from "./components/home/FeatureSection";
import CommanderPreview from "./components/home/CommanderPreview";
import SynergyHeroSection from "./components/home/SynergyHeroSection";
import GogoCardPreview from "./components/home/GogoCardPreview";
// import MCNCSection from "./components/home/MCNCSection";
import "./globals.css";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <CommanderPreview />
      <SynergyHeroSection />
      <GogoCardPreview />
    </>
  );
}
