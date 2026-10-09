import logo from "../../assets/images/logo.svg";
import portrait from "../../assets/images/Profile/dr-eduardo-alves.jpg";
import { CtaButton } from "../../components/CtaButton/CtaButton.jsx";
import styles from "./AboutPage.module.css";

export const AboutPage = () => (
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

    <section className={styles.aboutSection} aria-labelledby="about-title">
      <header className={styles.intro}>
        <p className={styles.eyebrow}>Eduardo Alves Advocacia</p>
        <h1 id="about-title" className={styles.title}>
          Conheça o nosso escritório
        </h1>
        <p className={styles.lead}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae
          justo nec nulla facilisis suscipit.
        </p>
      </header>

      <div className={styles.aboutContent}>
        <img
          className={styles.portrait}
          src={portrait}
          alt="Retrato profissional utilizado provisoriamente na apresentação do escritório"
        />
        <div className={styles.officeCopy}>
          <h2 className={styles.officeTitle}>O escritório</h2>
          <p className={styles.officeText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            sollicitudin, libero vel consequat consequat, neque erat tristique
            justo, vitae tincidunt erat arcu sit amet nisl. Mauris at felis
            vitae augue interdum posuere.
          </p>
          <p className={styles.officeText}>
            Praesent ut ligula non mi varius sagittis. Donec posuere vulputate
            arcu. Phasellus accumsan cursus velit. Vestibulum ante ipsum primis
            in faucibus orci luctus et ultrices posuere cubilia curae.
          </p>
        </div>
      </div>

      <div className={styles.ctaWrapper}>
        <CtaButton content="Fale com um especialista" />
      </div>
    </section>
  </div>
);
