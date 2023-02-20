import Logo from "../Logo/Logo";
import NavigationList from "../NavigationList/NavigationList";
import { navigation } from "../../data/NavigationData";
import Hamburger from "../Hamburger/Hamburger";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import { useEffect, useState } from "react";
import { motion as m, Variants } from "framer-motion";
import Container from "../Container/Container";
import styles from "../Navigation/Navigation.module.scss";

const Navigation = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const scrolledOnPage = () => {
      window.scrollY >= 90 ? setScrolled(true) : setScrolled(false);
    };

    window.addEventListener("scroll", scrolledOnPage);
  });

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
      className={`${styles.navigation} ${scrolled && styles.scrolled}`}
    >
      <Container>
        <div className={styles.navigation__logoWrapper}>
          <Logo />
        </div>
        <NavigationList navigation={navigation} />
        {/* <Hamburger open={open} setOpen={setOpen} /> */}
        {/* <HamburgerMenu navigation={navigation} open={open} setOpen={setOpen} /> */}
      </Container>
    </m.nav>
  );
};

export default Navigation;
