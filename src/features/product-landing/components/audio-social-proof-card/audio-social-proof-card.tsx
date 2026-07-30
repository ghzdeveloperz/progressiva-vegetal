"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

import styles from "./audio-social-proof-card.module.css";

type AudioSocialProofCardProps = Readonly<{
  imageSrc: string;
  imageAlt: string;
  customerName: string;
  audioSrc: string;
}>;

function formatTime(value: number) {
  if (!Number.isFinite(value) || value < 0) {
    return "0:00";
  }

  const minutes = Math.floor(value / 60);
  const seconds = Math.floor(value % 60);

  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

export function AudioSocialProofCard({
  imageSrc,
  imageAlt,
  customerName,
  audioSrc,
}: AudioSocialProofCardProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const waveformRef = useRef<HTMLButtonElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const waveformBars = useMemo(
    () => [
      18, 24, 20, 28, 22, 16, 30, 36, 24, 18, 26, 32,
      20, 17, 29, 35, 22, 18, 27, 31, 19, 15, 25, 33,
      21, 18, 28, 34, 22, 19, 26, 30, 20, 16, 24, 31,
    ],
    []
  );

  const progress =
    duration > 0 ? Math.min(currentTime / duration, 1) : 0;

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    const handleLoadedMetadata = () => {
      setDuration(audio.duration || 0);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime || 0);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(audio.duration || 0);
    };

    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener(
        "loadedmetadata",
        handleLoadedMetadata
      );
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  async function handleTogglePlay() {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    try {
      await audio.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  }

  function handleSeek(event: React.MouseEvent<HTMLButtonElement>) {
    const audio = audioRef.current;
    const element = waveformRef.current;

    if (!audio || !element || !duration) {
      return;
    }

    const rect = element.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const ratio = Math.min(Math.max(clickX / rect.width, 0), 1);
    const nextTime = ratio * duration;

    audio.currentTime = nextTime;
    setCurrentTime(nextTime);
  }

  return (
    <div className={styles.card}>
      <div className={styles.identity}>
        <div className={styles.avatar}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="72px"
            className={styles.avatarImage}
          />
        </div>

        <strong className={styles.customerName}>
          {customerName}
        </strong>
      </div>

      <div className={styles.player}>
        <button
          type="button"
          className={styles.playButton}
          onClick={handleTogglePlay}
          aria-label={isPlaying ? "Pausar áudio" : "Reproduzir áudio"}
        >
          {isPlaying ? (
            <span className={styles.pauseIcon} aria-hidden="true" />
          ) : (
            <span className={styles.playIcon} aria-hidden="true" />
          )}
        </button>

        <div className={styles.waveArea}>
          <button
            ref={waveformRef}
            type="button"
            className={styles.waveButton}
            onClick={handleSeek}
            aria-label="Avançar ou voltar no áudio"
          >
            <div className={styles.waveform}>
              {waveformBars.map((height, index) => {
                const barProgress =
                  index / Math.max(waveformBars.length - 1, 1);
                const isActive = barProgress <= progress;

                return (
                  <span
                    key={`${height}-${index}`}
                    className={`${styles.bar} ${
                      isActive ? styles.barActive : ""
                    }`}
                    style={{ height: `${height}px` }}
                    aria-hidden="true"
                  />
                );
              })}
            </div>
          </button>

          <div className={styles.timeRow}>
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        <audio
          ref={audioRef}
          preload="metadata"
          src={audioSrc}
        />
      </div>
    </div>
  );
}
