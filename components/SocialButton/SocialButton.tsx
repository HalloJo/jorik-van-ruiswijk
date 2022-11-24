import { SocialItem } from "../../data/SocialData";
import styles from "../SocialButton/SocialButton.module.scss";

const SocialButton = ({ ...item }: SocialItem) => {
  const { label, href, alt, icon } = item;

  return (
    <a
      className={styles.socialButton}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <picture className={styles.socialButton__picture}>
        <img className={styles.socialButton__image} src={icon} alt={alt} />
      </picture>
      <p className={styles.socialButton__title}>{label}</p>
    </a>
  );
};

export default SocialButton;
