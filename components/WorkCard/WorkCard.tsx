import React from "react";
import { WorkCard } from "../../data/WorkCarouselData";
import styles from "../WorkCard/WorkCard.module.scss";

const WorkCard = ({ ...item }: WorkCard) => {
  const { label, src, alt } = item;

  return (
    <div className={styles.workCard}>
      <picture className={styles.workCard__picture}>
        <img className={styles.workCard__image} src={src} alt={alt} />
      </picture>
      <p className={styles.workCard__label}>{label}</p>
    </div>
  );
};

export default WorkCard;
