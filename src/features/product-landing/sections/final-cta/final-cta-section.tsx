import { ButtonLink } from "@/components/ui/button-link/button-link";
import { Container } from "@/components/ui/container/container";

import styles from "./final-cta-section.module.css";

export function FinalCtaSection() {
  return (
    <section className={styles.root}>
      <Container className={styles.content}>
        <p className={styles.eyebrow}>Compra simples e transparente</p>
        <h2>Peça agora. Pague somente quando receber.</h2>
        <p>
          Na próxima etapa, conectaremos este botão ao checkout seguro e à validação real de CEP, preço e disponibilidade.
        </p>
        <ButtonLink href="#ofertas" variant="cod">
          Escolher minha opção
        </ButtonLink>
      </Container>
    </section>
  );
}
