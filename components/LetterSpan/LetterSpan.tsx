import styles from "../LetterSpan/LetterSpan.module.scss";
import { motion as m, Variants } from "framer-motion";

const LetterSpan = ({ children }) => {
  return (
    <m.span whileHover={{ y: -10 }} className={styles.letterSpan}>
      {children}
    </m.span>
  );
};

export default LetterSpan;
