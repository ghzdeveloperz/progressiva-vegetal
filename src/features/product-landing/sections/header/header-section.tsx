import { ButtonLink } from "@/components/ui/button-link/button-link";
import { Container } from "@/components/ui/container/container";

import styles from "./header-section.module.css";

type HeaderSectionProps = Readonly<{
  brandName: string;
}>;

export function HeaderSection({ brandName }: HeaderSectionProps) {
  return (
    <header className={styles.root}>
      <Container className={styles.content}>
        <a href="#inicio" className={styles.brand} aria-label={`${brandName}, início`}>
          <span className={styles.brandMark} aria-hidden="true">PV</span>
          <span>{brandName}</span>
        </a>

        <nav className={styles.navigation} aria-label="Navegação principal">
          <a href="#beneficios">Benefícios</a>
          <a href="#avaliacoes">Avaliações</a>
          <a href="#ofertas">Ofertas</a>
          <a href="#duvidas">Dúvidas</a>
        </nav>

        <ButtonLink href="#ofertas" className={styles.cta}>
          Pedir agora
        </ButtonLink>
      </Container>
    </header>
  );
}
