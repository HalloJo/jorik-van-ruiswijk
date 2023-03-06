import ImageMarquee from "../ImageMarquee/ImageMarquee";
import styles from "../Brands/Brands.module.scss";
import { brands } from "../../data/Brands";
import Container from "../Container/Container";
import SmallHeading from "../SmallHeading/SmallHeading";

const Brands = () => {
  return (
    <>
      <Container className={styles.container}>
        <SmallHeading label={"Worked for and with:"} className={styles.title} />
        <ImageMarquee brands={brands} />
      </Container>
    </>
  );
};

export default Brands;
