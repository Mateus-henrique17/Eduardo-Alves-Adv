import { useState } from "react";
import styles from "./StatCard.module.css";
import { StatCardModal } from "./StatCardModal.jsx";

export const StatCard = ({ variant = "default", label, icon, info, details }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isImage = typeof icon === "string" && 
    [".jpeg", ".jpg", ".gif", ".png", ".svg", ".webp"].some(ext => icon.toLowerCase().endsWith(ext));

  const cardContent = (
    <>
      <span className={styles.cardIcon} aria-hidden="true">
        {isImage ? (
          <img
            src={icon}
            alt=""
            className={styles.cardIconImg}
          />
        ) : (
          icon
        )}
      </span>
      <span className={styles.cardLabel}>{label}</span>
      <span className={styles.cardInfo}>{info}</span>
    </>
  );

  return (
    <>
      {variant === "resumed" ? (
        <div className={styles.cardContainer} data-variant={variant}>
          {cardContent}
        </div>
      ) : (
        <button
          type="button"
          className={styles.cardContainer}
          data-variant={variant}
          aria-haspopup="dialog"
          onClick={() => setIsModalOpen(true)}
        >
          {cardContent}
        </button>
      )}
      {variant !== "resumed" && (
        <StatCardModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          label={label}
          details={details}
        />
      )}
    </>
  );
};
