import Logo from "../Logo/Logo";
import NavigationList from "../NavigationList/NavigationList";
import { navigation } from "../../data/NavigationData";
import Hamburger from "../Hamburger/Hamburger";
import styles from "../Navigation/Navigation.module.scss";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import { useState } from "react";

const Navigation = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <nav className={styles.navigation}>
      <div className={styles.navigation__logoWrapper}>
        <Logo />
      </div>
      <Hamburger open={open} setOpen={setOpen} />
      <NavigationList navigation={navigation} />
      <HamburgerMenu navigation={navigation} open={open} setOpen={setOpen} />
    </nav>
  );
};

export default Navigation;
