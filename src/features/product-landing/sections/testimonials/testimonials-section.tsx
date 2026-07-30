import { Container } from "@/components/ui/container/container";
import { SectionHeading } from "@/components/ui/section-heading/section-heading";
import type { Testimonial } from "../../model/product-page-content";

import styles from "./testimonials-section.module.css";

type TestimonialsSectionProps = Readonly<{
  items: readonly Testimonial[];
}>;

export function TestimonialsSection({ items }: TestimonialsSectionProps) {
  return (
    <section id="avaliacoes" className={styles.root}>
      <Container>
        <SectionHeading
          eyebrow="Prova social"
          title="Avaliações em vídeo que parecem parte da experiência"
          description="Os cards já estão preparados para receber vídeos verticais reais, com poster otimizado e carregamento somente após interação."
          align="center"
        />

        <div className={styles.grid}>
          {items.map((item) => (
            <article key={item.id} className={styles.card}>
              <div className={styles.videoPlaceholder} aria-hidden="true">
                <span className={styles.play}>▶</span>
                <span>Vídeo 9:16</span>
              </div>
              <div className={styles.content}>
                <p className={styles.stars} aria-label="Cinco estrelas">
                  ★★★★★
                </p>
                <h3>{item.title}</h3>
                <blockquote>“{item.quote}”</blockquote>
                <p className={styles.meta}>{item.meta}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
