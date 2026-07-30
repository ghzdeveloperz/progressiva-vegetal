"use client";

import Link from "next/link";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import { Container } from "@/components/ui/container/container";
import type { Offer } from "../../model/product-page-content";

import styles from "./offers-section.module.css";

type OffersSectionProps = Readonly<{
  offers: readonly Offer[];
}>;

const PROGRAMMATIC_SCROLL_TIMEOUT = 700;

function getQuantityLabel(quantity: number) {
  if (quantity === 1) {
    return "1 unidade";
  }

  return `${quantity} unidades`;
}

function getQuantityUnitLabel(quantity: number) {
  return quantity === 1 ? "unidade" : "unidades";
}

export function OffersSection({
  offers,
}: OffersSectionProps) {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const programmaticScrollRef = useRef(false);
  const programmaticScrollTimeoutRef =
    useRef<number | null>(null);

  const featuredIndex = Math.max(
    offers.findIndex((offer) => offer.featured),
    0,
  );

  const [activeIndex, setActiveIndex] =
    useState(featuredIndex);

  const clearProgrammaticScrollTimeout = useCallback(() => {
    if (programmaticScrollTimeoutRef.current === null) {
      return;
    }

    window.clearTimeout(
      programmaticScrollTimeoutRef.current,
    );

    programmaticScrollTimeoutRef.current = null;
  }, []);

  const finishProgrammaticScroll = useCallback(() => {
    clearProgrammaticScrollTimeout();
    programmaticScrollRef.current = false;
  }, [clearProgrammaticScrollTimeout]);

  const updateActiveCardFromScroll = useCallback(() => {
    if (programmaticScrollRef.current) {
      return;
    }

    const carousel = carouselRef.current;

    if (!carousel || carousel.children.length === 0) {
      return;
    }

    const carouselRect = carousel.getBoundingClientRect();
    const carouselCenter =
      carouselRect.left + carouselRect.width / 2;

    let closestIndex = 0;
    let smallestDistance = Number.POSITIVE_INFINITY;

    Array.from(carousel.children).forEach(
      (child, index) => {
        const cardRect = child.getBoundingClientRect();
        const cardCenter =
          cardRect.left + cardRect.width / 2;

        const distance = Math.abs(
          carouselCenter - cardCenter,
        );

        if (distance < smallestDistance) {
          smallestDistance = distance;
          closestIndex = index;
        }
      },
    );

    setActiveIndex((currentIndex) => {
      return currentIndex === closestIndex
        ? currentIndex
        : closestIndex;
    });
  }, []);

  const scrollToOffer = useCallback(
    (
      index: number,
      behavior: ScrollBehavior = "smooth",
    ) => {
      const carousel = carouselRef.current;

      if (!carousel || offers.length === 0) {
        return;
      }

      const normalizedIndex =
        (index + offers.length) % offers.length;

      const targetCard = carousel.children.item(
        normalizedIndex,
      ) as HTMLElement | null;

      if (!targetCard) {
        return;
      }

      /*
       * Mantém o seletor escolhido ativo durante toda a
       * rolagem programática. Isso evita que o estado passe
       * rapidamente pelos cards intermediários.
       */
      programmaticScrollRef.current = true;
      clearProgrammaticScrollTimeout();
      setActiveIndex(normalizedIndex);

      targetCard.scrollIntoView({
        behavior,
        block: "nearest",
        inline: "center",
      });

      if (behavior === "auto") {
        window.requestAnimationFrame(() => {
          finishProgrammaticScroll();
        });

        return;
      }

      programmaticScrollTimeoutRef.current =
        window.setTimeout(() => {
          finishProgrammaticScroll();
        }, PROGRAMMATIC_SCROLL_TIMEOUT);
    },
    [
      clearProgrammaticScrollTimeout,
      finishProgrammaticScroll,
      offers.length,
    ],
  );

  useEffect(() => {
    const mobileQuery = window.matchMedia(
      "(max-width: 68rem)",
    );

    if (!mobileQuery.matches) {
      return;
    }

    const frameId = window.requestAnimationFrame(() => {
      scrollToOffer(featuredIndex, "auto");
    });

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, [featuredIndex, scrollToOffer]);

  useEffect(() => {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    let frameId: number | null = null;

    const handleScroll = () => {
      if (
        frameId !== null ||
        programmaticScrollRef.current
      ) {
        return;
      }

      frameId = window.requestAnimationFrame(() => {
        frameId = null;
        updateActiveCardFromScroll();
      });
    };

    const handleScrollEnd = () => {
      if (programmaticScrollRef.current) {
        finishProgrammaticScroll();
        return;
      }

      updateActiveCardFromScroll();
    };

    const handlePointerDown = () => {
      /*
       * Quando a pessoa começa a arrastar manualmente,
       * qualquer navegação programática anterior é cancelada.
       */
      finishProgrammaticScroll();
    };

    carousel.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    carousel.addEventListener(
      "scrollend",
      handleScrollEnd,
    );

    carousel.addEventListener(
      "pointerdown",
      handlePointerDown,
      {
        passive: true,
      },
    );

    updateActiveCardFromScroll();

    return () => {
      carousel.removeEventListener(
        "scroll",
        handleScroll,
      );

      carousel.removeEventListener(
        "scrollend",
        handleScrollEnd,
      );

      carousel.removeEventListener(
        "pointerdown",
        handlePointerDown,
      );

      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, [
    finishProgrammaticScroll,
    updateActiveCardFromScroll,
  ]);

  useEffect(() => {
    return () => {
      clearProgrammaticScrollTimeout();
    };
  }, [clearProgrammaticScrollTimeout]);

  return (
    <section
      id="ofertas"
      className={styles.root}
      aria-labelledby="offers-section-title"
    >
      <Container>
        <div className={styles.sectionHeading}>
          <h2
            id="offers-section-title"
            className={styles.sectionTitle}
          >
            Escolha o kit ideal para o seu momento
          </h2>

          <p className={styles.sectionDescription}>
            Compare os kits disponíveis e escolha a opção mais
            adequada para a sua rotina, necessidade e frequência de
            uso.
          </p>
        </div>

        <div
          className={styles.mobileSelectors}
          aria-label="Selecionar quantidade do kit"
        >
          {offers.map((offer, index) => {
            const isActive = activeIndex === index;

            return (
              <button
                key={offer.id}
                type="button"
                className={`${styles.mobileSelector} ${
                  isActive
                    ? styles.mobileSelectorActive
                    : ""
                }`}
                onClick={() => scrollToOffer(index)}
                aria-label={`Selecionar kit com ${getQuantityLabel(
                  offer.quantity,
                )}`}
                aria-pressed={isActive}
              >
                <strong>{offer.quantity}</strong>

                <span>
                  {getQuantityUnitLabel(offer.quantity)}
                </span>
              </button>
            );
          })}
        </div>

        <div
          ref={carouselRef}
          className={styles.grid}
          role="region"
          aria-label="Opções de kits"
          tabIndex={0}
        >
          {offers.map((offer, index) => {
            const isActive = activeIndex === index;

            return (
              <article
                key={offer.id}
                className={`${styles.card} ${
                  offer.featured ? styles.featured : ""
                } ${
                  isActive ? styles.activeCard : ""
                }`}
                aria-label={`${getQuantityLabel(
                  offer.quantity,
                )}, ${offer.price}`}
              >
                {offer.featured ? (
                  <>
                    <div
                      className={styles.featuredAura}
                      aria-hidden="true"
                    />

                    <div
                      className={styles.featuredOrbit}
                      aria-hidden="true"
                    />
                  </>
                ) : null}

                {offer.badge ? (
                  <span
                    className={`${styles.badge} ${
                      offer.featured
                        ? styles.badgeFeatured
                        : styles.badgeDefault
                    }`}
                  >
                    {offer.badge}
                  </span>
                ) : null}

                <div className={styles.cardInner}>
                  {offer.featured ? (
                    <div
                      className={styles.featuredLight}
                      aria-hidden="true"
                    />
                  ) : null}

                  <div className={styles.header}>
                    {offer.eyebrow ? (
                      <p className={styles.eyebrow}>
                        {offer.eyebrow}
                      </p>
                    ) : null}

                    <h3 className={styles.title}>
                      {offer.name}
                    </h3>

                    <p className={styles.quantity}>
                      {getQuantityLabel(offer.quantity)}
                    </p>
                  </div>

                  <div className={styles.pricing}>
                    {offer.originalPrice ? (
                      <p className={styles.originalPrice}>
                        {offer.originalPrice}
                      </p>
                    ) : (
                      <div
                        className={
                          styles.originalPriceSpacer
                        }
                        aria-hidden="true"
                      />
                    )}

                    <p className={styles.price}>
                      {offer.price}
                    </p>

                    {offer.savingsLabel ? (
                      <span className={styles.savingsChip}>
                        {offer.savingsLabel}
                      </span>
                    ) : null}
                  </div>

                  <div
                    className={styles.divider}
                    aria-hidden="true"
                  />

                  <ul className={styles.benefits}>
                    {offer.benefits.map((benefit) => (
                      <li key={benefit}>{benefit}</li>
                    ))}
                  </ul>

                  <Link
                    href={`/api/checkout?offer=${offer.checkoutKey}`}
                    className={`${styles.cta} ${
                      offer.featured
                        ? styles.ctaFeatured
                        : styles.ctaDefault
                    }`}
                    prefetch={false}
                  >
                    Comprar agora
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        <p className={styles.disclaimer}>
          Checkout em ambiente seguro. O valor final, a cobertura e
          a disponibilidade devem ser confirmados durante a
          finalização do pedido.
        </p>
      </Container>
    </section>
  );
}
