import styles from "../Work/Work.module.scss";
import { carouselData } from "../../data/WorkCarouselData";
import WorkCard from "../WorkCard/WorkCard";
import Heading from "../Heading/Heading";
import { motion as m, Variants } from "framer-motion";
import Container from "../Container/Container";
import * as Animation from "../../utils/animations";

const Work = () => {
  return (
    <section id="work" className={styles.work}>
      <Container className={styles.work__container}>
        <Heading className={styles.work__heading} heading="Work" />
        <m.p {...Animation.inViewChild} className={styles.work__synopsis}>
          Below is a small grasp of projects. Projects that I have drawn,
          designed, collaborated on and developed.
        </m.p>
        <div className={styles.work__carouselContainer}>
          <m.ul
            {...Animation.inViewContainer}
            className={styles.work__carousel}
          >
            {carouselData.map((item) => {
              return (
                <m.a
                  {...Animation.inViewChild}
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
