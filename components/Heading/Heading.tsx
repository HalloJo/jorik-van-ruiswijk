import { motion as m, Variants } from "framer-motion";
import cn from "clsx";
import styles from "../Heading/Heading.module.scss";

type HeadingProps = {
  heading: string;
  className?: string;
};

const Heading = ({ heading, className }: HeadingProps) => {
  const headingAnimation: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
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
      className={cn(styles.heading, className)}
    >
      {heading}
    </m.h2>
  );
};

export default Heading;
