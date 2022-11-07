import Link from "next/link"
import styles from '../Button/Button.module.scss'


const Button = ({label, href, style}:{label: string; href: string; style: string;}) => {

    return (
        <Link href={href}>
            <a className={styles.link}>
                <button className={`${styles.button} ${styles[style]}`}>
                    {label}
                </button>
            </a>
        </Link>
    )
}

export default Button