import React from "react";
import styles from "../Work/Work.module.scss";
import { carouselData } from "../../data/WorkCarouselData";
import WorkCard from "../WorkCard/WorkCard";
import Heading from "../Heading/Heading";

const Work = () => {
  return (
    <section id="work" className={styles.work}>
      <Heading heading="Work" exception={"work"} />
      <div className={styles.work__carousel}>
        {carouselData.map((item) => {
          return (
            <a
              key={item.alt}
              href={item.href}
              className={styles.work__link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WorkCard {...item} />
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Work;
