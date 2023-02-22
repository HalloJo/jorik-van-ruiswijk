import { SocialItem } from "../../data/SocialData";
import styles from "../SocialButton/SocialButton.module.scss";

const SocialButton = ({ ...item }: SocialItem) => {
  const { label, href } = item;

  return (
    <a
      className={styles.socialButton}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <p className={styles.socialButton__title}>{label}</p>
    </a>
  );
};

export default SocialButton;
