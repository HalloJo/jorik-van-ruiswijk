import React from "react";
import styles from "../Work/Work.module.scss";
import { carouselData } from "../../data/WorkCarouselData";
import WorkCard from "../WorkCard/WorkCard";
import Heading from "../Heading/Heading";
import { motion as m, Variants } from "framer-motion";
import Container from "../Container/Container";

const Work = () => {
  const cardItem: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        // delayChildren: 1,
        duration: 0.5,
      },
    },
  };

  return (
    <section id="work" className={styles.work}>
      <Container className={styles.work__container}>
        <Heading className={styles.work__heading} heading="Work" />
        <p className={styles.work__synopsis}>
          Below is a collection of projects. Projects that I have drawn,
          designed and developed.
        </p>
        <div className={styles.work__carouselContainer}>
          <m.ul
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
          </m.ul>
        </div>
      </Container>
    </section>
  );
};

export default Work;
