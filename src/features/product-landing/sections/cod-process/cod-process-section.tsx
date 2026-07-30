import { Container } from "@/components/ui/container/container";

import { AudioSocialProofCard } from "../../components/audio-social-proof-card/audio-social-proof-card";

import styles from "./cod-process-section.module.css";

const steps = [
  {
    number: "01",
    title: "Escolha seu kit",
    description:
      "Selecione a opção mais adequada para a sua necessidade.",
  },
  {
    number: "02",
    title: "Informe seus dados",
    description:
      "Preencha apenas as informações necessárias para a entrega.",
  },
  {
    number: "03",
    title: "Confirme o pedido",
    description:
      "Confira disponibilidade, prazo e condições antes de finalizar.",
  },
  {
    number: "04",
    title: "Receba e pague",
    description:
      "O pagamento é realizado somente no momento da entrega.",
  },
] as const;

export function CodProcessSection() {
  return (
    <section
      id="pagamento"
      className={styles.root}
      aria-labelledby="cod-process-title"
    >
      <Container>
        <div className={styles.heading}>
          <p className={styles.eyebrow}>Pagamento na entrega</p>

          <h2
            id="cod-process-title"
            className={styles.title}
          >
            Um processo simples, do pedido ao recebimento
          </h2>

          <p className={styles.description}>
            Escolha seu kit, confirme os dados e realize o pagamento
            somente quando o produto chegar.
          </p>
        </div>

        <ol className={styles.steps}>
          {steps.map((step) => (
            <li
              key={step.number}
              className={styles.step}
            >
              <span className={styles.number}>
                {step.number}
              </span>

              <div className={styles.stepContent}>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className={styles.socialProofWrapper}>
          <AudioSocialProofCard
            imageSrc="/images/social-proof/audio-cliente.jpg"
            imageAlt="Cliente que enviou um depoimento em áudio"
            customerName="Mariana Souza"
            audioSrc="/audios/Audio-Cliente.mp3"
          />
        </div>
      </Container>
    </section>
  );
}
