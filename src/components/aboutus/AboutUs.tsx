"use client";

import { Users } from "lucide-react";
import styles from "../../styles/about/AboutUs.module.css";
import { FadeInOnScroll } from "../shared/fadeInonscroll";
import AboutBlock from "./aboutblock";
import AboutUsSlider from "./aboutusslider";
import { useEffect, useState } from "react";

const aboutData = [
  {
    src: "/images/Cerveza.png",
    alt: "Cerveza artesanal 1",
    text: "En Cardenal Amarillo elaboramos cerveza artesanal con dedicación, pasión y carácter propio. Trabajamos con maltas seleccionadas y lúpulos de calidad para lograr perfiles llenos de aroma y sabor.",
    reverse: false,
  },
  {
    src: "/images/Cerveza2.png",
    alt: "Cerveza artesanal 2",
    text: "Cuidamos cada etapa del proceso cervecero, respetando métodos tradicionales y potenciándolos con creatividad para ofrecer una experiencia única en cada pinta.",
    reverse: true,
  },
  {
    src: "/images/Cerveza4.png",
    alt: "Cerveza artesanal 3",
    text: "Nuestras cervezas se destacan por su equilibrio, frescura y personalidad. En cada lote buscamos transmitir la esencia de Cardenal Amarillo: artesanal, auténtica y cercana.",
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
            <Users size={18} style={{ marginRight: "0.4rem" }} />
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
