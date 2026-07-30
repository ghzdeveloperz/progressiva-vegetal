"use client";

import Image from "next/image";
import {
  useCallback,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";

import styles from "./before-after-slider.module.css";

type BeforeAfterSliderProps = Readonly<{
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  title: string;
  priority?: boolean;
}>;

const INITIAL_POSITION = 50;

function clamp(value: number, minimum: number, maximum: number) {
  return Math.min(Math.max(value, minimum), maximum);
}

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  title,
  priority = false,
}: BeforeAfterSliderProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState(INITIAL_POSITION);
  const [isDragging, setIsDragging] = useState(false);

  const updatePosition = useCallback((clientX: number) => {
    const root = rootRef.current;

    if (!root) {
      return;
    }

    const bounds = root.getBoundingClientRect();

    if (bounds.width <= 0) {
      return;
    }

    const relativePosition =
      ((clientX - bounds.left) / bounds.width) * 100;

    setPosition(clamp(relativePosition, 0, 100));
  }, []);

  function handlePointerDown(
    event: ReactPointerEvent<HTMLDivElement>,
  ) {
    event.currentTarget.setPointerCapture(event.pointerId);

    setIsDragging(true);
    updatePosition(event.clientX);
  }

  function handlePointerMove(
    event: ReactPointerEvent<HTMLDivElement>,
  ) {
    if (!isDragging) {
      return;
    }

    updatePosition(event.clientX);
  }

  function handlePointerEnd(
    event: ReactPointerEvent<HTMLDivElement>,
  ) {
    if (
      event.currentTarget.hasPointerCapture(event.pointerId)
    ) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    setIsDragging(false);
  }

  return (
    <div
      ref={rootRef}
      className={`${styles.root} ${
        isDragging ? styles.dragging : ""
      }`}
      style={
        {
          "--comparison-position": `${position}%`,
        } as React.CSSProperties
      }
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerEnd}
      onPointerCancel={handlePointerEnd}
      role="group"
      aria-label={title}
    >
      <Image
        src={afterSrc}
        alt={afterAlt}
        fill
        priority={priority}
        sizes="(max-width: 48rem) 82vw, 38vw"
        className={styles.image}
        draggable={false}
      />

      <div
        className={styles.beforeLayer}
        aria-hidden="true"
      >
        <Image
          src={beforeSrc}
          alt=""
          fill
          priority={priority}
          sizes="(max-width: 48rem) 82vw, 38vw"
          className={styles.image}
          draggable={false}
        />
      </div>

      <span className={`${styles.label} ${styles.beforeLabel}`}>
        Antes
      </span>

      <span className={`${styles.label} ${styles.afterLabel}`}>
        Depois
      </span>

      <div
        className={styles.divider}
        aria-hidden="true"
      />

      <label className={styles.rangeLabel}>
        <span className={styles.srOnly}>
          Ajustar comparação entre antes e depois
        </span>

        <input
          type="range"
          min="0"
          max="100"
          step="1"
          value={Math.round(position)}
          className={styles.range}
          onChange={(event) => {
            setPosition(Number(event.target.value));
          }}
          aria-label={`Comparação de ${title}`}
        />
      </label>

      <div
        className={styles.handle}
        aria-hidden="true"
      >
        <span className={styles.leftArrow}>‹</span>
        <span className={styles.rightArrow}>›</span>
      </div>
    </div>
  );
}