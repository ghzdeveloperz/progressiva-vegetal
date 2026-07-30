import styles from "./section-heading.module.css";

type SectionHeadingProps = Readonly<{
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  inverted?: boolean;
}>;

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  inverted = false
}: SectionHeadingProps) {
  return (
    <header
      className={`${styles.root} ${styles[align]} ${
        inverted ? styles.inverted : ""
      }`}
    >
      {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
      <h2 className={styles.title}>{title}</h2>
      {description ? <p className={styles.description}>{description}</p> : null}
    </header>
  );
}
