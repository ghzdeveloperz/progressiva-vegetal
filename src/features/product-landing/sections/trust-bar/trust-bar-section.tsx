"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { Container } from "@/components/ui/container/container";
import type { TrustItem } from "../../model/product-page-content";

import styles from "./trust-bar-section.module.css";

type TrustBarSectionProps = Readonly<{
  items: readonly TrustItem[];
}>;

const ROTATION_INTERVAL_MS = 3500;

export function TrustBarSection({
  items,
}: TrustBarSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (items.length <= 1) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => {
        return (currentIndex + 1) % items.length;
      });
    }, ROTATION_INTERVAL_MS);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [items.length]);

  return (
    <aside
      className={styles.root}
      aria-label="Informações de confiança"
    >
      <Container className={styles.container}>
        {/* Desktop */}
        <ul className={styles.desktopList}>
          {items.map((item) => (
            <li key={item.id} className={styles.item}>
              <span
                className={styles.iconWrapper}
                aria-hidden="true"
              >
                <Image
                  src={item.iconSrc}
                  alt=""
                  width={18}
                  height={18}
                  className={styles.icon}
                />
              </span>

              <span>{item.label}</span>
            </li>
          ))}
        </ul>

        {/* Mobile */}
        <div
          className={styles.mobileSlider}
          aria-live="polite"
        >
          {items.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={item.id}
                className={`${styles.mobileItem} ${
                  isActive ? styles.mobileItemActive : ""
                }`}
                aria-hidden={!isActive}
              >
                <span
                  className={styles.iconWrapper}
                  aria-hidden="true"
                >
                  <Image
                    src={item.iconSrc}
                    alt=""
                    width={18}
                    height={18}
                    className={styles.icon}
                  />
                </span>

                <span>{item.label}</span>
              </div>
            );
          })}
        </div>
      </Container>
    </aside>
  );
}
