import { useState } from "react";
import HeroArt from "../HeroArt/HeroArt";
import Button from "../Button/Button";
import styles from "../Header/Header.module.scss";
import { motion as m } from "framer-motion";

const Header = () => {
  const item = {
    hidden: { opacity: 0, translateX: -40 },
    visible: {
      opacity: 1,
      translateX: 0,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 1.5,
        duration: 0.5,
        type: "spring",
        damping: 10,
        mass: 0.75,
        stiffness: 100,
      },
    },
  };

  const buttonItem = {
    hidden: { opacity: 0, translateX: -40 },
    visible: {
      opacity: 1,
      translateX: 0,
      transition: {
        // staggerChildren: 0.3,
        // delayChildren: 1.5,
        delay: 2,
        duration: 0.3,
        type: "spring",
        damping: 10,
        mass: 0.75,
        stiffness: 100,
      },
    },
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <HeroArt />
      </div>
      <div className={styles.header__callToActions}>
        <m.div
          initial="hidden"
          animate="visible"
          variants={item}
          className={styles.header__contentText}
        >
          <m.h1 variants={item} className={styles.header__name}>
            Jorik
          </m.h1>
          <m.p variants={item} className={styles.header__subTitle}>
            Design & Development
          </m.p>
        </m.div>
        <m.div
          initial="hidden"
          animate="visible"
          variants={buttonItem}
          className={styles.header__buttons}
        >
          <Button label={"See work"} href={"#work"} style={"orange"} />
          <Button label={"See me"} href={"#me"} style={"green"} />
        </m.div>
      </div>
    </header>
  );
};

export default Header;
