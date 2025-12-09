"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import GinCard from "../gincard";
import styles from "../../../styles/gintypes/GinSlider.module.css";

interface Gin {
  id: number;
  name: string;
  type: string; // reemplaza “style”
  abv: string;
  image: string;
  description: string;
}

interface SliderProps {
  gins: Gin[];
}

export default function GinTypesSlider({ gins }: SliderProps) {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 12,
    },
  });

  return (
    <div className={styles.mobileSlider}>
      <div ref={sliderRef} className={`keen-slider ${styles.slider}`}>
        {gins.map((gin) => (
          <div className={`keen-slider__slide ${styles.slide}`} key={gin.id}>
            <GinCard gin={gin} />
          </div>
        ))}
      </div>
    </div>
  );
}
