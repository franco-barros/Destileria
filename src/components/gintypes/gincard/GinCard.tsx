"use client";

import Image from "next/image";
import styles from "../../../styles/gintypes/GinCard.module.css";

interface Gin {
  id: number;
  name: string;
  type: string; // reemplaza "style"
  abv: string;
  image: string;
  description: string;
}

interface GinCardProps {
  gin: Gin;
}

export default function GinCard({ gin }: GinCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image src={gin.image} alt={gin.name} fill className={styles.image} />
      </div>

      <h3 className={styles.name}>{gin.name}</h3>
      <p className={styles.type}>{gin.type}</p>
      <span className={styles.abv}>ABV {gin.abv}</span>
      <p className={styles.description}>{gin.description}</p>
    </div>
  );
}
