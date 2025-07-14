import React from "react";
import styles from "./HeroIcon.module.css";
import { Hero } from "../data/hero";

interface Props {
  hero: Hero;
  onClick: () => void;
}

const HeroIcon: React.FC<Props> = ({ hero, onClick }) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <img src={hero.image} alt={hero.name} className={styles.image} />
      <span className={styles.name}>{hero.name}</span>
    </div>
  );
};

export default HeroIcon;
