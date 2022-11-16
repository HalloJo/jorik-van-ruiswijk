import { type } from "os";
import styles from "../Button/Button.module.scss";
import { motion as m } from "framer-motion";

type ButtonProps = {
  label: string;
  href?: string;
  style?: string;
  type?: "button" | "submit" | "reset";
};

const Button = ({ label, href, style, type }: ButtonProps) => {
  return (
    <a href={href} className={styles.link}>
      <button type={type} className={`${styles.button} ${styles[style]}`}>
        {label}
      </button>
    </a>
  );
};

export default Button;
