import { Navigation } from "../../data/NavigationData";
import styles from "../NavigationList/NavigationList.module.scss";
import { motion as m, Variants } from "framer-motion";

const NavigationList = ({ navigation }) => {
  const navItem: Variants = {
    hover: {
      y: -5,
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
    <ul className={styles.navigationList}>
      {navigation.map((item) => {
        const { label, id } = item;

        return (
          <m.a
            variants={navItem}
            whileHover="hover"
            className={styles.navigationList__item}
            key={label}
            href={id}
          >
            <li>{label}</li>
          </m.a>
        );
      })}
    </ul>
  );
};

export default NavigationList;
