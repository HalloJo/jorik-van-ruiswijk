import styles from '../Me/Me.module.scss';
import { experiences, skills } from '../../data/Skills';
import { Social } from '../../data/Links';
import { motion as m, Variants } from 'framer-motion';
import * as Animation from '../../utils/animations';
import Skill from '../Skill/Skill';
import Container from '../Container/Container';
import Row from '../Row/Row';
import Column from '../Column/Column';
import * as Content from '../../data/Content';
import SocialLinks from '../SocialLinks/SocialLinks';
import Typography from '../Typography/Typography';
import Image from 'next/image';

const Me = () => {
  return (
    <section id="me" className={styles.me}>
      <Container className={styles.me__container}>
        <Row className={styles.me__infoRow}>
          <Column
            width="12 md:6"
            as={m.div}
            {...Animation.inViewContainer}
            className={styles.me__info}
          >
            <Typography
              variant="h2"
              as={m.div}
              {...Animation.inViewChild}
              className={styles.me__heading}
            >
              {Content.About.title}
            </Typography>
            <Typography
              variant="body"
              as={m.div}
              {...Animation.inViewChild}
              className={styles.me__text}
            >
              {Content.About.intro}
            </Typography>
            <SocialLinks socials={Social} className={styles.me__socials} />
          </Column>
          <Column
            offset="1"
            width="12 sm:12 md:5"
            className={styles.me__pictureColumn}
            as={m.div}
            {...Animation.inViewContainer}
          >
            <m.picture
              className={styles.me__picture}
              {...Animation.inViewChild}
            >
              <Image
                className={styles.me__image}
                src="/assets/jorik.jpg"
                alt="Jorik van Ruiswijk"
                loading="lazy"
                layout="fill"
                objectFit="cover"
              />
            </m.picture>
          </Column>
        </Row>
        <Row className={styles.me__skillRow}>
          <Column width="12 md:12" as={m.div} {...Animation.inViewContainer}>
            <Typography
              variant="h2"
              className={styles.me__skillTitle}
              as={m.div}
              {...Animation.inViewChild}
            >
              {Content.About.subTitle}
            </Typography>
            <m.div
              {...Animation.inViewContainer}
              className={styles.me__skillsGrid}
            >
              {skills.map((skill) => {
                return (
                  <m.div
                    className={styles.me__skillWrapper}
                    key={skill.skillTitle}
                    {...Animation.inViewChild}
                  >
                    <Skill {...skill} />
                  </m.div>
                );
              })}
            </m.div>
            <m.div {...Animation.inViewContainer}>
              <Typography
                className={styles.me__experienceTitle}
                as={m.div}
                {...Animation.inViewChild}
              >
                {Content.About.moustache}
              </Typography>
              <m.div
                className={styles.me__skillsGrid}
                {...Animation.inViewContainer}
              >
                {experiences.map((skill) => {
                  return (
                    <m.div
                      className={styles.me__skillWrapper}
                      key={skill.skillTitle}
                      {...Animation.inViewChild}
                    >
                      <Skill {...skill} />
                    </m.div>
                  );
                })}
              </m.div>
            </m.div>
          </Column>
        </Row>
      </Container>
    </section>
  );
};

export default Me;
