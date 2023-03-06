import styles from "../ImageMarquee/ImageMarquee.module.scss";

interface Brand {
  src: string;
  alt: string;
}

interface ImageMarqueeProps {
  brands: Brand[];
}

const ImageMarquee = ({ brands }: ImageMarqueeProps) => {
  return (
    <div className={styles.marquee}>
      <ul className={styles.marquee__group}>
        {brands.map((item) => {
          return (
            <li key={item.alt} className={styles.marquee__item}>
              <picture>
                <img src={item.src} alt={item.alt} />
              </picture>
            </li>
          );
        })}
      </ul>
      <ul aria-hidden="true" className={styles.marquee__group}>
        {brands.map((item) => {
          return (
            <li key={item.alt} className={styles.marquee__item}>
              <picture>
                <img src={item.src} alt={item.alt} />
              </picture>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ImageMarquee;
