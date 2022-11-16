import React from "react";
import styles from "../Work/Work.module.scss";
import { carouselData } from "../../data/WorkCarouselData";
import WorkCard from "../WorkCard/WorkCard";
import Heading from "../Heading/Heading";
import { motion as m } from "framer-motion";

const Work = () => {
  const cardItem = {
    hidden: { opacity: 0, translateX: -40 },
    visible: {
      opacity: 1,
      translateX: 0,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 1.5,
        duration: 4,
      },
    },
  };

  return (
    <section id="work" className={styles.work}>
      <Heading heading="Work" exception={"work"} />
      <m.div
        initial="hidden"
        animate="visible"
        variants={cardItem}
        className={styles.work__carousel}
      >
        {carouselData.map((item) => {
          return (
            <m.a
              variants={cardItem}
              key={item.alt}
              href={item.href}
              className={styles.work__link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WorkCard {...item} />
            </m.a>
          );
        })}
      </m.div>
    </section>
  );
};

export default Work;
