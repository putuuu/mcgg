"use client";

import React from "react";
import { Equipment } from "../data/equipment";
import styles from "./EquipmentCard.module.css";
import Image from "next/image";

interface Props {
  item: Equipment;
}

const EquipmentCard: React.FC<Props> = ({ item }) => {
  return (
    <div className={styles.card}>
      <Image
        src={item.icon}
        alt={item.name}
        width={80}
        height={80}
        className={styles.icon}
      />
      <h3 className={styles.name}>{item.name}</h3>
      <p className={styles.category}>{item.category}</p>
      {item.special && <p className={styles.special}>🌟 {item.special}</p>}
      <ul className={styles.attributes}>
        {item.attribute.map((attr, index) => (
          <li key={index}>{attr}</li>
        ))}
      </ul>
      {item.passive && (
        <div className={styles.passive}>
          <strong>{item.passive}</strong>
          <p>{item.pdesc}</p>
        </div>
      )}
    </div>
  );
};

export default EquipmentCard;
