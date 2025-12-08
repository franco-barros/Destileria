"use client";

import React, { useState } from "react";
import styles from "../../../styles/faqsection/FAQTabsCarousel.module.css";
import { ChevronDown } from "lucide-react";
import { FadeInOnScroll } from "../../shared/fadeInonscroll";

const faqItems = [
  {
    category: "La Cervecería",
    questions: [
      {
        question: "¿Qué tipos de cerveza elaboran?",
        answer:
          "Producimos cervezas artesanales con procesos tradicionales. Contamos con estilos como IPA, Stout, Red Ale, Honey, Golden, Lager y ediciones especiales de temporada.",
      },
      {
        question: "¿Dónde se encuentra ubicada la cervecería?",
        answer:
          "Estamos ubicados en Mar del Plata, con producción local y distribución regional.",
      },
      {
        question: "¿Las cervezas son 100% artesanales?",
        answer:
          "Sí. Elaboramos cada lote de manera artesanal, sin conservantes ni procesos industriales masivos.",
      },
    ],
  },
  {
    category: "Visitas y Reservas",
    questions: [
      {
        question: "¿Se puede visitar la fábrica?",
        answer:
          "Sí. Contamos con visitas guiadas que muestran nuestro proceso de producción, historia templaria y degustación final.",
      },
      {
        question: "¿Necesito reserva para visitar?",
        answer:
          "Recomendamos reservar, especialmente fines de semana y temporada. Podés hacerlo desde la web.",
      },
      {
        question: "¿Ofrecen degustaciones?",
        answer:
          "Sí. Disponemos de degustaciones con distintos estilos y charlas sobre maridaje.",
      },
    ],
  },
  {
    category: "Compras y Envíos",
    questions: [
      {
        question: "¿Hacen envíos a domicilio?",
        answer:
          "Realizamos envíos en la ciudad y zonas cercanas. También contamos con retiro en el local.",
      },
      {
        question: "¿Puedo comprar barriles o latas para eventos?",
        answer:
          "Sí. Ofrecemos barriles, latas y combos especiales para fiestas, bares y eventos particulares.",
      },
      {
        question: "¿Aceptan medios de pago digitales?",
        answer:
          "Aceptamos tarjetas, transferencia, Mercado Pago y efectivo en el local.",
      },
    ],
  },
];

const FAQTabsCarousel: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setActiveQuestion((prev) => (prev === idx ? null : idx));
  };

  return (
    <>
      {/* ---------- TABS ---------- */}
      <div className={styles.tabList}>
        {faqItems.map((item, i) => (
          <button
            key={item.category}
            className={`${styles.tabItem} ${
              i === activeCategory ? styles.tabItemActive : ""
            }`}
            onClick={() => {
              setActiveCategory(i);
              setActiveQuestion(null);
            }}
          >
            <span>{item.category}</span>
          </button>
        ))}
      </div>

      {/* ---------- PREGUNTAS ---------- */}
      <div className={styles.questionList}>
        {faqItems[activeCategory].questions.map((item, index) => {
          const open = activeQuestion === index;

          return (
            <FadeInOnScroll key={item.question} delay={index * 0.15}>
              <button
                className={styles.questionItem}
                onClick={() => toggle(index)}
              >
                <div className={styles.questionHeader}>
                  <span
                    className={open ? styles.answerText : styles.questionText}
                  >
                    {open ? item.answer : item.question}
                  </span>

                  <ChevronDown
                    size={20}
                    className={`${styles.chevron} ${
                      open ? styles.chevronOpen : ""
                    }`}
                  />
                </div>
              </button>
            </FadeInOnScroll>
          );
        })}
      </div>
    </>
  );
};

export default FAQTabsCarousel;
