import { Container } from "@/components/ui/container/container";

import styles from "./footer-section.module.css";

type FooterSectionProps = Readonly<{
  brandName: string;
}>;

export function FooterSection({ brandName }: FooterSectionProps) {
  return (
    <footer className={styles.root}>
      <Container className={styles.grid}>
        <div>
          <p className={styles.brand}>{brandName}</p>
          <p className={styles.description}>
            Substitua este conteúdo pelos dados oficiais da empresa antes da publicação.
          </p>
        </div>

        <nav className={styles.links} aria-label="Links legais">
          <a href="#">Política de privacidade</a>
          <a href="#">Trocas e devoluções</a>
          <a href="#">Política de entrega</a>
          <a href="#">Contato</a>
        </nav>

        <div className={styles.company}>
          <p>CNPJ: inserir</p>
          <p>Atendimento: inserir</p>
          <p>© {new Date().getFullYear()} {brandName}</p>
        </div>
      </Container>
    </footer>
  );
}
