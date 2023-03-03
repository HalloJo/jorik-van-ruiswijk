import styles from "../Marquee/Marquee.module.scss";

const Marquee = ({ item }) => {
  return (
    <div className={styles.marquee}>
      <ul className={styles.marquee__group}>
        <li className={styles.marquee__item}>{item}</li>
        <li aria-hidden className={styles.marquee__item}>
          {item}
        </li>
        <li aria-hidden className={styles.marquee__item}>
          {item}
        </li>
        <li aria-hidden className={styles.marquee__item}>
          {item}
        </li>
        <li aria-hidden className={styles.marquee__item}>
          {item}
        </li>
      </ul>
      <ul aria-hidden="true" className={styles.marquee__group}>
        <li aria-hidden className={styles.marquee__item}>
          {item}
        </li>
        <li aria-hidden className={styles.marquee__item}>
          {item}
        </li>
        <li aria-hidden className={styles.marquee__item}>
          {item}
        </li>
        <li aria-hidden className={styles.marquee__item}>
          {item}
        </li>
        <li aria-hidden className={styles.marquee__item}>
          {item}
        </li>
      </ul>
    </div>
  );
};

export default Marquee;
