import styles from "../Hero/Hero.module.scss";
import { motion as m, Variants } from "framer-motion";
import Container from "../Container/Container";
import Row from "../Row/Row";
import Column from "../Column/Column";
import HeroIcon from "../HeroIcon/HeroIcon";
import Button from "../Button/Button";

const Header = () => {
  const item: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.3,
        duration: 0.5,
        delay: 0.5,
      },
    },
  };

  return (
    <header className={styles.hero}>
      <Container className={styles.hero__container}>
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={item}
        >
          <Row>
            <Column className={styles.hero__text} width="12 md:10">
              <h1 className={styles.hero__title}>Jorik van Ruiswijk.</h1>
              <h2 className={styles.hero__subtitle}>Designer & Developer.</h2>
              <p className={styles.hero__summary}>
                Let me help you with identity, logo design, websites,
                applications, illustrations, icon design and more. Check out my
                work and let me know what you need.
              </p>
              <div className={styles.hero__arrows}>
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
              </div>
            </Column>
          </Row>
        </m.div>
      </Container>
    </header>
  );
};

export default Header;
