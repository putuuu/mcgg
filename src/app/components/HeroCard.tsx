import React, { useState } from "react";
import type { Hero } from "../data/hero";
import type { CSSProperties } from "react";
import Image from "next/image";

interface HeroCardProps {
  hero: Hero;
}

const HeroCard: React.FC<HeroCardProps> = ({ hero }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="hero-card-wrapper" onClick={() => setFlipped(!flipped)}>
      <div className={`hero-card-inner ${flipped ? "flipped" : ""}`}>
        {/* Front Side */}
        <div className="hero-card-face hero-card-front">
          <Image
            src={hero.image}
            alt={hero.name}
            className="hero-image"
            width={64}
            height={64}
            // className={styles.skillIcon}
          />
          <h3>{hero.name}</h3>
          <p style={{ color: "#facc15", margin: "0.25rem 0" }}>{hero.cost}🪙</p>
          <p style={{ fontSize: "0.75rem", color: "#aaa" }}>
            <strong>Faction:</strong> {hero.synergies.faction}
            <br />
            <strong>Role:</strong> {hero.synergies.roles.join(" / ")}
          </p>
        </div>

        {/* Back Side */}
        <div className="hero-card-face hero-card-back">
          <Image
            src={hero.skill.icon}
            alt={hero.skill.name}
            title={hero.skill.name}
            width={64}
            height={64}
            style={{
              margin: "0 auto 0.5rem",
              display: "block",
              cursor: "pointer",
            }}
          />

          <h3 style={{ marginBottom: "0.5rem" }}>{hero.skill.name}</h3>

          <p style={{ fontSize: "0.8rem", color: "#ddd" }}>
            <strong>Mana:</strong> {hero.mana.initial}/{hero.mana.max}
            <br />
            {hero.skill.sdescription}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
