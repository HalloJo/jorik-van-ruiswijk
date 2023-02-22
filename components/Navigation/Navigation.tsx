import Logo from "../Logo/Logo";
import NavigationList from "../NavigationList/NavigationList";
import { navigation } from "../../data/NavigationData";
import Hamburger from "../Hamburger/Hamburger";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import { useEffect, useState } from "react";
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

  return (
    <nav className={`${styles.navigation} ${scrolled && styles.scrolled}`}>
      <Container className={styles.container}>
        <div className={styles.navigation__logoWrapper}>
          <Logo />
          <span className={styles.navigation__span}>Jorik van Ruiswijk</span>
        </div>
        <NavigationList navigation={navigation} />
        <Hamburger open={open} setOpen={setOpen} />
      </Container>
      <HamburgerMenu navigation={navigation} open={open} setOpen={setOpen} />
    </nav>
  );
};

export default Navigation;
