"use client";

import { useState } from "react";
import MCNCIntro from "../components/mcnc/MCNCIntro";
import MCNCRules from "../components/mcnc/MCNCRules";
import MCNCStandings from "../components/mcnc/MCNCStandings";
import MCNCBracket from "../components/mcnc/MCNCBracket";
import styles from "./page.module.css";

const tabs = ["Info & Rules", "Standings", "Playoffs"];

export default function MCNCPage() {
  const [activeTab, setActiveTab] = useState("Info & Rules");

  return (
    <main className={styles.mcncPage}>
      <h1 className={styles.pageTitle}>
        MCNC — Magic Chess National Championship
      </h1>
      <div className={styles.tabList}>
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`${styles.tabButton} ${
              activeTab === tab ? styles.active : ""
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className={styles.tabContent}>
        {activeTab === "Info & Rules" && (
          <>
            <MCNCIntro />
            <MCNCRules />
          </>
        )}
        {activeTab === "Standings" && <MCNCStandings />}
        {activeTab === "Playoffs" && <MCNCBracket />}
      </div>
    </main>
  );
}
