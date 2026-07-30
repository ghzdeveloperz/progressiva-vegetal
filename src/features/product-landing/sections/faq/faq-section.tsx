"use client";

import { useState } from "react";

import { Container } from "@/components/ui/container/container";
import type { FaqItem } from "../../model/product-page-content";

import styles from "./faq-section.module.css";

type FaqSectionProps = Readonly<{
  items: readonly FaqItem[];
}>;

export function FaqSection({ items }: FaqSectionProps) {
  const [openItemId, setOpenItemId] = useState<string | null>(
    items[0]?.id ?? null
  );

  function handleToggle(itemId: string) {
    setOpenItemId((currentItemId) =>
      currentItemId === itemId ? null : itemId
    );
  }

  return (
    <section
      id="duvidas"
      className={styles.root}
      aria-labelledby="faq-section-title"
    >
      <Container className={styles.grid}>
        <div className={styles.heading}>
          <p className={styles.eyebrow}>
            Dúvidas frequentes
          </p>

          <h2
            id="faq-section-title"
            className={styles.title}
          >
            Informações importantes antes do seu pedido
          </h2>

          <p className={styles.description}>
            Consulte as principais orientações sobre o produto,
            aplicação, entrega e pagamento.
          </p>
        </div>

        <div className={styles.list}>
          {items.map((item) => {
            const isOpen = openItemId === item.id;
            const buttonId = `faq-button-${item.id}`;
            const panelId = `faq-panel-${item.id}`;

            return (
              <article
                key={item.id}
                className={`${styles.item} ${
                  isOpen ? styles.open : ""
                }`}
              >
                <h3 className={styles.questionHeading}>
                  <button
                    id={buttonId}
                    type="button"
                    className={styles.questionButton}
                    onClick={() => handleToggle(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                  >
                    <span className={styles.question}>
                      {item.question}
                    </span>

                    <span
                      className={styles.toggle}
                      aria-hidden="true"
                    />
                  </button>
                </h3>

                <div
                  id={panelId}
                  className={styles.answerWrapper}
                  role="region"
                  aria-labelledby={buttonId}
                  aria-hidden={!isOpen}
                >
                  <div className={styles.answerInner}>
                    <p>{item.answer}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
