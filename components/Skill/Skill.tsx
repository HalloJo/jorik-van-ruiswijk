import { SkillsProps } from "../../data/Skills";
import styles from "../Skill/Skill.module.scss";

const Skill = ({ ...skill }: SkillsProps) => {
  const { icon, skillTitle, alt } = skill;

  return (
    <>
      <picture className={styles.skillIcon}>
        <img src={icon} alt={alt} />
      </picture>
      <p className={styles.skillTitle}>{skillTitle}</p>
    </>
  );
};

export default Skill;
