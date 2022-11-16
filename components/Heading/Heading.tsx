import styles from "../Heading/Heading.module.scss";
import { motion as m, Variants } from "framer-motion";

type HeadingProps = {
  heading: string;
  exception?: string;
};

const Heading = ({ heading, exception }: HeadingProps) => {
  const headingAnimation: Variants = {
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
