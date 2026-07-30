import Image from "next/image";

import { Container } from "@/components/ui/container/container";
import type { TrustItem } from "../../model/product-page-content";

import styles from "./trust-bar-section.module.css";

type TrustBarSectionProps = Readonly<{
  items: readonly TrustItem[];
}>;

export function TrustBarSection({
  items
}: TrustBarSectionProps) {
  return (
    <aside
      className={styles.root}
      aria-label="Informações de confiança"
    >
      <Container>
        <ul className={styles.list}>
          {items.map((item) => (
            <li key={item.id} className={styles.item}>
              <span className={styles.iconWrapper} aria-hidden="true">
                <Image
                  src={item.iconSrc}
                  alt=""
                  width={20}
                  height={20}
                  className={styles.icon}
                />
              </span>

              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </Container>
    </aside>
  );
}
