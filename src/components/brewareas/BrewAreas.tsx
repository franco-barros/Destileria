"use client";

import React, { useState, useEffect } from "react";
import styles from "../../styles/brewareas/BrewAreas.module.css";
import {
  FlaskConical,
  Leaf,
  Droplet,
  Flame,
  TestTube,
  Recycle,
} from "lucide-react";
import BrewAreasMobile from "./brewareasmobile/BrewAreasMobile";
import { FadeInOnScroll } from "../shared/fadeInonscroll";

interface GinArea {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const ginAreas: GinArea[] = [
  {
    id: "1",
    title: "Selección de Botánicos",
    description:
      "Elegimos enebro, cítricos frescos y una variedad de botánicos especialmente seleccionados para definir el perfil aromático del gin.",
    icon: <Leaf size={28} />,
  },
  {
    id: "2",
    title: "Maceración",
    description:
      "Los botánicos se maceran en alcohol de alta pureza para extraer aromas, aceites esenciales y sabores únicos.",
    icon: <Droplet size={28} />,
  },
  {
    id: "3",
    title: "Destilación",
    description:
      "Realizamos una destilación precisa y controlada en alambique de cobre para obtener un destilado limpio y equilibrado.",
    icon: <Flame size={28} />,
  },
  {
    id: "4",
    title: "Rectificación",
    description:
      "Eliminamos impurezas y afinamos el espíritu para asegurar un gin suave, aromático y con un carácter impecable.",
    icon: <TestTube size={28} />,
  },
  {
    id: "5",
    title: "Reposo",
    description:
      "El gin descansa el tiempo necesario para que los botánicos integren sus matices y desarrollen un sabor redondo.",
    icon: <Recycle size={28} />,
  },
  {
    id: "6",
    title: "Nuestros Gins",
    description:
      "Creamos variedades como London Dry, cítricos, especiados y ediciones especiales, siempre con identidad propia.",
    icon: <FlaskConical size={28} />,
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

  const renderArea = (area: GinArea) => (
    <article key={area.id} id={`gin-${area.id}`} className={styles.areaCard}>
      {area.icon && <div className={styles.iconWrapper}>{area.icon}</div>}
      <h4>{area.title}</h4>
      <p>{area.description}</p>
    </article>
  );

  return (
    <section id="section-ginareas" className={styles.brewAreasSection}>
      <FadeInOnScroll>
        <div className={styles.badgeWrapper}>
          <span className={styles.badge}>
            <FlaskConical size={18} style={{ marginRight: "0.4rem" }} />
            Proceso de Destilación
          </span>
        </div>

        <p className={styles.description}>
          En nuestra destilería elaboramos gin artesanal cuidando cada etapa del
          proceso. Seleccionamos botánicos de calidad y aplicamos técnicas
          tradicionales para crear un destilado limpio, aromático y lleno de
          carácter.
        </p>
      </FadeInOnScroll>

      <FadeInOnScroll delay={0.15}>
        {isMobile ? (
          <BrewAreasMobile brewAreas={ginAreas} />
        ) : (
          <div className={styles.gridDesktop}>{ginAreas.map(renderArea)}</div>
        )}
      </FadeInOnScroll>
    </section>
  );
};

export default BrewAreas;
