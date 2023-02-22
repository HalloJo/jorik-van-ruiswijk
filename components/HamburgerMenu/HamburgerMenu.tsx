import { useRef } from "react";
import { Navigation } from "../../data/NavigationData";
import { social } from "../../data/SocialData";
import CloseButton from "../CloseButton/CloseButton";
import Container from "../Container/Container";
import styles from "../HamburgerMenu/HamburgerMenu.module.scss";
import Wave from "../Wave/Wave";

type HamburgerMenuProps = {
  navigation: Navigation;
  open: boolean;
  setOpen: (value: boolean) => void;
};

const HamburgerMenu = ({ navigation, open, setOpen }: HamburgerMenuProps) => {
  return (
    <nav className={`${styles.hamburgerMenu} ${open ? styles.open : null}`}>
      <Container className={styles.hamburgerMenu__container}>
        <ul className={styles.hamburgerMenu__list}>
          {navigation.map((item) => {
            const { label, id } = item;
            return (
              <a
                className={styles.hamburgerMenu__link}
                key={label}
                href={id}
                onClick={() => setOpen(!open)}
              >
                <li className={styles.hamburgerMenu__label}>{label}</li>
              </a>
            );
          })}
        </ul>
        <ul className={styles.hamburgerMenu__socials}>
          {social.map((socialItem, index) => {
            const { label, href } = socialItem;
            return (
              <li className={styles.hamburgerMenu__socialItem} key={index}>
                <a href={href}>{label}</a>
              </li>
            );
          })}
        </ul>
      </Container>
    </nav>
  );
};

export default HamburgerMenu;
