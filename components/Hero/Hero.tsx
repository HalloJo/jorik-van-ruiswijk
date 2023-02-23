import styles from "../Hero/Hero.module.scss";
import { motion as m, Variants } from "framer-motion";
import Container from "../Container/Container";
import Row from "../Row/Row";
import Column from "../Column/Column";
import HeroIcon from "../HeroIcon/HeroIcon";

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
    <header className={styles.header}>
      <Container className={styles.header__container}>
        <m.div initial="hidden" whileInView="visible" variants={item}>
          <Row>
            <Column className={styles.header__text} width="12 md:8">
              <h1 className={styles.header__title}>Design & Development.</h1>
              <h2 className={styles.header__subtitle}>Just what you need.</h2>
            </Column>
            <Column className={styles.header__image} width="3 md:4">
              <HeroIcon />
            </Column>
          </Row>
        </m.div>
      </Container>
    </header>
  );
};

export default Header;
