import { useRef } from "react";
import { Navigation } from "../../data/NavigationData";
import CloseButton from "../CloseButton/CloseButton";
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
      <CloseButton open={open} setOpen={setOpen} />
      <Wave color="#F9F2E9" />
    </nav>
  );
};

export default HamburgerMenu;
