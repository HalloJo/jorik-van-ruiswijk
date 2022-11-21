import styles from "../Wave/Wave.module.scss";
import { motion as m, Variants } from "framer-motion";

const Wave = ({ color }) => {
  const wave: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 3,
        delay: 1,
      },
    },
  };

  return (
    <m.svg
      className={styles.wave}
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 927.4 43.89"
      variants={wave}
      initial="hidden"
      whileInView="visible"
    >
      <path
        fill={color}
        d="M811.48,20.01c-57.96,0-57.96-20.01-115.93-20.01s-57.96,20.01-115.92,20.01S521.66,0,463.7,0s-57.96,20.01-115.93,20.01S289.81,0,231.85,0s-57.96,20.01-115.92,20.01S57.96,0,0,0V43.89H927.4V0c-57.96,0-57.96,20.01-115.93,20.01Z"
      />
    </m.svg>
  );
};

export default Wave;
