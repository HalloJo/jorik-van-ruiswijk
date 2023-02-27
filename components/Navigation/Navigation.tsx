import { useEffect, useState } from "react";
import Logo from "../Logo/Logo";
import NavigationList from "../NavigationList/NavigationList";
import Hamburger from "../Hamburger/Hamburger";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import Container from "../Container/Container";
import styles from "../Navigation/Navigation.module.scss";
import Link from "next/link";
import { LinkProps } from "../../data/Links";

const Navigation = ({
  navigation,
  social,
}: {
  navigation: LinkProps[];
  social: LinkProps[];
}) => {
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
          <Link href="/">
            <a>
              <span className={styles.navigation__span}>
                Jorik van Ruiswijk
              </span>
            </a>
          </Link>
        </div>
        <NavigationList navigation={navigation} />
        <Hamburger open={open} setOpen={setOpen} />
      </Container>
      <HamburgerMenu
        navigation={navigation}
        social={social}
        open={open}
        setOpen={setOpen}
      />
    </nav>
  );
};

export default Navigation;
