import { Link } from "react-router-dom";
import styles from "./CtaButton.module.css";

export const CtaButton = ({content}) => (
  <Link className={styles.button} to="/contato">
    {content}
  </Link>
);
