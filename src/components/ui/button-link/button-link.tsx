import type { AnchorHTMLAttributes } from "react";

import styles from "./button-link.module.css";

type ButtonVariant = "primary" | "secondary" | "cod";

type ButtonLinkProps = Readonly<
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    variant?: ButtonVariant;
    fullWidth?: boolean;
  }
>;

export function ButtonLink({
  variant = "primary",
  fullWidth = false,
  className = "",
  ...props
}: ButtonLinkProps) {
  const classes = [
    styles.button,
    styles[variant],
    fullWidth ? styles.fullWidth : "",
    className
  ]
    .filter(Boolean)
    .join(" ");

  return <a className={classes} {...props} />;
}
