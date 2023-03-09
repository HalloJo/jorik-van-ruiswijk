import ImageMarquee from "../ImageMarquee/ImageMarquee";
import styles from "../Brands/Brands.module.scss";
import { brands } from "../../data/Brands";
import Container from "../Container/Container";
import SmallHeading from "../SmallHeading/SmallHeading";
import Typography from "../Typography/Typography";

const Brands = () => {
  return (
    <section className={styles.brands}>
      <Container className={styles.container}>
        <Typography className={styles.title}>Worked for and with:</Typography>
        <ImageMarquee brands={brands} />
      </Container>
    </section>
  );
};

export default Brands;
