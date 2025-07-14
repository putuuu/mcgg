"use client";

import React, { useRef, useEffect } from "react";
import { Synergy } from "../data/sinergi";
import styles from "./SynergyCardModal.module.css";
import Image from "next/image";

interface Props {
  synergy: Synergy;
  onClose: () => void;
}

const SynergyCardModal: React.FC<Props> = ({ synergy, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const handleClickOutside = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
    [onClose];
  };
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

        <div className={styles.header}>
          <Image
            src={synergy.icon}
            alt={synergy.name}
            title={synergy.name}
            className={styles.icon}
            width={64}
            height={64}
            // className={styles.skillIcon}
          />
          <h2 className={styles.name}>{synergy.name}</h2>
        </div>

        <p className={styles.description}>{synergy.description}</p>

        <div className={styles.effects}>
          <h3>Effects</h3>
          <ul>
            {synergy.effects.map((effect, index) => (
              <li key={index}>
                <strong>{effect.units} units:</strong> {effect.effect}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SynergyCardModal;
