import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import styles from "./Footer.module.css";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={`${styles.footerColumn} ${styles.brandInfo}`}>
          <div className={styles.footerLogo}></div>
          <p>
            Conectando soluções integradas e transformando o conhecimento jurídico em resultados estratégicos.
          </p>
        </div>

        <div className={styles.footerColumn}>
          <h3 className={styles.columnTitle}>Onde Estamos</h3>
          <address className={styles.footerAddress}>
            Av. José André Avalino, 586 - Centro <br />
            Campestre - MG, 37730-000 <br />
            <a href="mailto:contato@seusite.com" className={styles.footerLink}>
              contato@seusite.com
            </a>
          </address>
        </div>

        <div className={styles.footerColumn}>
          <h3 className={styles.columnTitle}>Canais de Contato</h3>
          <div className={styles.socialIcons}>
            <a
              href="https://wa.me"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className={styles.socialLink}
            >
              <FaWhatsapp />
              <span>WhatsApp</span>
            </a>
            <a
              href="mailto:contato@seusite.com"
              aria-label="E-mail"
              className={styles.socialLink}
            >
              <FaEnvelope />
              <span>E-mail</span>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className={styles.socialLink}
            >
              <FaInstagram />
              <span>Instagram</span>
            </a>
            
           
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>
          &copy; {currentYear} Eduardo Alves Advogado. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};
