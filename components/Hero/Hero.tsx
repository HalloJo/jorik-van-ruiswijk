import styles from "../Hero/Hero.module.scss";
import { motion as m, Variants } from "framer-motion";
import Container from "../Container/Container";
import Row from "../Row/Row";
import Column from "../Column/Column";

const Header = () => {
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        staggerDirection: 1,
        // delayChildren: 1,
        ease: "easeIn",
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const arrows: Variants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 1,
      },
    },
  };

  return (
    <header className={styles.hero}>
      <Container className={styles.hero__container}>
        <Row>
          <Column
            as={m.div}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={styles.hero__text}
            width="12 md:10"
          >
            <m.h1 variants={item} className={styles.hero__title}>
              Jorik van Ruiswijk.
            </m.h1>
            <m.h2 variants={item} className={styles.hero__subtitle}>
              Designer & Developer.
            </m.h2>
            <m.p variants={item} className={styles.hero__summary}>
              Let me help you with identity, logo design, websites,
              applications, illustrations, icon design and more. Check out my
              work and let me know what you need.
            </m.p>
            <m.div variants={arrows} className={styles.hero__arrows}>
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
