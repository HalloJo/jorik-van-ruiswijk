import styles from "../Marquee/Marquee.module.scss";
import Typography from "../Typography/Typography";

const Marquee = ({ item }: { item: string }) => {
  return (
    <div className={styles.marquee}>
      <ul className={styles.marquee__group}>
        <li className={styles.marquee__item}>
          <Typography variant="marquee">{item}</Typography>
        </li>
        <li aria-hidden className={styles.marquee__item}>
          <Typography variant="marquee">{item}</Typography>
        </li>
        <li aria-hidden className={styles.marquee__item}>
          <Typography variant="marquee">{item}</Typography>
        </li>
        <li aria-hidden className={styles.marquee__item}>
          <Typography variant="marquee">{item}</Typography>
        </li>
        <li aria-hidden className={styles.marquee__item}>
          <Typography variant="marquee">{item}</Typography>
        </li>
      </ul>
      <ul aria-hidden="true" className={styles.marquee__group}>
        <li aria-hidden className={styles.marquee__item}>
          <Typography variant="marquee">{item}</Typography>
        </li>
        <li aria-hidden className={styles.marquee__item}>
          <Typography variant="marquee">{item}</Typography>
        </li>
        <li aria-hidden className={styles.marquee__item}>
          <Typography variant="marquee">{item}</Typography>
        </li>
        <li aria-hidden className={styles.marquee__item}>
          <Typography variant="marquee">{item}</Typography>
        </li>
        <li aria-hidden className={styles.marquee__item}>
          <Typography variant="marquee">{item}</Typography>
        </li>
      </ul>
    </div>
  );
};

export default Marquee;
