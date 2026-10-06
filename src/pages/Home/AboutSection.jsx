import portrait from "../../assets/images/Profile/dr-eduardo-alves.jpg";
import { CtaButton } from "../../components/CtaButton/CtaButton.jsx";
import styles from "./AboutSection.module.css";

const values = [
  {
    title: "Missão",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque tempora veritatis fugiat libero, nisi corrupti quas, excepturi possimus magnam asperiores perferendis temporibus? Porro vero eius saepe cupiditate autem ad similique.",
  },
  {
    title: "Visão",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque tempora veritatis fugiat libero, nisi corrupti quas, excepturi possimus magnam asperiores perferendis temporibus? Porro vero eius saepe cupiditate autem ad similique.",
  },
  {
    title: "Valores",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque tempora veritatis fugiat libero, nisi corrupti quas, excepturi possimus magnam asperiores perferendis temporibus? Porro vero eius saepe cupiditate autem ad similique.",
  },
];

export const AboutSection = () => (
  <section className={styles.section} aria-labelledby="about-title">
    <h2 id="about-title" className={styles.sectionTitle}>
      Quem somos
    </h2>
    <div className={styles.container}>
      <img
        className={styles.portrait}
        src={portrait}
        alt="Eduardo Alves em seu escritório"
      />
      <div className={styles.content}>
        {values.map(({ title, text }) => (
          <div className={styles.value} key={title}>
            <h3 className={styles.valueTitle}>{title}</h3>
            <p className={styles.valueText}>{text}</p>
          </div>
        ))}
      </div>
    </div>
    <CtaButton content="Fale com um especialista" />
  </section>
);
