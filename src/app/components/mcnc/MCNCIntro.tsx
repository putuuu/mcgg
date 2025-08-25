import { mcncInfo } from "../../data/mcncInfo";
import styles from "../../mcnc/page.module.css";

export default function MCNCIntro() {
  return (
    <section className={styles.card}>
      <h1>{mcncInfo.title}</h1>
      <p>{mcncInfo.description}</p>
      <p>{mcncInfo.seasonHighlight}</p>
      <blockquote className={styles.quote}>"{mcncInfo.quote}"</blockquote>
    </section>
  );
}
