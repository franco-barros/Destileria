"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "../../styles/Footer.module.css";

const Footer = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isAdmin = pathname.startsWith("/admin");

  if (isAdmin) return null;

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const sections = [
    { id: "hero", label: "Inicio" },
    { id: "aboutus", label: "Sobre Nosotros" },
    { id: "faq", label: "Preguntas Frecuentes" },
  ];

  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.content}>
        {/* --- DESCRIPCIÓN PRINCIPAL --- */}
        <div className={styles.section}>
          <p className={styles.description}>
            Cardenal Amarillo es una cervecería artesanal comprometida con la
            calidad y el sabor auténtico. Seleccionamos ingredientes nobles,
            cuidamos cada etapa del proceso y elaboramos cervezas con identidad
            propia, equilibrio y carácter.
          </p>
        </div>

        {/* --- CARDENAL AMARILLO LINK --- */}
        <div className={styles.section}>
          <h4 className={styles.subtitle}>Conocé más</h4>

          <a
            href="https://cerveceria-neon.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.destillerLink}
          >
            <Image
              src="/icons/Logo.png"
              alt="Cardenal Amarillo"
              width={48}
              height={48}
              className={styles.destillerLogo}
            />
            <span>Ir a Cardenal Amarillo</span>
          </a>

          <p className={styles.smallDescription}>
            Descubrí nuestra historia, nuestro proceso y todo lo que hace única
            a nuestra destileria artesanal.
          </p>
        </div>

        {/* --- ENLACES SOLO EN HOME --- */}
        {isHome && (
          <div className={styles.section}>
            <h4 className={styles.subtitle}>Enlaces</h4>
            <ul className={styles.list}>
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    type="button"
                    className={styles.linkButton}
                    onClick={() => scrollToSection(section.id)}
                  >
                    {section.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className={styles.bottomBar}>
        <p className={styles.copy}>
          © 2025 Destiller One | Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
