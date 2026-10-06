import logo from "../../assets/images/logo.svg";
import { CtaButton } from "../../components/CtaButton/CtaButton.jsx";
import { StatCard } from "../../components/statCard/StatCard.jsx";
import { expertises } from "../../data/expertises.js";
import styles from "./ExpertisesPage.module.css";

export const ExpertisesPage = () => {
  return (
    <div className={styles.pageWrapper}>
      <section
        className={styles.hero}
        aria-label="Identidade visual Eduardo Alves"
      >
        <div className={styles.heroLogoHeading}>
          <img
            className={styles.heroLogo}
            src={logo}
            alt="Eduardo Alves — Advocacia"
          />
        </div>
      </section>

      <section
        className={styles.expertiseSection}
        aria-labelledby="expertise-title"
      >
        <h1 id="expertise-title" className={styles.title}>
          Conheça nossas áreas de atuação
        </h1>
        <div className={styles.expertiseGrid}>
          {expertises.map((card) => (
            <StatCard
              key={card.id}
              variant="default"
              label={card.label}
              icon={card.icon}
              info={card.summary}
              details={card.details}
            />
          ))}
        </div>
        <div className={styles.ctaWrapper}>
          <CtaButton content="Falar com um especialista" />
        </div>
      </section>
    </div>
  );
};
