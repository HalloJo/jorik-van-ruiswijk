import styles from '../Me/Me.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'

const Me = () => {
    return (
        <section className={styles.me}>
             <h2 className={styles.me__heading}>Me</h2>
             <div className={styles.me__socials}>
                <h3>Find me here</h3>
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