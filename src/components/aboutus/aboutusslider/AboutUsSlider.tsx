"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import AboutBlock from "../aboutblock";
import styles from "../../../styles/about/AboutUsSlider.module.css";

interface AboutSliderProps {
  data: {
    src: string;
    alt: string;
    text: string;
    reverse?: boolean;
  }[];
}

const AboutUsSlider: React.FC<AboutSliderProps> = ({ data }) => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 1,
      spacing: 10,
    },
  });

  return (
    <section className={styles.sliderSection}>
      <div ref={sliderRef} className={`keen-slider ${styles.keenSlider}`}>
        {data.map((item, index) => (
          <div key={index} className={`keen-slider__slide ${styles.slide}`}>
            <AboutBlock
              src={item.src}
              alt={item.alt}
              text={item.text}
              reverse={item.reverse}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUsSlider;
