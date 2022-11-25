import { useState } from "react";
import HeroArt from "../HeroArt/HeroArt";
import Button from "../Button/Button";
import styles from "../Header/Header.module.scss";
import { motion as m, Variants } from "framer-motion";
import LetterSpan from "../LetterSpan/LetterSpan";

const Header = () => {
  const item: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.3,
        // delayChildren: 1.5,
        duration: 0.5,
        delay: 0.5,
      },
    },
  };
  const scrollArrow: Variants = {
    hidden: { y: -10, rotate: 90 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 2,
      },
    },
    end: {
      y: -10,
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 1.5,
      },
    },
  };

  const name = "Jorik".split("");

  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <HeroArt />
      </div>
      <div className={styles.header__callToActions}>
        <m.div
          initial="hidden"
          whileInView="visible"
          variants={item}
          className={styles.header__contentText}
        >
          <m.div variants={item}>
            {name.map((letter, index) => {
              return <LetterSpan key={index}>{letter}</LetterSpan>;
            })}
          </m.div>
          <m.p variants={item} className={styles.header__subTitle}>
            Design & Development
          </m.p>
        </m.div>
        <m.picture
          variants={scrollArrow}
          // initial="hidden"
          // whileInView="visible"
          animate={["hidden", "visible", "end"]}
          className={styles.header__scrollIcon}
        >
          <img
            src="/assets/skills/arrow-right-solid-orange.svg"
            alt="scroll down arrow"
          />
        </m.picture>
        {/* <m.div variants={item} className={styles.header__buttons}>
          <Button label={"See work"} href={"#work"} style={"orange"} />
          <Button label={"See me"} href={"#me"} style={"green"} />
        </m.div> */}
      </div>
    </header>
  );
};

export default Header;
