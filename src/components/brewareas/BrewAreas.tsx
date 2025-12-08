"use client";

import React, { useState, useEffect } from "react";
import styles from "../../styles/brewareas/BrewAreas.module.css";
import { Beer, Wheat, Flame, Droplets, Hop, Factory } from "lucide-react";
import BrewAreasMobile from "./brewareasmobile/BrewAreasMobile";
import { FadeInOnScroll } from "../shared/fadeInonscroll";

interface BrewArea {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const brewAreas: BrewArea[] = [
  {
    id: "1",
    title: "Selección de Ingredientes",
    description:
      "Elegimos maltas de calidad, lúpulos frescos y levaduras puras que definen el carácter auténtico de Cardenal Amarillo.",
    icon: <Wheat size={28} />,
  },
  {
    id: "2",
    title: "Maceración y Cocción",
    description:
      "Realizamos un macerado controlado y una cocción precisa para extraer los sabores y aromas que distinguen cada estilo.",
    icon: <Flame size={28} />,
  },
  {
    id: "3",
    title: "Fermentación",
    description:
      "Cada cerveza fermenta el tiempo necesario para desarrollar cuerpo, aroma y la personalidad que buscamos en cada lote.",
    icon: <Droplets size={28} />,
  },
  {
    id: "4",
    title: "Lupulado",
    description:
      "Aplicamos técnicas de lupulado clásico y moderno —whirlpool, dry hopping— para obtener perfiles aromáticos equilibrados e intensos.",
    icon: <Hop size={28} />,
  },
  {
    id: "5",
    title: "Maduración",
    description:
      "Respetamos el tiempo de reposo de cada estilo para lograr suavidad, equilibrio y una cerveza lista para disfrutarse al máximo.",
    icon: <Factory size={28} />,
  },
  {
    id: "6",
    title: "Nuestros Estilos",
    description:
      "Creamos variedades como IPA, Golden, Scottish, Porter y más, siempre con el sello distintivo de Cardenal Amarillo.",
    icon: <Beer size={28} />,
  },
];

const BrewAreas: React.FC = () => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const renderArea = (area: BrewArea) => (
    <article key={area.id} id={`brew-${area.id}`} className={styles.areaCard}>
      {area.icon && <div className={styles.iconWrapper}>{area.icon}</div>}
      <h4>{area.title}</h4>
      <p>{area.description}</p>
    </article>
  );

  return (
    <section id="section-brewareas" className={styles.brewAreasSection}>
      <FadeInOnScroll>
        <div className={styles.badgeWrapper}>
          <span className={styles.badge}>
            <Beer size={18} style={{ marginRight: "0.4rem" }} />
            Proceso Cervecero
          </span>
        </div>

        <p className={styles.description}>
          En Cardenal Amarillo producimos cerveza artesanal cuidando cada etapa
          del proceso. Combinamos técnica, pasión y buenos ingredientes para
          crear sabores auténticos, equilibrados y llenos de carácter.
        </p>
      </FadeInOnScroll>

      <FadeInOnScroll delay={0.15}>
        {isMobile ? (
          <BrewAreasMobile brewAreas={brewAreas} />
        ) : (
          <div className={styles.gridDesktop}>{brewAreas.map(renderArea)}</div>
        )}
      </FadeInOnScroll>
    </section>
  );
};

export default BrewAreas;
