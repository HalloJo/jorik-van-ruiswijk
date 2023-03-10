import { useEffect, useState } from "react";
import Logo from "../Logo/Logo";
import * as Content from "../../data/Content";
import NavigationList from "../NavigationList/NavigationList";
import Hamburger from "../Hamburger/Hamburger";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import Container from "../Container/Container";
import styles from "../Navigation/Navigation.module.scss";
import Link from "next/link";
import { LinkProps } from "../../data/Links";
import useScrollDirection from "../../utils/use-scroll-direction";
import cn from "clsx";
import Typography from "../Typography/Typography";

const Navigation = ({
  navigation,
  social,
}: {
  navigation: LinkProps[];
  social: LinkProps[];
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const scrollDirection = useScrollDirection();

  return (
    <nav
      className={cn(styles.navigation, {
        [styles.navigation_isHidden]: scrollDirection === "down",
      })}
    >
      <Container className={styles.container}>
        <div className={styles.navigation__logoWrapper}>
          <Logo />
          <Link href="/">
            <a>
              <Typography
                variant="body"
                size="small"
                className={styles.navigation__span}
              >
                {Content.Hero.title}
              </Typography>
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
