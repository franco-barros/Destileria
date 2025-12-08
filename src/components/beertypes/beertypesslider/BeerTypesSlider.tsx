"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import BeerCard from "../beercard";
import styles from "../../../styles/beertypes/BeerSlider.module.css";

interface Beer {
  id: number;
  name: string;
  style: string;
  abv: string;
  image: string;
  description: string;
}

interface SliderProps {
  beers: Beer[];
}

export default function BeerTypesSlider({ beers }: SliderProps) {
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
        {beers.map((beer) => (
          <div className={`keen-slider__slide ${styles.slide}`} key={beer.id}>
            <BeerCard beer={beer} />
          </div>
        ))}
      </div>
    </div>
  );
}
