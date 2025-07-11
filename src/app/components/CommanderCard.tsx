import { Commander } from "../data/commanders";
import Image from "next/image";
import Link from "next/link";

export default function CommanderCard({ commander }: { commander: Commander }) {
  return (
    <div style={cardStyle}>
      <Image
        src={commander.image}
        alt={commander.name}
        width={120}
        height={160}
        className="rounded-xl object-full"
      />
      <div>
        <h3 style={{ margin: "0.25rem 0" }}>{commander.name}</h3>
        <p style={{ fontSize: "0.85rem", margin: "0.25rem 0" }}>
          <strong>Type:</strong> {commander.type}
        </p>
        <p style={{ fontSize: "0.85rem", margin: "0.25rem 0" }}>
          <strong>Skill 1:</strong> {commander.skills[0]?.name}
        </p>{" "}
        <p style={{ fontSize: "0.85rem", margin: "0.25rem 0" }}>
          <strong>Skill 2:</strong> {commander.skills[1]?.name}
        </p>{" "}
        <p style={{ fontSize: "0.85rem", margin: "0.25rem 0" }}>
          {commander.sdescription}
        </p>
        <Link
          href={`/commander/${commander.id}`}
          style={{
            fontSize: "0.8rem",
            color: "#4f46e5",
            textDecoration: "underline",
          }}
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

const cardStyle = {
  width: "300px",
  background: "white",
  padding: "1rem",
  borderRadius: "8px",
  boxShadow: "0 0 6px rgba(0,0,0,0.08)",
};
