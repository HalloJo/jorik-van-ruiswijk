import { type } from 'os';
import styles from '../Button/Button.module.scss'


const Button = ({label, href, style, type}:{label: string; href: string; style: string; type: "button" | "submit" | "reset"}) => {

    return (
            <a href={href} className={styles.link}>
                <button type={type} className={`${styles.button} ${styles[style]}`}>
                    {label}
                </button>
            </a>
    )
}

export default Button