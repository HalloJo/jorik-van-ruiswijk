import ImageMarquee from "../ImageMarquee/ImageMarquee";
import styles from "../Brands/Brands.module.scss";
import { brands } from "../../data/Brands";
import { motion as m, Variants } from "framer-motion";
import * as Animation from "../../utils/animations";
import Container from "../Container/Container";
import Typography from "../Typography/Typography";

const Brands = () => {
  return (
    <section className={styles.brands}>
      <Container
        className={styles.container}
        as={m.div}
        {...Animation.inViewContainer}
      >
        <Typography
          className={styles.title}
          as={m.div}
          {...Animation.inViewChild}
        >
          Worked for and with:
        </Typography>
        <m.div {...Animation.inViewChild}>
          <ImageMarquee brands={brands} />
        </m.div>
      </Container>
    </section>
  );
};

export default Brands;
