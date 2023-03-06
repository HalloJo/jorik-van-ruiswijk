import styles from "../Me/Me.module.scss";
import cn from "clsx";
import { experiences, skills } from "../../data/Skills";
import { Social } from "../../data/Links";
import Heading from "../Heading/Heading";
import { motion as m, Variants } from "framer-motion";
import Skill from "../Skill/Skill";
import Container from "../Container/Container";
import Row from "../Row/Row";
import Column from "../Column/Column";
import { Personal } from "../../data/Personal";
import SocialLinks from "../SocialLinks/SocialLinks";
import SmallHeading from "../SmallHeading/SmallHeading";

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
          <Column offset="1 sm:0" width="12 md:5" className={styles.me__info}>
            <Heading heading="About me" className={styles.me__heading} />
            <m.p
              variants={item}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={styles.me__text}
            >
              {Personal.synopsis}
            </m.p>
            <SocialLinks socials={Social} className={styles.me__socials} />
          </Column>
          <Column
            offset="1"
            width="12 sm:12 md:4"
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
          <Column width="12 md:12">
            <Heading heading="Skills" className={styles.me__skillTitle} />
            <m.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
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
            <div>
              <SmallHeading
                label={"And experience with.."}
                className={styles.me__experienceTitle}
              />
              <m.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={item}
                className={styles.me__skillsGrid}
              >
                {experiences.map((skill) => {
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
            </div>
          </Column>
        </Row>
      </Container>
    </section>
  );
};

export default Me;
