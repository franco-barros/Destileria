"use client";

import GinCard from "./gincard";
import GinTypesSlider from "./gintypesslider";

import styles from "../../styles/gintypes/GinTypes.module.css";

interface Gin {
  id: number;
  name: string;
  type: string;
  abv: string;
  image: string;
  botanicals: string;
  description: string;
}

const gins: Gin[] = [
  {
    id: 1,
    name: "Destiller One Original",
    type: "London Dry Gin",
    abv: "43%",
    image: "/images/gin-original.png",
    botanicals: "Enebro, coriandro, piel de limón y raíz de angélica",
    description:
      "Un gin equilibrado, limpio y aromático. Destilado lentamente para obtener un perfil fresco y elegante.",
  },
  {
    id: 2,
    name: "Destiller One Citrus",
    type: "Citrus Botanical Gin",
    abv: "40%",
    image: "/images/gin-citrus.png",
    botanicals: "Pomelo rosado, lima, cedrón y enebro",
    description:
      "Explosión cítrica con notas brillantes y refrescantes. Perfecto para tragos ligeros y veraniegos.",
  },
  {
    id: 3,
    name: "Destiller One Spice",
    type: "Botanical Spiced Gin",
    abv: "45%",
    image: "/images/gin-spice.png",
    botanicals: "Cardamomo, pimienta rosa, canela y enebro",
    description:
      "Complejo, cálido y especiado. Ideal para cocktails con carácter.",
  },
];

export default function GinTypes() {
  return (
    <section className={styles.section} id="gins">
      <h2 className={styles.title}>Nuestros Gins</h2>

      {/* Desktop grid */}
      <div className={styles.grid}>
        {gins.map((g) => (
          <GinCard key={g.id} gin={g} />
        ))}
      </div>

      {/* Mobile slider */}
      <GinTypesSlider gins={gins} />
    </section>
  );
}
