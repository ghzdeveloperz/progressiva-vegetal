"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import styles from "./product-mockup-slider.module.css";

type ProductMockup = Readonly<{
  id: string;
  src: string;
  alt: string;
}>;

type ProductMockupSliderProps = Readonly<{
  productName: string;
}>;

const MOCKUP_CHANGE_INTERVAL = 4500;

const productMockups = [
  {
    id: "mockup-01",
    src: "/images/products/mockup-01.png",
    alt: "Progressiva Vegetal Havana em ambiente profissional",
  },
  {
    id: "mockup-02",
    src: "/images/products/mockup-02.png",
    alt: "Progressiva Vegetal Havana em apresentação alternativa",
  },
  {
    id: "mockup-03",
    src: "/images/products/mockup-03.png",
    alt: "Progressiva Vegetal Havana em ambiente de cuidado capilar",
  },
] as const satisfies readonly ProductMockup[];

export function ProductMockupSlider({
  productName,
}: ProductMockupSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => {
        return (currentIndex + 1) % productMockups.length;
      });
    }, MOCKUP_CHANGE_INTERVAL);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  return (
    <div
      className={styles.root}
      role="group"
      aria-label={`Imagens de ${productName}`}
    >
      {productMockups.map((mockup, index) => {
        const isActive = index === activeIndex;

        return (
          <div
            key={mockup.id}
            className={`${styles.slide} ${
              isActive ? styles.active : ""
            }`}
            aria-hidden={!isActive}
          >
            <Image
              src={mockup.src}
              alt={isActive ? mockup.alt : ""}
              fill
              priority={index === 0}
              loading={index === 0 ? undefined : "lazy"}
              sizes="(max-width: 52rem) 100vw, 496px"
              className={styles.image}
            />
          </div>
        );
      })}
    </div>
  );
}
