"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import { Container } from "@/components/ui/container/container";
import type { Testimonial } from "../../model/product-page-content";

import styles from "./testimonials-section.module.css";
import Image from "next/image";

type TestimonialsSectionProps = Readonly<{
  items: readonly Testimonial[];
}>;

export function TestimonialsSection({
  items,
}: TestimonialsSectionProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<
    Map<string, HTMLVideoElement>
  >(new Map());

  const [activeIndex, setActiveIndex] = useState(0);

  const pauseOtherVideos = useCallback(
    (activeVideoId: string) => {
      videoRefs.current.forEach((video, videoId) => {
        if (videoId !== activeVideoId && !video.paused) {
          video.pause();
        }
      });
    },
    [],
  );

  const updateActiveIndex = useCallback(() => {
    const carousel = carouselRef.current;

    if (!carousel || carousel.children.length === 0) {
      return;
    }

    const carouselCenter =
      carousel.scrollLeft + carousel.clientWidth / 2;

    let closestIndex = 0;
    let smallestDistance = Number.POSITIVE_INFINITY;

    Array.from(carousel.children).forEach(
      (child, index) => {
        const element = child as HTMLElement;

        const cardCenter =
          element.offsetLeft + element.offsetWidth / 2;

        const distance = Math.abs(
          carouselCenter - cardCenter,
        );

        if (distance < smallestDistance) {
          smallestDistance = distance;
          closestIndex = index;
        }
      },
    );

    setActiveIndex(closestIndex);
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    let frameId: number | null = null;

    const handleScroll = () => {
      if (frameId !== null) {
        return;
      }

      frameId = window.requestAnimationFrame(() => {
        frameId = null;
        updateActiveIndex();
      });
    };

    carousel.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    updateActiveIndex();

    return () => {
      carousel.removeEventListener(
        "scroll",
        handleScroll,
      );

      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, [updateActiveIndex]);

  const scrollToIndex = useCallback(
    (index: number) => {
      const carousel = carouselRef.current;

      if (!carousel) {
        return;
      }

      const normalizedIndex =
        (index + items.length) % items.length;

      const target = carousel.children.item(
        normalizedIndex,
      ) as HTMLElement | null;

      if (!target) {
        return;
      }

      target.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });

      setActiveIndex(normalizedIndex);
    },
    [items.length],
  );

  const handlePrevious = () => {
    scrollToIndex(activeIndex - 1);
  };

  const handleNext = () => {
    scrollToIndex(activeIndex + 1);
  };

  return (
    <section
      id="avaliacoes"
      className={styles.root}
      aria-labelledby="testimonials-title"
    >
      <Container>
        <div className={styles.header}>
          <div className={styles.headingContent}>
            <p className={styles.eyebrow}>
              Resultados reais
            </p>

            <h2
              id="testimonials-title"
              className={styles.title}
            >
              Veja a experiência de quem já utilizou
            </h2>

            <p className={styles.description}>
              Avaliações em vídeo ajudam você a conhecer
              melhor a aplicação, o acabamento e a experiência
              com o produto.
            </p>
          </div>

          {items.length > 1 ? (
            <div
              className={styles.controls}
              aria-label="Controles do carrossel"
            >
              <button
                type="button"
                className={styles.controlButton}
                onClick={handlePrevious}
                aria-label="Ver avaliação anterior"
              >
                <span aria-hidden="true">←</span>
              </button>

              <button
                type="button"
                className={styles.controlButton}
                onClick={handleNext}
                aria-label="Ver próxima avaliação"
              >
                <span aria-hidden="true">→</span>
              </button>
            </div>
          ) : null}
        </div>

        <div
          ref={carouselRef}
          className={styles.carousel}
          role="region"
          aria-label="Avaliações em vídeo"
          tabIndex={0}
        >
          {items.map((item, index) => (
            <article
              key={item.id}
              className={styles.card}
              aria-label={`Avaliação ${index + 1} de ${items.length
                }`}
            >
              <div className={styles.media}>
                {item.videoSrc ? (
                  <video
                    ref={(element) => {
                      if (element) {
                        videoRefs.current.set(
                          item.id,
                          element,
                        );
                      } else {
                        videoRefs.current.delete(item.id);
                      }
                    }}
                    className={styles.video}
                    controls
                    playsInline
                    preload="metadata"
                    poster={item.posterSrc}
                    onPlay={() =>
                      pauseOtherVideos(item.id)
                    }
                  >
                    <source
                      src={item.videoSrc}
                      type="video/mp4"
                    />

                    Seu navegador não suporta reprodução de
                    vídeos.
                  </video>
                ) : (
                  <div
                    className={styles.videoPlaceholder}
                    aria-label="Vídeo ainda não adicionado"
                  >
                    <span
                      className={styles.play}
                      aria-hidden="true"
                    >
                      ▶
                    </span>

                    <span>Vídeo vertical 9:16</span>
                  </div>
                )}
              </div>

              <div className={styles.cardContent}>
                <p
                  className={styles.stars}
                  aria-label="Avaliação de cinco estrelas"
                >
                  ★★★★★
                </p>

                <h3>{item.title}</h3>

                <blockquote>
                  “{item.quote}”
                </blockquote>

                <div className={styles.customer}>
                  <div>
                    {item.customerName ? (
                      <strong>
                        {item.customerName}
                      </strong>
                    ) : null}

                    {item.customerLocation ? (
                      <span>
                        {item.customerLocation}
                      </span>
                    ) : null}
                  </div>

                  <span className={styles.verified}>
                    <Image
                      src="/icons/verified/verified.svg"
                      alt=""
                      width={16}
                      height={16}
                      className={styles.verifiedIcon}
                      aria-hidden="true"
                    />

                    <span>{item.meta}</span>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {items.length > 1 ? (
          <div
            className={styles.pagination}
            aria-label="Posição do carrossel"
          >
            {items.map((item, index) => (
              <button
                key={item.id}
                type="button"
                className={`${styles.paginationDot} ${index === activeIndex
                    ? styles.paginationDotActive
                    : ""
                  }`}
                onClick={() => scrollToIndex(index)}
                aria-label={`Ir para avaliação ${index + 1}`}
                aria-current={
                  index === activeIndex ? "true" : undefined
                }
              />
            ))}
          </div>
        ) : null}
      </Container>
    </section>
  );
}
