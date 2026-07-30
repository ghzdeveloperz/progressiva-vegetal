import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/container/container";

import styles from "./footer-section.module.css";

type FooterSectionProps = Readonly<{
  brandName: string;
}>;

const navigationLinks = [
  {
    label: "O produto",
    href: "#produto",
  },
  {
    label: "Resultados",
    href: "#avaliacoes",
  },
  {
    label: "Combos",
    href: "#ofertas",
  },
  {
    label: "Pagamento",
    href: "#pagamento",
  },
  {
    label: "Dúvidas",
    href: "#duvidas",
  },
] as const;

/*
 * Implementação futura:
 *
 * const legalLinks = [
 *   {
 *     label: "Política de privacidade",
 *     href: "/politica-de-privacidade",
 *   },
 *   {
 *     label: "Trocas e devoluções",
 *     href: "/trocas-e-devolucoes",
 *   },
 *   {
 *     label: "Política de entrega",
 *     href: "/politica-de-entrega",
 *   },
 * ] as const;
 */

export function FooterSection({
  brandName,
}: FooterSectionProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.root}>
      <Container>
        <div className={styles.main}>
          <div className={styles.brandColumn}>
            <Link
              href="#topo"
              className={styles.brand}
              aria-label={`${brandName} — voltar ao início`}
            >
              <Image
                src="/icons/verified/verified.svg"
                alt=""
                width={26}
                height={26}
                className={styles.brandIcon}
                aria-hidden="true"
              />

              <span>{brandName}</span>
            </Link>

            <p className={styles.description}>
              Progressiva Vegetal Sem Formol desenvolvida para uma
              rotina de cuidado capilar profissional, com alinhamento,
              brilho e movimento.
            </p>
          </div>

          <nav
            className={styles.column}
            aria-label="Navegação do rodapé"
          >
            <p className={styles.columnTitle}>Navegar</p>

            <ul className={styles.linkList}>
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.column}>
            <p className={styles.columnTitle}>Atendimento</p>

            <ul className={styles.contactList}>
              <li>
                <span>Canal</span>
                <p>WhatsApp</p>
              </li>

              <li>
                <span>Envios</span>
                <p>Consulte a cobertura no checkout</p>
              </li>

              <li>
                <span>Disponibilidade</span>
                <p>Conforme a região atendida</p>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            © {currentYear} {brandName}. Todos os direitos reservados.
          </p>

          {/*
           * Implementação futura dos links legais:
           *
           * <nav
           *   className={styles.legalNavigation}
           *   aria-label="Informações legais"
           * >
           *   {legalLinks.map((link) => (
           *     <Link key={link.href} href={link.href}>
           *       {link.label}
           *     </Link>
           *   ))}
           * </nav>
           */}
        </div>
      </Container>
    </footer>
  );
}
