"use client";

import BeerCard from "./beercard";
import BeerTypesSlider from "./beertypesslider";

import styles from "../../styles/beertypes/BeerTypes.module.css";

interface Beer {
  id: number;
  name: string;
  style: string;
  abv: string;
  image: string;
  description: string;
}

const beers: Beer[] = [
  {
    id: 1,
    name: "Golden Ale",
    style: "Rubia Suave",
    abv: "5.2%",
    image: "/images/Cerveza1.png",
    description: "Refrescante, suave y con notas leves a cereal.",
  },
  {
    id: 2,
    name: "Irish Red",
    style: "Roja Caramelizada",
    abv: "5.0%",
    image: "/images/Cerveza5.png",
    description: "Cuerpo medio, toques a caramelo y leve tostado.",
  },
  {
    id: 3,
    name: "Stout",
    style: "Negra Cremosa",
    abv: "6.0%",
    image: "/images/Cerveza6.png",
    description: "Oscura, intensa y con notas a café y chocolate.",
  },
];

export default function BeerTypes() {
  return (
    <section className={styles.section} id="beers">
      <h2 className={styles.title}>Nuestras Cervezas</h2>

      {/* Desktop grid */}
      <div className={styles.grid}>
        {beers.map((b) => (
          <BeerCard key={b.id} beer={b} />
        ))}
      </div>

      {/* Mobile slider */}
      <BeerTypesSlider beers={beers} />
    </section>
  );
}
