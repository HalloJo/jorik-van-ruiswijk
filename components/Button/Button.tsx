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
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2,
        delay: 1,
        type: "spring",
        damping: 10,
        mass: 0.75,
        stiffness: 100,
      },
    },
    hover: {
      y: -10,
      transition: {
        delay: 0,
        duration: 0.5,
        type: "spring",
        damping: 10,
        mass: 0.75,
        stiffness: 100,
      },
    },
    exit: {
      y: 10,
      transition: {
        duration: 0.5,
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
        variants={buttonAnimation}
        initial="hidden"
        whileInView="visible"
        whileHover="hover"
        exit="exit"
        type={type}
        className={`${styles.button} ${styles[style]}`}
      >
        {label}
      </m.button>
    </a>
  );
};

export default Button;
