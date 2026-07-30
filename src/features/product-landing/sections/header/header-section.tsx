"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { ButtonLink } from "@/components/ui/button-link/button-link";
import { Container } from "@/components/ui/container/container";

import styles from "./header-section.module.css";

type HeaderSectionProps = Readonly<{
  brandName: string;
  brandLogo: string;
}>;

export function HeaderSection({
  brandName,
  brandLogo,
}: HeaderSectionProps) {
  const [isOutsideHero, setIsOutsideHero] = useState(false);

  useEffect(() => {
    const heroElement = document.getElementById("inicio");

    if (!heroElement) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (!entry) {
          return;
        }

        setIsOutsideHero(!entry.isIntersecting);
      },
      {
        rootMargin: "-76px 0px 0px 0px",
        threshold: 0,
      },
    );

    observer.observe(heroElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <header
      className={`${styles.root} ${
        isOutsideHero ? styles.outsideHero : ""
      }`}
    >
      <div className={styles.background} aria-hidden="true" />

      <Container className={styles.content}>
        <a
          href="#inicio"
          className={styles.brand}
          aria-label={`${brandName}, início`}
        >
          <Image
            src={brandLogo}
            alt={brandName}
            width={420}
            height={140}
            priority
            className={styles.brandLogo}
          />
        </a>

        <nav
          className={styles.navigation}
          aria-label="Navegação principal"
        >
          <a href="#beneficios">Benefícios</a>
          <a href="#avaliacoes">Avaliações</a>
          <a href="#ofertas">Ofertas</a>
          <a href="#duvidas">Dúvidas</a>
        </nav>

        <ButtonLink href="#ofertas" className={styles.cta}>
          Escolher kit
        </ButtonLink>
      </Container>
    </header>
  );
}
