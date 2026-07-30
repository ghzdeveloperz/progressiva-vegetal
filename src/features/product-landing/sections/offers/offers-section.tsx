import { ButtonLink } from "@/components/ui/button-link/button-link";
import { Container } from "@/components/ui/container/container";
import { SectionHeading } from "@/components/ui/section-heading/section-heading";
import type { Offer } from "../../model/product-page-content";

import styles from "./offers-section.module.css";

type OffersSectionProps = Readonly<{
  offers: readonly Offer[];
}>;

export function OffersSection({ offers }: OffersSectionProps) {
  return (
    <section id="ofertas" className="section">
      <Container>
        <SectionHeading
          eyebrow="Escolha sua opção"
          title="Ofertas fáceis de comparar"
          description="Defina os preços reais no arquivo de conteúdo. O frontend nunca deve ser a fonte definitiva do valor cobrado."
          align="center"
        />

        <div className={styles.grid}>
          {offers.map((offer) => (
            <article
              key={offer.id}
              className={`${styles.card} ${offer.featured ? styles.featured : ""}`}
            >
              {offer.badge ? <span className={styles.badge}>{offer.badge}</span> : null}
              <p className={styles.quantity}>{offer.quantity}x 500 ml</p>
              <h3>{offer.name}</h3>
              {offer.originalPrice ? (
                <p className={styles.originalPrice}>De {offer.originalPrice}</p>
              ) : null}
              <p className={styles.price}>{offer.price}</p>

              <ul className={styles.benefits}>
                {offer.benefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>

              <ButtonLink href="#pagamento" variant={offer.featured ? "cod" : "primary"} fullWidth>
                Escolher esta opção
              </ButtonLink>
            </article>
          ))}
        </div>

        <p className={styles.disclaimer}>
          Preços, frete, cobertura e disponibilidade precisam ser confirmados no backend antes da criação do pedido.
        </p>
      </Container>
    </section>
  );
}
