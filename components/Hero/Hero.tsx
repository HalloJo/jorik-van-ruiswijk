import styles from "../Hero/Hero.module.scss";
import { motion as m, useScroll, useTransform, Variants } from "framer-motion";
import * as Animation from "../../utils/animations";
import * as Content from "../../data/Content";
import Container from "../Container/Container";
import Row from "../Row/Row";
import Column from "../Column/Column";
import Typography from "../Typography/Typography";
import HeroArt from "../HeroArt/HeroArt";
import { useRef } from "react";

const Header = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["center center", "end center"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <header className={styles.hero}>
      <Container className={styles.hero__container} ref={heroRef}>
        <Row>
          <Column
            as={m.div}
            {...Animation.inViewContainer}
            className={styles.hero__text}
            width="12 md:8"
          >
            <Typography
              variant="h1"
              as={m.div}
              style={{ x, opacity }}
              className={styles.hero__title}
              {...Animation.inViewChild}
            >
              {Content.Hero.title}
            </Typography>
            <Typography
              variant="h1"
              as={m.div}
              style={{ x, opacity }}
              {...Animation.inViewChild}
              className={styles.hero__subtitle}
            >
              {Content.Hero.subTitle}
            </Typography>
            <Typography
              variant="body"
              as={m.div}
              style={{ x, opacity }}
              {...Animation.inViewChild}
              className={styles.hero__summary}
            >
              {Content.Hero.intro}
            </Typography>
            <m.div
              {...Animation.arrows}
              style={{ x, opacity }}
              className={styles.hero__arrows}
            >
              <Typography variant="body" className={styles.hero__arrow}>
                &darr;
              </Typography>
              <Typography variant="body" className={styles.hero__arrow}>
                &darr;
              </Typography>
              <Typography variant="body" className={styles.hero__arrow}>
                &darr;
              </Typography>
              <Typography variant="body" className={styles.hero__arrow}>
                &darr;
              </Typography>
              <Typography variant="body" className={styles.hero__arrow}>
                &darr;
              </Typography>
              <Typography variant="body" className={styles.hero__arrow}>
                &darr;
              </Typography>
              <Typography variant="body" className={styles.hero__arrow}>
                &darr;
              </Typography>
              <Typography variant="body" className={styles.hero__arrow}>
                &darr;
              </Typography>
              <Typography variant="body" className={styles.hero__arrow}>
                &darr;
              </Typography>
              <Typography variant="body" className={styles.hero__arrow}>
                &darr;
              </Typography>
            </m.div>
          </Column>
          <Column width="5 md:4" className={styles.hero__art}>
            <HeroArt />
          </Column>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
