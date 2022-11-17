import Logo from "../Logo/Logo";
import NavigationList from "../NavigationList/NavigationList";
import { navigation } from "../../data/NavigationData";
import Hamburger from "../Hamburger/Hamburger";
import styles from "../Navigation/Navigation.module.scss";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import { useState } from "react";
import { motion as m, Variants } from "framer-motion";

const Navigation = () => {
  const [open, setOpen] = useState<boolean>(false);

  const navigationAnimation: Variants = {
    hidden: { translateY: -100 },
    visible: {
      translateY: 0,
      transition: {
        duration: 0.6,
        delay: 2,
        type: "spring",
        damping: 10,
        mass: 0.75,
        stiffness: 100,
      },
    },
  };

  return (
    <m.nav
      initial="hidden"
      animate="visible"
      variants={navigationAnimation}
      className={styles.navigation}
    >
      <div className={styles.navigation__logoWrapper}>
        <Logo />
      </div>
      <Hamburger open={open} setOpen={setOpen} />
      <NavigationList navigation={navigation} />
      <HamburgerMenu navigation={navigation} open={open} setOpen={setOpen} />
    </m.nav>
  );
};

export default Navigation;
