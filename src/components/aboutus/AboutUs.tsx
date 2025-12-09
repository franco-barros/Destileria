"use client";

import { FlaskRound } from "lucide-react";
import styles from "../../styles/about/AboutUs.module.css";
import { FadeInOnScroll } from "../shared/fadeInonscroll";
import AboutBlock from "./aboutblock";
import AboutUsSlider from "./aboutusslider";
import { useEffect, useState } from "react";

const aboutData = [
  {
    src: "/images/Destileria1.jpg",
    alt: "Destilación artesanal de gin",
    text: "En Destiller One elaboramos gin artesanal premium utilizando botánicos cuidadosamente seleccionados y un proceso de destilación preciso que resalta aromas frescos y sabores equilibrados.",
    reverse: false,
  },
  {
    src: "/images/Destileria2.jpg",
    alt: "Botánicos seleccionados",
    text: "Trabajamos con enebro, cítricos, especias y hierbas de alta calidad para crear un perfil aromático limpio, elegante y distintivo. Cada lote es supervisado para mantener nuestra identidad única.",
    reverse: true,
  },
  {
    src: "/images/Gin3.jpg",
    alt: "Proceso de destilación",
    text: "Nuestro proceso combina técnicas tradicionales con un enfoque moderno, logrando un gin con carácter propio, suavidad en boca y una presencia aromática que lo hace inconfundible.",
    reverse: false,
  },
];

const AboutUs: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <section id="aboutus" className={styles.aboutSection}>
      <FadeInOnScroll>
        <div className={styles.badgeWrapper}>
          <span className={styles.badge}>
            <FlaskRound size={18} style={{ marginRight: "0.4rem" }} />
            Sobre Nosotros
          </span>
        </div>
      </FadeInOnScroll>

      {/* MOBILE → Slider */}
      {isMobile ? (
        <AboutUsSlider data={aboutData} />
      ) : (
        /* DESKTOP → Normal blocks */
        aboutData.map((item, i) => <AboutBlock key={i} {...item} />)
      )}
    </section>
  );
};

export default AboutUs;
