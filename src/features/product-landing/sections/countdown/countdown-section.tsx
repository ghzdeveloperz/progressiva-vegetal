"use client";

import { useEffect, useState } from "react";

import {
  formatOfferCountdown,
  useOfferCountdown,
} from "../../hooks/use-offer-countdown";

import styles from "./countdown-section.module.css";

const EXIT_ANIMATION_DURATION_MS = 450;

export function CountdownSection() {
  const remainingSeconds = useOfferCountdown();

  const countdown =
    formatOfferCountdown(remainingSeconds);

  const [shouldRender, setShouldRender] =
    useState(true);
  const isLeaving = remainingSeconds === 0 && shouldRender;

  useEffect(() => {
    if (remainingSeconds !== 0 || !shouldRender) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setShouldRender(false);
    }, EXIT_ANIMATION_DURATION_MS);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [remainingSeconds, shouldRender]);

  if (!shouldRender) {
    return null;
  }

  return (
    <section
      className={`${styles.root} ${isLeaving ? styles.leaving : ""
        }`}
      aria-label="Prazo da oferta promocional"
      aria-hidden={isLeaving}
    >
      <div className={styles.content}>
        <div className={styles.message}>
          <span className={styles.title}>
            Oferta especial
          </span>

          <span className={styles.description}>
            Preço promocional disponível por tempo limitado
          </span>
        </div>

        <time
          className={styles.timer}
          role="timer"
          aria-label={
            remainingSeconds === null
              ? "Carregando tempo restante"
              : `${countdown.minutes} minutos e ${countdown.seconds} segundos restantes`
          }
        >
          <span className={styles.timeValue}>
            {countdown.minutes}
          </span>

          <span
            className={styles.separator}
            aria-hidden="true"
          >
            :
          </span>

          <span className={styles.timeValue}>
            {countdown.seconds}
          </span>
        </time>
      </div>
    </section>
  );
}
