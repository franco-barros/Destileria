"use client";

import Image from "next/image";
import styles from "../../../styles/about/AboutBlock.module.css";
import { FadeInOnScroll } from "../../shared/fadeInonscroll";

interface Props {
  src: string;
  alt: string;
  text: string;
  reverse?: boolean;
}

const AboutBlock: React.FC<Props> = ({ src, alt, text, reverse }) => {
  return (
    <FadeInOnScroll>
      <div className={`${styles.block} ${reverse ? styles.reverse : ""}`}>
        <div className={styles.imageWrapper}>
          <Image
            src={src}
            alt={alt}
            fill
            style={{ objectFit: "cover", borderRadius: "14px" }} // asegura cobertura y borde
            sizes="(max-width: 768px) 100vw, 50vw" // móvil 100%, desktop 50%
            priority
          />
        </div>

        <div className={styles.textWrapper}>{text}</div>
      </div>
    </FadeInOnScroll>
  );
};

export default AboutBlock;
