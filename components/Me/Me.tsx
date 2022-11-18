import styles from "../Me/Me.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { skills } from "../../data/Skills";
import { social } from "../../data/SocialData";
import Heading from "../Heading/Heading";
import { motion as m, Variants } from "framer-motion";
import SmallHeading from "../SmallHeading/SmallHeading";
import SocialButton from "../SocialButton/SocialButton";
import Skill from "../Skill/Skill";

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
      <div className={styles.me__container}>
        <div className={styles.me__introWrapper}>
          <div className={styles.me__intro}>
            <Heading heading="Me" />
            <div className={styles.me__synopsis}>
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
            </div>
          </div>
          <div className={styles.me__skills}>
            <SmallHeading label="Skills" />
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
          </div>
        </div>
        <div className={styles.me__socials}>
          <SmallHeading label="Find me here" />
          <m.div
            initial="hidden"
            whileInView="visible"
            variants={item}
            className={styles.me__icons}
          >
            {social.map((socialItem) => {
              return (
                <m.div variants={item} key={socialItem.label}>
                  <SocialButton {...socialItem} />
                </m.div>
              );
            })}
          </m.div>
        </div>
      </div>
    </section>
  );
};

export default Me;
