import { SkillsProps } from '../../data/Skills';
import styles from '../Skill/Skill.module.scss';
import Typography from '../Typography/Typography';
import Image from 'next/image';

const Skill = ({ ...skill }: SkillsProps) => {
  const { icon, skillTitle, alt } = skill;

  return (
    <div className={styles.skill}>
      <picture className={styles.skill__icon}>
        <Image src={icon} alt={alt} loading="lazy" height={20} width={20} />
      </picture>
      <Typography variant="body" size="small">
        {skillTitle}
      </Typography>
    </div>
  );
};

export default Skill;
