import { ButtonLink } from "@/components/ui/button-link/button-link";
import { Container } from "@/components/ui/container/container";
import { SectionHeading } from "@/components/ui/section-heading/section-heading";

import styles from "./cod-process-section.module.css";

const steps = [
  ["01", "Escolha a oferta", "Selecione a quantidade desejada."],
  ["02", "Informe seus dados", "Cadastre apenas os dados necessários para a entrega."],
  ["03", "Confirme o pedido", "A operação valida CEP, cobertura, produto e valor."],
  ["04", "Receba e pague", "O pagamento acontece somente no momento da entrega."]
] as const;

export function CodProcessSection() {
  return (
    <section id="pagamento" className={styles.root}>
      <Container>
        <SectionHeading
          eyebrow="Cash on delivery"
          title="Receba primeiro. Pague depois."
          description="A comunicação é repetida de forma objetiva, sem esconder condições ou criar falsa sensação de segurança."
          align="center"
        />

        <ol className={styles.steps}>
          {steps.map(([number, title, description]) => (
            <li key={number} className={styles.step}>
              <span className={styles.number}>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </li>
          ))}
        </ol>

        <div className={styles.notice}>
          <div>
            <strong>Nenhum pagamento antecipado</strong>
            <p>
              Métodos aceitos, prazo e disponibilidade podem variar conforme a região e a operação logística.
            </p>
          </div>
          <ButtonLink href="#duvidas" variant="cod">
            Entender o processo
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
