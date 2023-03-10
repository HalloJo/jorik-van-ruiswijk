import styles from "../Work/Work.module.scss";
import { carouselData } from "../../data/WorkCarouselData";
import WorkCard from "../WorkCard/WorkCard";
import { motion as m, Variants } from "framer-motion";
import Container from "../Container/Container";
import * as Animation from "../../utils/animations";
import * as Content from "../../data/Content";
import Typography from "../Typography/Typography";

const Work = () => {
  return (
    <section id="work" className={styles.work}>
      <Container
        as={m.div}
        {...Animation.inViewContainer}
        className={styles.work__container}
      >
        <Typography
          variant="h2"
          as={m.div}
          {...Animation.inViewChild}
          className={styles.work__heading}
        >
          {Content.Work.title}
        </Typography>
        <Typography
          variant="body"
          as={m.div}
          {...Animation.inViewChild}
          className={styles.work__synopsis}
        >
          {Content.Work.intro}
        </Typography>
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
