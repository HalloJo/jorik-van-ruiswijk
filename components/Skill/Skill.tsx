import { SkillsProps } from "../../data/Skills";
import styles from "../Skill/Skill.module.scss";

const Skill = ({ ...skill }: SkillsProps) => {
  const { icon, skillTitle, alt } = skill;

  return (
    <div className={styles.skill}>
      <picture className={styles.skill__icon}>
        <img src={icon} alt={alt} />
      </picture>
      <p className={styles.skill__title}>{skillTitle}</p>
    </div>
  );
};

export default Skill;
