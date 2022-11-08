import styles from '../Me/Me.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { skills } from '../../data/Skills'

const Me = () => {
    return (
        <section id='me' className={styles.me}>
             <h2 className={styles.me__heading}>Me</h2>
             <div className={styles.me__synopsis}>
                <p className={styles.me__text}>Jorik van Ruiswijk. 31 years of age. Based in the Netherlands. Self-taught front-end developer. Graduated graphic designer and illustrator. Loves his kids, family and football. Helps people with their design or development problems.</p>
             </div>
             <div className={styles.me__skills}>
                <h3 className={styles.me__subHeading}>Skills</h3>
                <div className={styles.me__skillsGrid}>
                    { skills.map((skill)=> {
                        return (
                            <div className={styles.me__skillWrapper} key={skill.skill}>
                                <img className={styles.me__skillIcon} src={skill.icon} alt="" />
                                {/* <FontAwesomeIcon className={styles.me__skillIcon} icon={skill.icon} /> */}
                                <p className={styles.me__skillTitle}>{skill.skill}</p>
                            </div>
                        )
                    })}
                </div>
             </div>
             <div className={styles.me__socials}>
                <h3 className={styles.me__subHeading}>Find me here</h3>
                <div className={styles.me__icons}>
                    <a className={styles.me__socialIcon} href="https://www.linkedin.com/in/jorikvanruiswijk/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className={styles.me__fontAwesomeIcon} icon={faLinkedin} />
                    </a>
                    <a className={styles.me__socialIcon} href="https://www.instagram.com/jorik.van.ruiswijk/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className={styles.me__fontAwesomeIcon} icon={faInstagram} />
                    </a>
                    <a className={styles.me__socialIcon} href="https://github.com/HalloJo" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className={styles.me__fontAwesomeIcon} icon={faGithub} />
                    </a>
                </div>
             </div>
        </section>
    )
}

export default Me