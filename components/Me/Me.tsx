import styles from "../Me/Me.module.scss";
import { skills } from "../../data/Skills";
import { Social } from "../../data/Links";
import Heading from "../Heading/Heading";
import { motion as m, Variants } from "framer-motion";
import SmallHeading from "../SmallHeading/SmallHeading";
import Skill from "../Skill/Skill";
import Container from "../Container/Container";
import Row from "../Row/Row";
import Column from "../Column/Column";
import SocialButton from "../SocialButton/SocialButton";

const Me = () => {
  const item: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        // delayChildren: 1,
        duration: 0.5,
      },
    },
  };

  return (
    <section id="me" className={styles.me}>
      <Container className={styles.me__container}>
        <Row className={styles.me__infoRow}>
          <Column offset="1" width="12 lg:5" className={styles.me__info}>
            <Heading heading="About me" className={styles.me__heading} />
            <m.p
              variants={item}
              initial="hidden"
              whileInView="visible"
              className={styles.me__text}
            >
              Jorik van Ruiswijk. 31 years of age. Based in the Netherlands.
              Self-taught front-end developer. Graduated graphic designer and
              illustrator. Enjoys designing and building interactive websites.
              With or without animations. Has a keen eye for details. Always
              trying to improve his skillset. Let him help you.
            </m.p>
            <ul className={styles.me__socials}>
              {Social.map((socialItem, index) => {
                const { label, href } = socialItem;
                return (
                  <li className={styles.me__socialItem} key={index}>
                    <a href={href}>{label}</a>
                  </li>
                );
              })}
            </ul>
          </Column>
          <Column
            offset="1"
            width="12 lg:4"
            className={styles.me__pictureColumn}
          >
            <picture className={styles.me__picture}>
              <img
                className={styles.me__image}
                src="./assets/jorik.jpg"
                alt="Jorik van Ruiswijk"
              />
            </picture>
          </Column>
        </Row>

        <Row className={styles.me__skillRow}>
          <Column offset="1" width="12 lg:10">
            <Heading heading="Skills" className={styles.me__skillTitle} />
            <m.div
              initial="hidden"
              whileInView="visible"
              variants={item}
              className={styles.me__skillsGrid}
            >
              {skills.map((skill) => {
                return (
                  <m.div
                    variants={item}
                    className={styles.me__skillWrapper}
                    key={skill.skillTitle}
                  >
                    <Skill {...skill} />
                  </m.div>
                );
              })}
            </m.div>
          </Column>
        </Row>
      </Container>
    </section>
  );
};

export default Me;
