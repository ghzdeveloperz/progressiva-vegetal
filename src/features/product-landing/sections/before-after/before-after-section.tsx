import { Container } from "@/components/ui/container/container";

import { BeforeAfterSlider } from "../../components/before-after-slider/before-after-slider";

import styles from "./before-after-section.module.css";

const comparisons = [
  {
    id: "resultado-01",
    title: "Resultado de alinhamento capilar",
    beforeSrc:
      "/images/before-after/resultado-01-antes.webp",
    afterSrc:
      "/images/before-after/resultado-01-depois.webp",
    beforeAlt:
      "Cabelo antes do procedimento de alinhamento capilar",
    afterAlt:
      "Cabelo depois do procedimento de alinhamento capilar",
  },
  {
    id: "resultado-02",
    title: "Resultado de acabamento profissional",
    beforeSrc:
      "/images/before-after/resultado-02-antes.webp",
    afterSrc:
      "/images/before-after/resultado-02-depois.webp",
    beforeAlt:
      "Cabelo antes da aplicação profissional",
    afterAlt:
      "Cabelo depois da aplicação profissional",
  },
] as const;

export function BeforeAfterSection() {
  return (
    <section
      id="resultados"
      className={styles.root}
      aria-labelledby="before-after-title"
    >
      <Container>
        <div className={styles.heading}>
          <p className={styles.eyebrow}>
            Antes e depois
          </p>

          <h2
            id="before-after-title"
            className={styles.title}
          >
            Compare cada detalhe do resultado
          </h2>

          <p className={styles.description}>
            Deslize o controle sobre as imagens para observar a
            diferença entre o antes e o depois de cada aplicação.
          </p>
        </div>

        <div className={styles.comparisons}>
          {comparisons.map((comparison, index) => (
            <article
              key={comparison.id}
              className={styles.card}
            >
              <BeforeAfterSlider
                title={comparison.title}
                beforeSrc={comparison.beforeSrc}
                afterSrc={comparison.afterSrc}
                beforeAlt={comparison.beforeAlt}
                afterAlt={comparison.afterAlt}
                priority={index === 0}
              />

              <div className={styles.cardFooter}>
                <h3>{comparison.title}</h3>

                <p>
                  Arraste a divisão central para comparar as duas
                  imagens.
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className={styles.disclaimer}>
          Os resultados podem variar conforme o tipo e as condições
          do cabelo, a técnica de aplicação e o cumprimento das
          instruções do fabricante.
        </p>
      </Container>
    </section>
  );
}