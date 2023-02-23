import cn from "clsx";
import styles from "../Button/Button.module.scss";

type ButtonProps = {
  label: string;
  href?: string;
  alternative?: boolean;
  type?: "button" | "submit" | "reset";
};

const Button = ({ label, href, alternative, type }: ButtonProps) => {
  return (
    <a href={href} className={styles.link}>
      <button
        type={type}
        className={cn(styles.button, alternative && styles.alternative)}
      >
        {label}
      </button>
    </a>
  );
};

export default Button;
