"use client";

import React, { useState } from "react";
import styles from "../../../styles/faqsection/FAQTabsCarousel.module.css";
import { ChevronDown } from "lucide-react";
import { FadeInOnScroll } from "../../shared/fadeInonscroll";

const faqItems = [
  {
    category: "El Gin",
    questions: [
      {
        question: "¿Qué tipo de gin producen?",
        answer:
          "Elaboramos gin artesanal estilo London Dry, además de ediciones especiales infusionadas con botánicos locales y cítricos.",
      },
      {
        question: "¿Qué botánicos utilizan?",
        answer:
          "Usamos enebro, coriandro, cardamomo, raíz de angélica, piel de cítricos y botánicos seleccionados según cada edición especial.",
      },
      {
        question: "¿El gin es apto para celíacos?",
        answer:
          "Sí. Todo nuestro gin es libre de gluten, ya que proviene de alcohol destilado de alta pureza.",
      },
    ],
  },
  {
    category: "Proceso de Destilación",
    questions: [
      {
        question: "¿Cómo es el proceso de destilación?",
        answer:
          "Destilamos en alambique de acero inoxidable con maceración previa y redestilación lenta para lograr un gin más suave y aromático.",
      },
      {
        question: "¿Qué método de extracción utilizan?",
        answer:
          "Combinamos maceración tradicional con vaporizado de botánicos para obtener aromas más frescos y equilibrados.",
      },
      {
        question: "¿Cuánto tiempo lleva producir un lote de gin?",
        answer:
          "El proceso completo puede demorar entre 2 y 5 días, dependiendo de la cantidad de botánicos y reposo posterior.",
      },
    ],
  },
  {
    category: "Compras y Envíos",
    questions: [
      {
        question: "¿Hacen envíos a todo el país?",
        answer:
          "Realizamos envíos a nivel nacional mediante correo y transporte seguro para bebidas espirituosas.",
      },
      {
        question: "¿Puedo comprar ediciones especiales?",
        answer:
          "Sí. Lanzamos pequeños lotes experimentales que se pueden adquirir online o en la destilería.",
      },
      {
        question: "¿Qué medios de pago aceptan?",
        answer:
          "Aceptamos tarjetas, transferencia bancaria, Mercado Pago y pagos en efectivo en el local.",
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
