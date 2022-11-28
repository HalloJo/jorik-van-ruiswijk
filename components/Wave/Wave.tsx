import styles from "../Wave/Wave.module.scss";
import { motion as m, Variants } from "framer-motion";

type WaveProps = {
  color: string;
};

const Wave = ({ color }: WaveProps) => {
  const wave: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 3,
        delay: 2,
      },
    },
  };

  return (
    <m.svg
      className={styles.wave}
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2161.33 104.47"
      variants={wave}
      initial="hidden"
      whileInView="visible"
    >
      <path
        stroke={color}
        strokeWidth="3.5px"
        fill="none"
        d="M2159.83,1.5V102.97H1.5V1.5c89.93,0,89.93,56.69,179.86,56.69S271.28,1.5,361.21,1.5s89.93,56.69,179.86,56.69S631,1.5,720.93,1.5s89.93,56.69,179.87,56.69S990.73,1.5,1080.66,1.5s89.93,56.69,179.86,56.69S1350.45,1.5,1440.38,1.5s89.93,56.69,179.86,56.69S1710.17,1.5,1800.1,1.5s89.93,56.69,179.87,56.69S2069.9,1.5,2159.83,1.5Z"
      />
    </m.svg>
  );
};

export default Wave;
