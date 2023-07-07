import Image from 'next/image';
import { WorkCard } from '../../data/WorkCarouselData';
import styles from '../WorkCard/WorkCard.module.scss';

const WorkCard = ({ ...item }: WorkCard) => {
  const { labels, src, alt, title } = item;

  return (
    <div className={styles.workCard}>
      <picture className={styles.workCard__picture}>
        <Image
          className={styles.workCard__image}
          src={src}
          alt={alt}
          loading="lazy"
          layout="fill"
          objectFit="cover"
        />
      </picture>
      <div className={styles.workCard__label}>
        <p className={styles.workCard__title}>{title}</p>
        <ul className={styles.workCard__list}>
          {labels.map((label, index) => (
            <li className={styles.workCard__listItem} key={index}>
              {label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WorkCard;
