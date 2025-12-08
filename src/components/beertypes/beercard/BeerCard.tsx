"use client";

import Image from "next/image";
import styles from "../../../styles/beertypes/BeerCard.module.css";

interface Beer {
  id: number;
  name: string;
  style: string;
  abv: string;
  image: string;
  description: string;
}

interface BeerCardProps {
  beer: Beer;
}

export default function BeerCard({ beer }: BeerCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image src={beer.image} alt={beer.name} fill className={styles.image} />
      </div>

      <h3 className={styles.name}>{beer.name}</h3>
      <p className={styles.style}>{beer.style}</p>
      <span className={styles.abv}>ABV {beer.abv}</span>
      <p className={styles.description}>{beer.description}</p>
    </div>
  );
}
