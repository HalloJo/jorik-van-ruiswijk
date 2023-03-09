import { LinkProps, Navigation, Social } from "../../data/Links";
import Container from "../Container/Container";
import styles from "../HamburgerMenu/HamburgerMenu.module.scss";
import { motion as m, Variants } from "framer-motion";
import * as Animation from "../../utils/animations";
import Marquee from "../Marquee/Marquee";
import SocialLinks from "../SocialLinks/SocialLinks";
import cn from "clsx";
import Typography from "../Typography/Typography";

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
        <m.ul
          className={styles.hamburgerMenu__list}
          {...Animation.inViewContainer}
        >
          {navigation.map((item) => {
            const { label, href } = item;
            return (
              <m.a
                className={styles.hamburgerMenu__link}
                key={label}
                href={href}
                onClick={() => setOpen(!open)}
                {...Animation.inViewChild}
              >
                <li className={styles.hamburgerMenu__label}>
                  <Typography variant="h2">{label}</Typography>
                </li>
              </m.a>
            );
          })}
        </m.ul>
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
