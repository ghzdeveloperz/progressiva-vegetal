"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";

import styles from "./pdf-preview-modal.module.css";

type PdfPreviewModalProps = Readonly<{
  pdfSrc: string;
  triggerLabel: string;
  title: string;
}>;

export function PdfPreviewModal({
  pdfSrc,
  triggerLabel,
  title,
}: PdfPreviewModalProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") {
        return;
      }

      setIsOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);

    window.requestAnimationFrame(() => {
      triggerRef.current?.focus();
    });
  };

  const modal = isOpen ? (
    <div
      className={styles.backdrop}
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          closeModal();
        }
      }}
    >
      <section
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="pdf-modal-title"
      >
        <header className={styles.header}>
          <div>
            <p className={styles.eyebrow}>
              Instruções oficiais
            </p>

            <h2
              id="pdf-modal-title"
              className={styles.title}
            >
              {title}
            </h2>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            className={styles.closeButton}
            onClick={closeModal}
            aria-label="Fechar visualização do rótulo"
          >
            <span aria-hidden="true">×</span>
          </button>
        </header>

        <div className={styles.viewer}>
          <iframe
            src={`${pdfSrc}#view=FitH`}
            title={title}
            className={styles.iframe}
          />
        </div>

        <footer className={styles.footer}>
          <p>
            Caso a visualização não carregue no seu dispositivo,
            abra o documento diretamente.
          </p>

          <a
            href={pdfSrc}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.externalLink}
          >
            Abrir PDF em nova aba
            <span aria-hidden="true">↗</span>
          </a>
        </footer>
      </section>
    </div>
  ) : null;

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className={styles.trigger}
        onClick={openModal}
        aria-haspopup="dialog"
      >
        {triggerLabel}
      </button>

      {isMounted && modal
        ? createPortal(modal, document.body)
        : null}
    </>
  );
}