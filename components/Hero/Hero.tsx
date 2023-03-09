import styles from "../Hero/Hero.module.scss";
import { motion as m, Variants } from "framer-motion";
import * as Animation from "../../utils/animations";
import Container from "../Container/Container";
import Row from "../Row/Row";
import Column from "../Column/Column";

const Header = () => {
  return (
    <header className={styles.hero}>
      <Container className={styles.hero__container}>
        <Row>
          <Column
            as={m.div}
            {...Animation.inViewContainer}
            className={styles.hero__text}
            width="12 md:10"
          >
            <m.h1 {...Animation.inViewChild} className={styles.hero__title}>
              Jorik van Ruiswijk.
            </m.h1>
            <m.h2 {...Animation.inViewChild} className={styles.hero__subtitle}>
              Designer & Developer.
            </m.h2>
            <m.p {...Animation.inViewChild} className={styles.hero__summary}>
              Let me help you with identity, logo design, websites,
              applications, illustrations, icon design and more. Check out my
              work and let me know what you need.
            </m.p>
            <m.div {...Animation.arrows} className={styles.hero__arrows}>
              <p className={styles.hero__arrow}>&darr;</p>
              <p className={styles.hero__arrow}>&darr;</p>
              <p className={styles.hero__arrow}>&darr;</p>
              <p className={styles.hero__arrow}>&darr;</p>
              <p className={styles.hero__arrow}>&darr;</p>
              <p className={styles.hero__arrow}>&darr;</p>
              <p className={styles.hero__arrow}>&darr;</p>
              <p className={styles.hero__arrow}>&darr;</p>
              <p className={styles.hero__arrow}>&darr;</p>
              <p className={styles.hero__arrow}>&darr;</p>
              <p className={styles.hero__arrow}>&darr;</p>
              <p className={styles.hero__arrow}>&darr;</p>
            </m.div>
          </Column>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
