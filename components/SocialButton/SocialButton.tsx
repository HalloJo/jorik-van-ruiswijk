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
      <img className={styles.socialButton__image} src={icon} alt={alt} />
      <p className={styles.socialButton__title}>{label}</p>
    </a>
  );
};

export default SocialButton;
