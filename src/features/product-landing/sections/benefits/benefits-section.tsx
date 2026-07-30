import { Container } from "@/components/ui/container/container";
import { SectionHeading } from "@/components/ui/section-heading/section-heading";
import type { Benefit } from "../../model/product-page-content";

import styles from "./benefits-section.module.css";

type BenefitsSectionProps = Readonly<{
  items: readonly Benefit[];
}>;

export function BenefitsSection({ items }: BenefitsSectionProps) {
  return (
    <section id="beneficios" className="section">
      <Container>
        <SectionHeading
          eyebrow="Benefícios principais"
          title="Uma apresentação clara, profissional e orientada à confiança"
          description="A página explica o produto sem sobrecarregar o visitante e reforça o pagamento na entrega nos pontos certos."
          align="center"
        />

        <div className={styles.grid}>
          {items.map((item, index) => (
            <article key={item.id} className={styles.card}>
              <span className={styles.index} aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
