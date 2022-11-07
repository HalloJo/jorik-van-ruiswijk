import Link from "next/link"
import styles from '../Button/Button.module.scss'


const Button = ({label, href, style}) => {
    return (
        <Link href={href}>
            <a className={styles.link}>
                <button className={`${styles.button} ${styles[style]}`}>
                    {label}
                </button>
                {/* <button className={styles.button}>
                    {label}
                    </button> */}
            </a>
        </Link>
    )
}

export default Button