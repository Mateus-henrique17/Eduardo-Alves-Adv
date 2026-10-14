import logo from "../../assets/images/logo.svg";
import { StatCard } from "../../components/statCard/StatCard.jsx";
import { articles } from "../../data/articles.js";
import styles from "./ArticlesPage.module.css";

export const ArticlesPage = () => (
  <div className={styles.pageWrapper}>
    <section
      className={styles.hero}
      aria-label="Artigos Eduardo Alves Advocacia"
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
      className={styles.articlesSection}
      aria-labelledby="articles-title"
    >
      <p className={styles.eyebrow}>Eduardo Alves Advocacia</p>
      <h1 id="articles-title" className={styles.title}>
        Artigos e informações jurídicas
      </h1>
      <div className={styles.articlesGrid}>
        {articles.map((article) => (
          <StatCard
            key={article.title}
            variant="article"
            label={article.title}
            icon={article.photo}
            info={article.content}
            details={{
              fullTitle: article.title,
              description: article.content,
              photo: article.photo,
            }}
          />
        ))}
      </div>
    </section>
  </div>
);
