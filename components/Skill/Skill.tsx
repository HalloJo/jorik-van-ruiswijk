import { SkillsProps } from "../../data/Skills";
import styles from "../Skill/Skill.module.scss";
import Typography from "../Typography/Typography";

const Skill = ({ ...skill }: SkillsProps) => {
  const { icon, skillTitle, alt } = skill;

  return (
    <div className={styles.skill}>
      <picture className={styles.skill__icon}>
        <img src={icon} alt={alt} />
      </picture>
      <Typography variant="body" size="small">
        {skillTitle}
      </Typography>
    </div>
  );
};

export default Skill;
