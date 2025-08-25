import { Commander } from "../../data/commanders";
import Image from "next/image";
import Link from "next/link";
import styles from "./CommanderCard.module.css";

export default function CommanderCard({ commander }: { commander: Commander }) {
  return (
    <div className={`group ${styles.card}`}>
      <Link href={`/commander/${commander.slug}`}>
        <div className={styles.imageContainer}>
          <Image
            src={commander.image}
            alt={commander.name}
            loading="lazy"
            fill
            style={{ objectFit: "fill", borderRadius: "12px" }}
          />
        </div>

        <div className={styles.overlayContainer}>
          <h3 className={styles.overlayName}>{commander.name}</h3>
          <p className={styles.overlayType}>{commander.type}</p>
          <p className={styles.overlayDesc}>"{commander.sdescription}"</p>
        </div>

        {/* Bisa tambahkan tombol di sini jika mau */}
      </Link>
    </div>
  );
}
