import styles from "../SmallHeading/SmallHeading.module.scss";
import cn from "clsx";
import { motion as m, Variants } from "framer-motion";

type SmallHeadingProps = {
  label: string;
  className?: string;
};

const SmallHeading = ({ label, className }: SmallHeadingProps) => {
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
    <m.h3
      variants={headingAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={cn(styles.smallHeading, className)}
    >
      {label}
    </m.h3>
  );
};
export default SmallHeading;
