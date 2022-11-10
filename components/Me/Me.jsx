import styles from '../Me/Me.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { skills } from '../../data/Skills'
import Heading from '../Heading/Heading'

const Me = () => {
    return (
        <section id='me' className={styles.me}>
            <div className={styles.me__container}>
                <div className={styles.me__introWrapper}>
                    <div className={styles.me__intro}>
                        <Heading heading="Me" />
                        <div className={styles.me__synopsis}>
                            <p className={styles.me__text}>Jorik van Ruiswijk. 31 years of age. Based in the Netherlands. Self-taught front-end developer. Graduated graphic designer and illustrator. Loves his kids, family and football. Helps people with their design or development problems.</p>
                        </div>
                    </div>
                    <div className={styles.me__skills}>
                        <h3 className={styles.me__subHeading}>Skills</h3>
                        <div className={styles.me__skillsGrid}>
                            { skills.map((skill)=> {
                                return (
                                    <div className={styles.me__skillWrapper} key={skill.skill}>
                                        <img className={styles.me__skillIcon} src={skill.icon} alt="" />
                                        <p className={styles.me__skillTitle}>{skill.skill}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
             <div className={styles.me__socials}>
                <h3 className={styles.me__subHeading}>Find me here</h3>
                <div className={styles.me__icons}>
                    <a className={styles.me__socialIcon} href="https://www.linkedin.com/in/jorikvanruiswijk/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className={styles.me__fontAwesomeIcon} icon={faLinkedin} />
                        <p className={styles.me__socialIconTitle}>LinkedIn</p>
                    </a>
                    <a className={styles.me__socialIcon} href="https://www.instagram.com/jorik.van.ruiswijk/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className={styles.me__fontAwesomeIcon} icon={faInstagram} />
                        <p className={styles.me__socialIconTitle}>Instagram</p>
                    </a>
                    <a className={styles.me__socialIcon} href="https://github.com/HalloJo" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className={styles.me__fontAwesomeIcon} icon={faGithub} />
                        <p className={styles.me__socialIconTitle}>GitHub</p>
                    </a>
                </div>
             </div>
            </div>
        </section>
    )
}

export default Me