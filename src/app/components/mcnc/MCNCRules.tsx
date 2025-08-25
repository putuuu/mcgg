import { mcncRules } from "../../data/mcncInfo";
import styles from "../../mcnc/page.module.css";

export default function MCNCRules() {
  return (
    <section className={styles.card}>
      <h2>General Info</h2>
      <ul>
        <li>
          <strong>Mode:</strong> {mcncRules.mode}
        </li>
        <li>
          <strong>Banned List:</strong> {mcncRules.banned}
        </li>
        <li>
          <strong>Venue:</strong> {mcncRules.venue}
        </li>
        {/* <li>
          <strong>Registration Fee:</strong> {mcncRules.registration}
        </li>
        <li>
          <strong>Prize Pool:</strong> {mcncRules.prizePool}
        </li> */}
      </ul>
      <br />
      <h2>Point System</h2>
      <ul>
        {mcncRules.pointSystem.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
      <br />
      <h2>Tournament Stages</h2>
      {mcncRules.stages.map((stage, i) => (
        <div key={i} style={{ marginBottom: "1rem" }}>
          <h3>{stage.name}</h3>
          <ul>
            {stage.format.map((f, j) => (
              <li key={j}>{f}</li>
            ))}
          </ul>
        </div>
      ))}

      <h2>Draft Rules</h2>
      <ul>
        <li>
          <strong>Mode:</strong> {mcncRules.draft.mode}
        </li>
        <li>
          <strong>Timeout:</strong> {mcncRules.draft.timeout}
        </li>
      </ul>
      <br />
      <h3>Tiebreak Criteria</h3>
      <ul>
        {mcncRules.draft.tiebreak.map((rule, i) => (
          <li key={i}>{rule}</li>
        ))}
      </ul>
    </section>
  );
}
