"use client";

import {
  formatOfferCountdown,
  useOfferCountdown,
} from "../../hooks/use-offer-countdown";

import styles from "./countdown-section.module.css";

export function CountdownSection() {
  const remainingSeconds = useOfferCountdown();

  const countdown =
    formatOfferCountdown(remainingSeconds);

  const hasExpired = remainingSeconds === 0;

  return (
    <section
      className={styles.root}
      aria-label="Prazo da oferta promocional"
    >
      <div className={styles.content}>
        <div className={styles.message}>
          <span className={styles.title}>
            Oferta especial
          </span>

          <span className={styles.description}>
            Preço promocional disponível por tempo
            limitado
          </span>
        </div>

        {hasExpired ? (
          <span
            className={styles.expired}
            role="status"
          >
            Oferta encerrada
          </span>
        ) : (
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
        )}
      </div>
    </section>
  );
}
