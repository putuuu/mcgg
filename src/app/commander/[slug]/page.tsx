import { commanders } from "@/app/data/commanders";
import { notFound } from "next/navigation";
import Image from "next/image";
import styles from "./CommanderDetail.module.css";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function CommanderDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const commander = commanders.find(
    (c) => c.slug.toLowerCase() === slug.toLowerCase()
  );
  if (!commander) return notFound();

  return (
    <div className={styles.container}>
      {/* Atas: foto + info */}
      <div className={styles.topRow}>
        {/* Kiri: gambar */}
        <div className={styles.leftColumn}>
          <Image
            src={commander.image}
            alt={commander.name}
            width={300}
            height={400}
            className={styles.image}
          />
        </div>

        {/* Kanan: nama, type, sdesc, skills */}
        <div className={styles.rightColumn}>
          <h1 className={styles.name}>{commander.name}</h1>
          <p className={styles.type}>{commander.type}</p>
          <p className={styles.sdescription}>"{commander.sdescription}"</p>

          <h2 className={styles.skillTitle}>Skills</h2>
          <div className={styles.skills}>
            {commander.skills.map((skill, idx) => (
              <div key={idx} className={styles.skillCard}>
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={64}
                  height={64}
                  className={styles.skillIcon}
                />
                <div>
                  <div className={styles.skillMeta}>
                    <span className={styles.level}>Lv. {skill.level}</span>
                    <span className={styles.skillType}>{skill.type}</span>
                  </div>
                  <h3 className={styles.skillName}>{skill.name}</h3>
                  <p className={styles.skillDesc}>{skill.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Di bawah semua */}
      <div className={styles.fullDescription}>
        <h2>Strategy</h2>
        <p>{commander.description}</p>
      </div>
    </div>
  );
}
