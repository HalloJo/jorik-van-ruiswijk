import styles from "../SmallHeading/SmallHeading.module.scss";
import { motion as m, Variants } from "framer-motion";

type SmallHeadingProps = {
  label: string;
};

const SmallHeading = ({ label }: SmallHeadingProps) => {
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
    <m.h3
      variants={headingAnimation}
      initial="hidden"
      whileInView="visible"
      className={styles.smallHeading}
    >
      {label}
    </m.h3>
  );
};
export default SmallHeading;
