import styles from "../Footer/Footer.module.scss";
import { motion as m, Variants } from "framer-motion";

const Footer = () => {
  const footer: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        duration: 0.5,
      },
    },
  };

  return (
    <footer className={styles.footer}>
      <m.div
        initial="hidden"
        whileInView="visible"
        variants={footer}
        className={styles.footer__container}
      >
        <m.p variants={footer} className={styles.footer__foot}>
          🦶🏻
        </m.p>
        <m.p variants={footer} className={styles.footer__message}>
          Have a great day!
        </m.p>
        <m.p variants={footer} className={styles.footer__name}>
          &copy; Jorik van Ruiswijk | 2022
        </m.p>
      </m.div>
    </footer>
  );
};

export default Footer;
