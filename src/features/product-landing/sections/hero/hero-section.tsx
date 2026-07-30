import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link/button-link";
import { Container } from "@/components/ui/container/container";
import type { ProductPageContent } from "../../model/product-page-content";

import styles from "./hero-section.module.css";

type HeroSectionProps = Readonly<{
  content: ProductPageContent;
}>;

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <section id="inicio" className={styles.root}>
      <Container className={styles.grid}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>{content.hero.eyebrow}</p>
          <h1 className={styles.title}>
            {content.hero.title}{" "}
            <span>{content.hero.highlightedText}</span>
          </h1>
          <p className={styles.description}>{content.hero.description}</p>

          <div className={styles.codNotice}>
            <strong>Você só paga quando receber.</strong>
            <span>Nenhum pagamento antecipado nesta etapa.</span>
          </div>

          <div className={styles.actions}>
            <ButtonLink href="#ofertas" variant="cod">
              Pedir e pagar na entrega
            </ButtonLink>
            <ButtonLink href="#produto" variant="secondary">
              Conhecer o produto
            </ButtonLink>
          </div>

          <ul className={styles.quickProofs}>
            <li>500 ml</li>
            <li>Uso profissional</li>
            <li>Sem formol</li>
          </ul>
        </div>

        <div className={styles.visual}>
          <div className={styles.glow} aria-hidden="true" />
          <div className={styles.imageCard}>
            <Image
              src={content.productImage}
              alt={content.productName}
              width={273}
              height={730}
              priority
              sizes="(max-width: 768px) 70vw, 360px"
              className={styles.image}
            />
          </div>
          <span className={styles.floatingBadge}>Pagamento na entrega</span>
        </div>
      </Container>
    </section>
  );
}
