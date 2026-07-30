import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link/button-link";
import { Container } from "@/components/ui/container/container";
import type { ProductPageContent } from "../../model/product-page-content";

import styles from "./hero-section.module.css";

type HeroSectionProps = Readonly<{
  content: ProductPageContent;
}>;

const quickProofs = [
  "Sem formol",
  "Pagamento na entrega",
  "Resultado profissional",
] as const;

export function HeroSection({
  content,
}: HeroSectionProps) {
  return (
    <section id="inicio" className={styles.root}>
      <Image
        src={content.hero.bannerImage}
        alt=""
        fill
        priority
        quality={88}
        sizes="(max-width: 48rem) 1px, 100vw"
        className={`${styles.backgroundImage} ${styles.desktopImage}`}
      />

      <Image
        src={content.hero.mobileBannerImage}
        alt=""
        fill
        priority
        quality={85}
        sizes="(max-width: 48rem) 100vw, 1px"
        className={`${styles.backgroundImage} ${styles.mobileImage}`}
      />

      <div className={styles.overlay} aria-hidden="true" />

      <Container className={styles.container}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>
            {content.hero.eyebrow}
          </p>

          <h1 className={styles.title}>
            {content.hero.title}{" "}
            <span>{content.hero.highlightedText}</span>
          </h1>

          <p className={styles.description}>
            {content.hero.description}
          </p>

          <ul
            className={styles.quickProofs}
            aria-label="Diferenciais do produto"
          >
            {quickProofs.map((item) => (
              <li key={item}>
                <span aria-hidden="true">✓</span>
                {item}
              </li>
            ))}
          </ul>

          <div className={styles.actions}>
            <ButtonLink
              href="#ofertas"
              variant="primary"
              className={styles.primaryAction}
            >
              Escolher meu kit
              <span aria-hidden="true">→</span>
            </ButtonLink>

            <ButtonLink
              href="#avaliacoes"
              variant="secondary"
              className={styles.secondaryAction}
            >
              Ver resultados
            </ButtonLink>
          </div>

          <p className={styles.meta}>
            Base vegetal
            <span aria-hidden="true" />
            500 ml
          </p>
        </div>
      </Container>
    </section>
  );
}
