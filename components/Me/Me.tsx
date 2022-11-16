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

const Me = () => {
  const item: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        // delayChildren: 1,
        duration: 1,
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
                illustrator. Loves his kids, family and football. Helps people
                with their design or development problems.
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
                    key={skill.skill}
                  >
                    <img
                      className={styles.me__skillIcon}
                      src={skill.icon}
                      alt=""
                    />
                    <p className={styles.me__skillTitle}>{skill.skill}</p>
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
                <m.a
                  variants={item}
                  key={socialItem.label}
                  className={styles.me__socialIcon}
                  href={socialItem.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className={styles.me__socialIconImage}
                    src={socialItem.icon}
                    alt=""
                  />
                  <p className={styles.me__socialIconTitle}>
                    {socialItem.label}
                  </p>
                </m.a>
              );
            })}

            {/* <a
              className={styles.me__socialIcon}
              href="https://www.linkedin.com/in/jorikvanruiswijk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className={styles.me__fontAwesomeIcon}
                icon={faLinkedin}
              />
              <p className={styles.me__socialIconTitle}>LinkedIn</p>
            </a>
            <a
              className={styles.me__socialIcon}
              href="https://www.instagram.com/jorik.van.ruiswijk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className={styles.me__fontAwesomeIcon}
                icon={faInstagram}
              />
              <p className={styles.me__socialIconTitle}>Instagram</p>
            </a>
            <a
              className={styles.me__socialIcon}
              href="https://github.com/HalloJo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className={styles.me__fontAwesomeIcon}
                icon={faGithub}
              />
              <p className={styles.me__socialIconTitle}>GitHub</p>
            </a> */}
          </m.div>
        </div>
      </div>
    </section>
  );
};

export default Me;
