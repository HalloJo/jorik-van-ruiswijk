import styles from "../Me/Me.module.scss";
import cn from "clsx";
import { experiences, skills } from "../../data/Skills";
import { Social } from "../../data/Links";
import Heading from "../Heading/Heading";
import { motion as m, Variants } from "framer-motion";
import * as Animation from "../../utils/animations";
import Skill from "../Skill/Skill";
import Container from "../Container/Container";
import Row from "../Row/Row";
import Column from "../Column/Column";
import { Personal } from "../../data/Personal";
import SocialLinks from "../SocialLinks/SocialLinks";
import SmallHeading from "../SmallHeading/SmallHeading";
import Typography from "../Typography/Typography";

const Me = () => {
  return (
    <section id="me" className={styles.me}>
      <Container className={styles.me__container}>
        <Row className={styles.me__infoRow}>
          <Column width="12 md:6" className={styles.me__info}>
            <Typography variant="h2" className={styles.me__heading}>
              About me
            </Typography>
            <Typography
              variant="body"
              as={m.div}
              {...Animation.inViewChild}
              className={styles.me__text}
            >
              {Personal.synopsis}
            </Typography>
            <SocialLinks socials={Social} className={styles.me__socials} />
          </Column>
          <Column
            offset="1"
            width="12 sm:12 md:5"
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
            <Typography variant="h2" className={styles.me__skillTitle}>
              Skills
            </Typography>
            <m.div className={styles.me__skillsGrid}>
              {skills.map((skill) => {
                return (
                  <m.div
                    className={styles.me__skillWrapper}
                    key={skill.skillTitle}
                  >
                    <Skill {...skill} />
                  </m.div>
                );
              })}
            </m.div>
            <div>
              <Typography className={styles.me__experienceTitle}>
                And experience with..
              </Typography>
              <m.div className={styles.me__skillsGrid}>
                {experiences.map((skill) => {
                  return (
                    <m.div
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
