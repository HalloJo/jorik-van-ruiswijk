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
  const buttonAnimation = {
    hidden: {
      opacity: 0,
      translateY: 40,
    },
    visible: {
      opacity: 1,
      translateY: 0,
      transition: {
        delay: 0.5,
        type: "spring",
        damping: 10,
        mass: 0.75,
        stiffness: 100,
      },
    },
  };

  return (
    <a href={href} className={styles.link}>
      <m.button
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={buttonAnimation}
        type={type}
        className={`${styles.button} ${styles[style]}`}
      >
        {label}
      </m.button>
    </a>
  );
};

export default Button;
