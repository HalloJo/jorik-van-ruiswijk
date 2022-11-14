import styles from "../Heading/Heading.module.scss";
import { motion as m } from "framer-motion";

const Heading = ({ heading, exception }) => {
  const headingAnimation = {
    hidden: {
      opacity: 0,
      translateY: 40,
    },
    visible: {
      opacity: 1,
      translateY: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <m.h2
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      variants={headingAnimation}
      className={`${styles.heading} ${styles[exception]}`}
    >
      {heading}
    </m.h2>
  );
};

export default Heading;
