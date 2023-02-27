import { LinkProps, Navigation, Social } from "../../data/Links";
import Container from "../Container/Container";
import styles from "../HamburgerMenu/HamburgerMenu.module.scss";

type HamburgerMenuProps = {
  navigation: LinkProps[];
  social: LinkProps[];
  open: boolean;
  setOpen: (value: boolean) => void;
};

const HamburgerMenu = ({ navigation, open, setOpen }: HamburgerMenuProps) => {
  return (
    <nav className={`${styles.hamburgerMenu} ${open ? styles.open : null}`}>
      <Container className={styles.hamburgerMenu__container}>
        <ul className={styles.hamburgerMenu__list}>
          {navigation.map((item) => {
            const { label, href } = item;
            return (
              <a
                className={styles.hamburgerMenu__link}
                key={label}
                href={href}
                onClick={() => setOpen(!open)}
              >
                <li className={styles.hamburgerMenu__label}>{label}</li>
              </a>
            );
          })}
        </ul>
        <ul className={styles.hamburgerMenu__socials}>
          {Social.map((socialItem, index) => {
            const { label, href } = socialItem;
            return (
              <li className={styles.hamburgerMenu__socialItem} key={index}>
                <a href={href} target="_blank" rel="noreferrer">
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
      </Container>
    </nav>
  );
};

export default HamburgerMenu;
