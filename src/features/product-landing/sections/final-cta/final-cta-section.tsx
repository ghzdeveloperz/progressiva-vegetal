import { ButtonLink } from "@/components/ui/button-link/button-link";
import { Container } from "@/components/ui/container/container";

import styles from "./final-cta-section.module.css";

export function FinalCtaSection() {
  return (
    <section
      className={styles.root}
      aria-labelledby="final-cta-title"
    >
      <Container className={styles.content}>
        <div className={styles.text}>
          <p className={styles.eyebrow}>
            Escolha com tranquilidade
          </p>

          <h2 id="final-cta-title">
            Encontre o kit ideal para a sua rotina
          </h2>

          <p>
            Compare as opções disponíveis e selecione a quantidade
            mais adequada para o seu uso.
          </p>
        </div>

        <ButtonLink
          href="#ofertas"
          className={styles.button}
        >
          Ver opções disponíveis
        </ButtonLink>
      </Container>
    </section>
  );
}
