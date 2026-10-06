import { Link } from "react-router-dom";
import styles from "./ComingSoon.module.css";

export const ComingSoon = ({
  title,
  description = "Esta página está em construção e estará disponível em breve.",
}) => (
  <section className={styles.page}>
    <div className={styles.content}>
      <p className={styles.eyebrow}>Eduardo Alves Advogado</p>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
      <Link className={styles.homeLink} to="/">
        Voltar ao início
      </Link>
    </div>
  </section>
);
