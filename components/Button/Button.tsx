import { type } from "os";
import styles from "../Button/Button.module.scss";
import { motion as m, Variants } from "framer-motion";

type ButtonProps = {
  label: string;
  href?: string;
  style?: string;
  type?: "button" | "submit" | "reset";
};

const Button = ({ label, href, style, type }: ButtonProps) => {
  const buttonAnimation: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <a href={href} className={styles.link}>
      <m.button
        variants={buttonAnimation}
        initial="hidden"
        whileInView="visible"
        type={type}
        className={`${styles.button} ${styles[style]}`}
      >
        {label}
      </m.button>
    </a>
  );
};

export default Button;
