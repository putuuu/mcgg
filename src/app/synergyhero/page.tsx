import React from "react";
import HeroSynergyGrid from "../components/HeroSynergyGrid";
import styles from "./page.module.css";

const SynergyHeroPage = () => {
  return (
    <main className={styles.aboutPage}>
      <h1
        style={{ textAlign: "center", marginTop: "1rem", marginBottom: "2rem" }}
      >
        Synergy Overview
      </h1>
      <section className={styles.aboutSection}>
        <strong>Blessing of Embers is here!</strong>
        <br />
        <p>The war between the divine and demonic is about to ignite!</p>
        <p>
          For a thousand years, the balance between the divine and demonic held
          fast
        </p>

        <p>until now</p>

        <p>The final battle has begun</p>
      </section>

      <HeroSynergyGrid />
    </main>
  );
};

export default SynergyHeroPage;
