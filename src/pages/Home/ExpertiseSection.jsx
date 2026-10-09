import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { CtaButton } from "../../components/CtaButton/CtaButton.jsx";
import { StatCard } from "../../components/statCard/StatCard.jsx";
import { expertises } from "../../data/expertises.js";
import styles from "./ExpertiseSection.module.css";

const cardVariants = {
  center: { x: 0, scale: 1, zIndex: 3, opacity: 1 },
  right: (distance) => ({
    x: distance,
    scale: 0.8,
    zIndex: 2,
    opacity: 0.5,
  }),
  left: (distance) => ({
    x: -distance,
    scale: 0.8,
    zIndex: 2,
    opacity: 0.5,
  }),
  hidden: { x: 0, scale: 0.6, zIndex: 1, opacity: 0 },
};

const getCardStatus = (index, activeIndex, total) => {
  if (total <= 1) return "center";

  let difference = index - activeIndex;
  if (difference > total / 2) difference -= total;
  if (difference < -total / 2) difference += total;

  if (total === 2 && index !== activeIndex) return "right";
  if (difference === 0) return "center";
  if (difference === 1) return "right";
  if (difference === -1) return "left";
  return "hidden";
};

export const ExpertiseSection = () => {
  const [activeExpertise, setActiveExpertise] = useState(0);
  const [isMobile, setIsMobile] = useState(
    () => window.matchMedia("(max-width: 600px)").matches,
  );
  const distanceX = isMobile ? 200 : 300;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 600px)");
    const updateMobileState = (event) => setIsMobile(event.matches);

    mediaQuery.addEventListener("change", updateMobileState);
    return () => mediaQuery.removeEventListener("change", updateMobileState);
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveExpertise((current) => (current + 1) % expertises.length);
    }, 4000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className={styles.section} aria-labelledby="expertise-title">
      <p className={styles.eyebrow}>Eduardo Alves Advocacia</p>
      <h2 id="expertise-title" className={styles.sectionTitle}>
        Conheça nossas áreas de atuação
      </h2>
      <div className={styles.carousel}>
        <div className={styles.track}>
          {expertises.map((card, index) => (
            <motion.div
              key={card.id}
              className={styles.cardButton}
              aria-label={`Mostrar área: ${card.label}`}
              role="group"
              variants={cardVariants}
              custom={distanceX}
              animate={getCardStatus(index, activeExpertise, expertises.length)}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              onClick={() => setActiveExpertise(index)}
            >
              <StatCard
                key={card.id}
                variant="default"
                label={card.label}
                icon={card.icon}
                info={card.summary}
                details={card.details}
              />
            </motion.div>
          ))}
        </div>
      </div>
      <CtaButton content="Agende uma consulta" />
    </section>
  );
};
