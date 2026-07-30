"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "offer_countdown_expires_at";

const MIN_SECONDS = 13 * 60 + 23; // 13:23
const MAX_SECONDS = 19 * 60 + 39; // 19:39

function generateRandomDuration(): number {
  return (
    Math.floor(Math.random() * (MAX_SECONDS - MIN_SECONDS + 1)) +
    MIN_SECONDS
  );
}

function getInitialExpiration(): number {
  const storedExpiration = Number(localStorage.getItem(STORAGE_KEY));

  if (Number.isFinite(storedExpiration) && storedExpiration > 0) {
    return storedExpiration;
  }

  const durationInSeconds = generateRandomDuration();
  const expiration = Date.now() + durationInSeconds * 1000;

  localStorage.setItem(STORAGE_KEY, String(expiration));

  return expiration;
}

function formatTime(totalSeconds: number): string {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
    2,
    "0",
  )}`;
}

export function OfferCountdown() {
  const [remainingSeconds, setRemainingSeconds] = useState<number | null>(null);

  useEffect(() => {
    const expiration = getInitialExpiration();

    function updateCountdown() {
      const remaining = Math.max(
        0,
        Math.ceil((expiration - Date.now()) / 1000),
      );

      setRemainingSeconds(remaining);
    }

    updateCountdown();

    const intervalId = window.setInterval(updateCountdown, 1000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  if (remainingSeconds === null) {
    return <span aria-hidden="true">--:--</span>;
  }

  if (remainingSeconds === 0) {
    return <span>Oferta encerrada</span>;
  }

  return (
    <time
      aria-label={`Oferta termina em ${remainingSeconds} segundos`}
      className="tabular-nums"
    >
      {formatTime(remainingSeconds)}
    </time>
  );
}
