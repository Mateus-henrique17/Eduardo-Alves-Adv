import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.css";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // A Home e a página de atuação usam o header transparente sobre o hero.
  const hasTransparentHeader = ["/", "/atuacao"].includes(location.pathname);
  const headerClass = hasTransparentHeader
    ? styles.headerTransparent
    : styles.header;

  return (
    <header className={headerClass}>
      <button
        className={styles.menuButton}
        aria-label="Menu"
        aria-expanded={isOpen}
        aria-controls="primary-navigation"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✕" : "☰"}
      </button>
      <nav aria-label="Navegação principal">
        <ul
          id="primary-navigation"
          className={`${styles.navList} ${isOpen ? styles.open : ""}`}
        >
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>
              {" "}
              Home{" "}
            </Link>
          </li>
          <li>
            <Link to="/atuacao" onClick={() => setIsOpen(false)}>
              {" "}
              Atuação{" "}
            </Link>
          </li>
          <li>
            <Link to="/sobre" onClick={() => setIsOpen(false)}>
              {" "}
              Sobre{" "}
            </Link>
          </li>
          <li>
            <Link to="/artigos" onClick={() => setIsOpen(false)}>
              {" "}
              Artigos{" "}
            </Link>
          </li>
          <li>
            <Link to="/contato" onClick={() => setIsOpen(false)}>
              {" "}
              Contato{" "}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
