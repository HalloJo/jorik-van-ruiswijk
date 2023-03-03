import { LinkProps, Navigation, Social } from "../../data/Links";
import Container from "../Container/Container";
import styles from "../HamburgerMenu/HamburgerMenu.module.scss";
import Marquee from "../Marquee/Marquee";
import SocialLinks from "../SocialLinks/SocialLinks";
import cn from "clsx";

type HamburgerMenuProps = {
  navigation: LinkProps[];
  social: LinkProps[];
  open: boolean;
  setOpen: (value: boolean) => void;
};

const HamburgerMenu = ({ navigation, open, setOpen }: HamburgerMenuProps) => {
  return (
    <nav className={cn(styles.hamburgerMenu, open && styles.open)}>
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
        <SocialLinks
          isStacked
          socials={Social}
          className={styles.hamburgerMenu__socials}
        />
      </Container>
      <Marquee item={"Found what you're looking for? 🔎"} />
    </nav>
  );
};

export default HamburgerMenu;
