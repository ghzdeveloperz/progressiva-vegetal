import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link/button-link";
import { Container } from "@/components/ui/container/container";
import { SectionHeading } from "@/components/ui/section-heading/section-heading";
import type { ProductPageContent } from "../../model/product-page-content";

import styles from "./product-showcase-section.module.css";

type ProductShowcaseSectionProps = Readonly<{
  content: ProductPageContent;
}>;

export function ProductShowcaseSection({ content }: ProductShowcaseSectionProps) {
  return (
    <section id="produto" className={styles.root}>
      <Container className={styles.grid}>
        <div className={styles.media}>
          <div className={styles.mediaFrame}>
            <Image
              src={content.productImage}
              alt={content.productName}
              width={273}
              height={730}
              loading="lazy"
              sizes="(max-width: 768px) 70vw, 330px"
              className={styles.image}
            />
          </div>
        </div>

        <div className={styles.content}>
          <SectionHeading
            eyebrow="Conheça o produto"
            title={content.productName}
            description="A composição visual usa o preto e o dourado do frasco, com rosa suave para criar uma identidade de beleza mais acolhedora."
          />

          <ul className={styles.list}>
            {content.productHighlights.map((item) => (
              <li key={item}>
                <span aria-hidden="true">✓</span>
                {item}
              </li>
            ))}
          </ul>

          <div className={styles.note}>
            <strong>Importante</strong>
            <p>
              Antes da publicação, substitua textos provisórios por informações
              comprovadas pelo fabricante e pela documentação oficial do produto.
            </p>
          </div>

          <ButtonLink href="#ofertas">Ver opções de pedido</ButtonLink>
        </div>
      </Container>
    </section>
  );
}
