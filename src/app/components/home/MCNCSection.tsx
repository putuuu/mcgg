// components/MCNCSection.tsx
import Link from "next/link";
import styles from "../../page.module.css";

export default function MCNCSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionQuote}>
        “Only the strongest survive the arena. Are you ready for MCNC?”
      </h2>
      <Link href="/mcnc" className={styles.mcncButton}>
        🎯 See MCNC Tournament Info
      </Link>
    </section>
  );
}
