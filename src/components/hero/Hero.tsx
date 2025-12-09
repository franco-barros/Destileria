"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../../styles/hero/Hero.module.css";

const Hero: React.FC = () => {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.overlay} />

      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className={styles.logoLayer}>
          <div className={styles.logoInner}>
            <Image
              src="/icons/Destileria.png" // <-- Cambialo por tu logo real
              alt="Destiller One Logo"
              fill
              priority
              sizes="(max-width: 768px) 60vw, 400px"
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>

        <h1 className={styles.title}>
          Gin artesanal premium de Destiller One.
        </h1>

        <p className={styles.phrase}>
          Botánicos seleccionados, destilación precisa y un carácter que define
          la excelencia.
        </p>

        <div className={styles.buttons}>
          <button
            onClick={() => handleScrollTo("contact")}
            className={`${styles.btn} ${styles.btnPrimary}`}
          >
            Contactar
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
