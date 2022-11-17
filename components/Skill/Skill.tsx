import { SkillsProps } from "../../data/Skills";
import styles from "../Skill/Skill.module.scss";

const Skill = ({ ...skill }: SkillsProps) => {
  const { icon, skillTitle } = skill;

  return (
    <>
      <img className={styles.skillIcon} src={icon} alt="" />
      <p className={styles.skillTitle}>{skillTitle}</p>
    </>
  );
};

export default Skill;
