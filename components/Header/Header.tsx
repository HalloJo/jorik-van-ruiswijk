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
          {/* <m.h1 variants={item} className={styles.header__name}>
            Jorik
          </m.h1> */}
          <m.p variants={item} className={styles.header__subTitle}>
            Design & Development
          </m.p>
        </m.div>
        <div className={styles.header__buttons}>
          <Button label={"See work"} href={"#work"} style={"orange"} />
          <Button label={"See me"} href={"#me"} style={"green"} />
        </div>
      </div>
    </header>
  );
};

export default Header;
