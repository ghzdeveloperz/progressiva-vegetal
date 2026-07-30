import Link from "next/link";

import { Container } from "@/components/ui/container/container";
import type { Offer } from "../../model/product-page-content";

import styles from "./offers-section.module.css";

type OffersSectionProps = Readonly<{
  offers: readonly Offer[];
}>;

function getQuantityLabel(quantity: number) {
  if (quantity === 1) {
    return "1 unidade";
  }

  return `${quantity} unidades`;
}

export function OffersSection({ offers }: OffersSectionProps) {
  return (
    <section
      id="ofertas"
      className={styles.root}
      aria-labelledby="offers-section-title"
    >
      <Container>
        <div className={styles.sectionHeading}>
          <h2
            id="offers-section-title"
            className={styles.sectionTitle}
          >
            Escolha o kit ideal para o seu momento
          </h2>

          <p className={styles.sectionDescription}>
            Compare os kits disponíveis e escolha a opção mais
            adequada para a sua rotina, necessidade e frequência de
            uso.
          </p>
        </div>

        <div className={styles.grid}>
          {offers.map((offer) => (
            <article
              key={offer.id}
              className={`${styles.card} ${
                offer.featured ? styles.featured : ""
              }`}
            >
              {offer.featured ? (
                <div
                  className={styles.featuredAura}
                  aria-hidden="true"
                />
              ) : null}

              <div className={styles.cardInner}>
                {offer.badge ? (
                  <span
                    className={`${styles.badge} ${
                      offer.featured
                        ? styles.badgeFeatured
                        : styles.badgeDefault
                    }`}
                  >
                    {offer.badge}
                  </span>
                ) : null}

                <div className={styles.header}>
                  {offer.eyebrow ? (
                    <p className={styles.eyebrow}>
                      {offer.eyebrow}
                    </p>
                  ) : null}

                  <h3 className={styles.title}>{offer.name}</h3>

                  <p className={styles.quantity}>
                    {getQuantityLabel(offer.quantity)}
                  </p>
                </div>

                <div className={styles.pricing}>
                  {offer.originalPrice ? (
                    <p className={styles.originalPrice}>
                      {offer.originalPrice}
                    </p>
                  ) : (
                    <div
                      className={styles.originalPriceSpacer}
                      aria-hidden="true"
                    />
                  )}

                  <p className={styles.price}>{offer.price}</p>

                  {offer.savingsLabel ? (
                    <span className={styles.savingsChip}>
                      {offer.savingsLabel}
                    </span>
                  ) : null}
                </div>

                <div
                  className={styles.divider}
                  aria-hidden="true"
                />

                <ul className={styles.benefits}>
                  {offer.benefits.map((benefit) => (
                    <li key={benefit}>{benefit}</li>
                  ))}
                </ul>

                <Link
                  href={`/api/checkout?offer=${offer.checkoutKey}`}
                  className={`${styles.cta} ${
                    offer.featured
                      ? styles.ctaFeatured
                      : styles.ctaDefault
                  }`}
                  prefetch={false}
                >
                  Comprar agora
                </Link>
              </div>
            </article>
          ))}
        </div>

        <p className={styles.disclaimer}>
          Checkout em ambiente seguro. O valor final, a cobertura e a
          disponibilidade devem ser confirmados durante a finalização
          do pedido.
        </p>
      </Container>
    </section>
  );
}
