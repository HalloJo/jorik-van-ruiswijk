import styles from "../Hero/Hero.module.scss";
import { motion as m, Variants } from "framer-motion";
import * as Animation from "../../utils/animations";
import Container from "../Container/Container";
import Row from "../Row/Row";
import Column from "../Column/Column";
import Typography from "../Typography/Typography";
import HeroArt from "../HeroArt/HeroArt";

const Header = () => {
  return (
    <header className={styles.hero}>
      <Container className={styles.hero__container}>
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
              className={styles.hero__title}
              {...Animation.inViewChild}
            >
              Jorik van Ruiswijk.
            </Typography>
            <Typography
              variant="h1"
              as={m.div}
              {...Animation.inViewChild}
              className={styles.hero__subtitle}
            >
              Designer & Developer.
            </Typography>
            <Typography
              variant="body"
              as={m.div}
              {...Animation.inViewChild}
              className={styles.hero__summary}
            >
              Let me help you with identity, logo design, websites,
              applications, illustrations, icon design and more. Check out my
              work and let me know what you need.
            </Typography>
            <m.div {...Animation.arrows} className={styles.hero__arrows}>
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
