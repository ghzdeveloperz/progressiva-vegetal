import { Container } from "@/components/ui/container/container";
import { SectionHeading } from "@/components/ui/section-heading/section-heading";
import type { FaqItem } from "../../model/product-page-content";

import styles from "./faq-section.module.css";

type FaqSectionProps = Readonly<{
  items: readonly FaqItem[];
}>;

export function FaqSection({ items }: FaqSectionProps) {
  return (
    <section id="duvidas" className="section">
      <Container className={styles.grid}>
        <SectionHeading
          eyebrow="Perguntas frequentes"
          title="Tudo explicado antes do pedido"
          description="O FAQ usa HTML nativo, funciona sem JavaScript e mantém boa acessibilidade."
        />

        <div className={styles.list}>
          {items.map((item) => (
            <details key={item.id} className={styles.item}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
