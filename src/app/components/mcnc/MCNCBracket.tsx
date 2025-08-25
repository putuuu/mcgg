import { playoffBracket } from "../../data/mcncPlayoff";
import styles from "../../mcnc/page.module.css";
export default function MCNCBracket() {
  return (
    <section className={styles.bracketSection}>
      <h2 className={styles.title}>Playoff Bracket</h2>
      <div className={styles.bracketContainer}>
        {playoffBracket.map((round, i) => (
          <div key={i} className={styles.bracketColumn}>
            <h3>{round.round}</h3>
            {round.matches.map((match) => (
              <div key={match.id} className={styles.matchBox}>
                <div className={styles.team}>{match.teamA}</div>
                <div className={styles.vs}>vs</div>
                <div className={styles.team}>{match.teamB}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
