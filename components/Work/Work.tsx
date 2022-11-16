import React from "react";
import styles from "../Work/Work.module.scss";
import { carouselData } from "../../data/WorkCarouselData";
import WorkCard from "../WorkCard/WorkCard";
import Heading from "../Heading/Heading";
import { motion as m, Variants } from "framer-motion";

const Work = () => {
  const cardItem: Variants = {
    hidden: { opacity: 0, translateY: 20 },
    visible: {
      opacity: 1,
      translateY: 0,
      transition: {
        staggerChildren: 0.4,
        // delayChildren: 1,
        duration: 0.5,
      },
    },
  };

  return (
    <section id="work" className={styles.work}>
      <Heading heading="Work" exception={"work"} />
      <m.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
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
