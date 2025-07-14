import React from "react";
import styles from "./HeroIcon.module.css";
import { Hero } from "../data/hero";
import Image from "next/image";

interface Props {
  hero: Hero;
  onClick: () => void;
}

const HeroIcon: React.FC<Props> = ({ hero, onClick }) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <Image
        src={hero.image}
        alt={hero.name}
        title={hero.name}
        className={styles.image}
        width={64}
        height={64}
        // className={styles.skillIcon}
      />
      <span className={styles.name}>{hero.name}</span>
    </div>
  );
};

export default HeroIcon;
