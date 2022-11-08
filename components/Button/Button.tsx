import styles from '../Button/Button.module.scss'


const Button = ({label, href, style}:{label: string; href: string; style: string;}) => {

    return (
            <a href={href} className={styles.link}>
                <button className={`${styles.button} ${styles[style]}`}>
                    {label}
                </button>
            </a>
    )
}

export default Button