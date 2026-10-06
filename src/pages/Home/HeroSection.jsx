import styles from "./HeroSection.module.css";

export const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.logo} aria-hidden="true" />
      <h1 className={styles.title}>
        Respaldo jurídico sólido para você e sua empresa.
      </h1>
      <p className={styles.subtitle}>
        Soluções eficientes e defesa de excelência em todas as áreas do Direito.
      </p>
    </section>
  );
};
