import { ButtonLink } from "@/components/ui/button-link/button-link";
import { Container } from "@/components/ui/container/container";

import { PdfPreviewModal } from "../../components/pdf-preview-modal/pdf-preview-modal";
import { ProductMockupSlider } from "../../components/product-mockup-slider/product-mockup-slider";
import type { ProductPageContent } from "../../model/product-page-content";

import styles from "./product-showcase-section.module.css";

type ProductShowcaseSectionProps = Readonly<{
  content: ProductPageContent;
}>;

const PRODUCT_LABEL_PDF =
  "/documents/INSTRUCOES_ROTULO_PROGRESSIVA_VEGETAL_HAVANA.pdf";

const productFeatures = [
  {
    id: "volume",
    label: "500 ml",
    description: "Embalagem pensada para uso profissional.",
  },
  {
    id: "formula",
    label: "Sem formol",
    description: "Característica informada no rótulo do produto.",
  },
  {
    id: "application",
    label: "Uso profissional",
    description: "Aplicação conforme as orientações do fabricante.",
  },
  {
    id: "payment",
    label: "Pagamento na entrega",
    description: "Você paga somente quando receber o pedido.",
  },
] as const;

export function ProductShowcaseSection({
  content,
}: ProductShowcaseSectionProps) {
  return (
    <section
      id="produto"
      className={styles.root}
      aria-labelledby="product-showcase-title"
    >
      <Container className={styles.grid}>
        <div className={styles.media}>
          <div
            className={styles.mediaGlow}
            aria-hidden="true"
          />

          <div className={styles.mediaFrame}>
            <ProductMockupSlider
              productName={content.productName}
            />
          </div>

          <div className={styles.volumeBadge}>
            <strong>500 ml</strong>
            <span>Uso profissional</span>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.heading}>
            <p className={styles.eyebrow}>
              Conheça o produto
            </p>

            <h2
              id="product-showcase-title"
              className={styles.title}
            >
              Cuidado profissional com acabamento mais alinhado
            </h2>

            <p className={styles.description}>
              A Progressiva Vegetal Havana foi desenvolvida para
              integrar uma rotina de cuidado capilar profissional,
              com aplicação prática e apresentação sofisticada.
            </p>
          </div>

          <ul
            className={styles.features}
            aria-label="Características do produto"
          >
            {productFeatures.map((feature) => (
              <li
                key={feature.id}
                className={styles.feature}
              >
                <span
                  className={styles.featureIcon}
                  aria-hidden="true"
                >
                  ✓
                </span>

                <div>
                  <strong>{feature.label}</strong>
                  <p>{feature.description}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className={styles.guidance}>
            <strong>Aplicação responsável</strong>

            <p>
              Antes de utilizar, leia as{" "}
              <PdfPreviewModal
                pdfSrc={PRODUCT_LABEL_PDF}
                triggerLabel="instruções do rótulo"
                title="Instruções do rótulo — Progressiva Vegetal Havana"
              />{" "}
              e siga as recomendações oficiais do fabricante. Para
              procedimentos profissionais, procure orientação
              qualificada.
            </p>
          </div>

          <div className={styles.actions}>
            <ButtonLink
              href="#ofertas"
              className={styles.primaryAction}
            >
              Escolher meu kit
              <span aria-hidden="true">→</span>
            </ButtonLink>

            <a
              href="#duvidas"
              className={styles.secondaryAction}
            >
              Tirar dúvidas
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
