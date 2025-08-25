import { mcncStandings } from "../../data/mcncStandings";
import styles from "../../mcnc/page.module.css";

export default function MCNCStandings() {
  const sortedTeams = [...mcncStandings].sort((a, b) => b.points - a.points);

  const getBracketNote = (index: number) => {
    if (index === 0 || index === 1) return "Super Upper Bracket";
    if (index >= 2 && index <= 7) return "Upper Bracket";
    if (index >= 8 && index <= 15) return "Lower Bracket";
    if (index === 16 || index === 17) return "Not Qualified (Secured Spot)";
    return "Not Qualified";
  };

  return (
    <section className={styles.card}>
      <h2>Regular Season Standings</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>#</th>
            <th>Team</th>
            <th>W</th>
            <th>L</th>
            <th>2-0</th>
            <th>Pts</th>
            <th>Note</th>
          </tr>
        </thead>
        <tbody>
          {sortedTeams.map((team, i) => (
            <tr key={team.team}>
              <td>{i + 1}</td>
              <td>{team.team}</td>
              <td>{team.wins}</td>
              <td>{team.losses}</td>
              <td>{team.straightwin}</td>
              <td>{team.points}</td>
              <td style={{ fontSize: "0.8rem", color: "#ccc" }}>
                {getBracketNote(i)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
