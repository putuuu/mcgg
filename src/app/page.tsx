// pages/index.tsx
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import CommanderPreview from "./components/CommanderPreview";
import SynergyHeroSection from "./components/SynergyHeroSection";
import GogoCardPreview from "./components/GogoCardPreview";
import MCNCSection from "./components/MCNCSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <CommanderPreview />
      <SynergyHeroSection />
      <GogoCardPreview />
      <MCNCSection />
    </>
  );
}
