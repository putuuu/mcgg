import { commanders } from "../../data/commanders";
import { notFound } from "next/navigation";

export default function CommanderDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const commanderId = parseInt(params.id);
  const commander = commanders.find((c) => c.id === commanderId);

  if (!commander) return notFound();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      {/* Top section: image + skills */}
      <div style={{ display: "flex", gap: "2rem" }}>
        {/* Left: Commander image */}
        <div>
          <img
            src={commander.image}
            alt={commander.name}
            style={{
              width: "293px",
              height: "404px",
              objectFit: "fill",
              borderRadius: "10px",
            }}
          />
        </div>

        {/* Right: Skill list */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {commander.skills.map((skill, idx) => (
            <div
              key={idx}
              style={{
                display: "flex",
                gap: "0.75rem",
                background: "#f4f4f4",
                padding: "0.75rem",
                borderRadius: "8px",
              }}
            >
              <img
                src={skill.icon}
                alt={skill.name}
                style={{ width: "48px", height: "48px", borderRadius: "6px" }}
              />
              <div>
                <p style={{ margin: 0 }}>
                  <strong>
                    Lv.{skill.level} - {skill.name}
                  </strong>{" "}
                  ({skill.type})
                </p>
                <p style={{ fontSize: "0.9rem", margin: 0 }}>
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom: Description */}
      <div>
        <p>{commander.description}</p>
      </div>
    </div>
  );
}
