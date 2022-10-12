import styles from '../Hamburger/Hamburger.module.scss'


const Hamburger = () => {
    return (
        <div className={styles.hamburger}>
            <span className={styles.hamburger__line}></span>
            <span className={styles.hamburger__line}></span>
            <span className={styles.hamburger__line}></span>
        </div>
    )
}

export default Hamburger