import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { CtaButton } from "../CtaButton/CtaButton.jsx";
import styles from "./StatCardModal.module.css";

export const StatCardModal = ({ isOpen, onClose, label, details }) => {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;

    const previouslyFocusedElement = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocusedElement?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const modalTitle = details?.fullTitle || label;
  const description =
    typeof details === "string" ? details : details?.description;

  return createPortal(
    <div
      className={styles.backdrop}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="stat-card-modal-title"
      >
        <button
          ref={closeButtonRef}
          type="button"
          className={styles.closeButton}
          aria-label="Fechar detalhes"
          onClick={onClose}
        >
          <span aria-hidden="true">×</span>
        </button>
        <div className={styles.modalContent}>
          <p className={styles.eyebrow}>{label}</p>
          <h2 id="stat-card-modal-title" className={styles.title}>
            {modalTitle}
          </h2>
          {description && <p className={styles.description}>{description}</p>}

          {details?.benefits?.length > 0 && (
            <div className={styles.detailGroup}>
              <h3>Como podemos ajudar</h3>
              <ul>
                {details.benefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
            </div>
          )}

          {details?.cases?.length > 0 && (
            <div className={styles.detailGroup}>
              <h3>Atuação</h3>
              <ul>
                {details.cases.map((caseItem) => (
                  <li key={caseItem}>{caseItem}</li>
                ))}
              </ul>
            </div>
          )}

          {!description &&
            !details?.benefits?.length &&
            !details?.cases?.length && (
              <p className={styles.description}>
                Entre em contato para saber mais sobre esta área de atuação.
              </p>
            )}
        </div>
        <div className={styles.ctaContainer}>
          <CtaButton content="Fale com um especialista" />
        </div>
      </section>
    </div>,
    document.body,
  );
};
