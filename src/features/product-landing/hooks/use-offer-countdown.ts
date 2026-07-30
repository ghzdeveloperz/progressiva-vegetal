"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "landing_offer_expires_at";

const MIN_DURATION_SECONDS = 13 * 60 + 23;
const MAX_DURATION_SECONDS = 19 * 60 + 39;

function generateRandomDurationSeconds(): number {
  const range =
    MAX_DURATION_SECONDS - MIN_DURATION_SECONDS + 1;

  return (
    Math.floor(Math.random() * range) +
    MIN_DURATION_SECONDS
  );
}

function createExpirationTimestamp(): number {
  const durationSeconds =
    generateRandomDurationSeconds();

  const expirationTimestamp =
    Date.now() + durationSeconds * 1000;

  window.localStorage.setItem(
    STORAGE_KEY,
    String(expirationTimestamp),
  );

  return expirationTimestamp;
}

function getOrCreateExpirationTimestamp(): number {
  const storedValue =
    window.localStorage.getItem(STORAGE_KEY);

  const storedExpiration = Number(storedValue);

  if (
    Number.isFinite(storedExpiration) &&
    storedExpiration > 0
  ) {
    return storedExpiration;
  }

  return createExpirationTimestamp();
}

function calculateRemainingSeconds(
  expirationTimestamp: number,
): number {
  return Math.max(
    0,
    Math.ceil(
      (expirationTimestamp - Date.now()) / 1000,
    ),
  );
}

export function useOfferCountdown() {
  const [remainingSeconds, setRemainingSeconds] =
    useState<number | null>(null);

  useEffect(() => {
    const expirationTimestamp =
      getOrCreateExpirationTimestamp();

    function updateCountdown() {
      setRemainingSeconds(
        calculateRemainingSeconds(
          expirationTimestamp,
        ),
      );
    }

    updateCountdown();

    const intervalId = window.setInterval(
      updateCountdown,
      1000,
    );

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  return remainingSeconds;
}

export function formatOfferCountdown(
  totalSeconds: number | null,
) {
  if (totalSeconds === null) {
    return {
      minutes: "--",
      seconds: "--",
      formatted: "--:--",
    };
  }

  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const formattedMinutes = String(minutes).padStart(
    2,
    "0",
  );

  const formattedSeconds = String(seconds).padStart(
    2,
    "0",
  );

  return {
    minutes: formattedMinutes,
    seconds: formattedSeconds,
    formatted: `${formattedMinutes}:${formattedSeconds}`,
  };
}
