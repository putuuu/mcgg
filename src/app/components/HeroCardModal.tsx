import React, { useEffect, useRef, useCallback } from "react";
import styles from "./HeroCardModal.module.css";
import { Hero } from "../data/hero";
import Image from "next/image";

interface Props {
  hero: Hero;
  onClose: () => void;
}

const HeroCardModal: React.FC<Props> = ({ hero, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [handleClickOutside]);

  return (
    <div className={styles.overlay}>
      <div className={styles.modal} ref={modalRef}>
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>

        <div className={styles.left}>
          <Image
            src={hero.image}
            alt={hero.name}
            width={64}
            height={64}
            className={styles.heroImage}
            // className={styles.skillIcon}
          />
        </div>

        <div className={styles.right}>
          <h2 className={styles.heroName}>{hero.name}</h2>
          <p className={styles.shortDesc}>{hero.skill.sdescription}</p>

          <div className={styles.stats}>
            <p>
              <strong>Cost :</strong> {hero.cost}🟡
            </p>
            <p>
              <strong>Initial Mana:</strong> {hero.mana.initial}
            </p>
            <p>
              <strong>Mana Cap:</strong> {hero.mana.max}
            </p>
          </div>

          <div className={styles.skillSection}>
            <h3>Skill</h3>
            <div className={styles.skill}>
              <Image
                src={hero.skill.icon}
                alt={hero.skill.name}
                title={hero.skill.name}
                width={64}
                height={64}
                // className={styles.skillIcon}
              />
              <div>
                <strong>{hero.skill.name}</strong>
                <p className={styles.skillDesc}>{hero.skill.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCardModal;
