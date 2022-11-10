import styles from '../Hamburger/Hamburger.module.scss'


const Hamburger = ({open, setOpen}) => {
    return (
        <div className={styles.hamburger} onClick={()=>setOpen(!open)}>
            <span className={styles.hamburger__line}></span>
            <span className={styles.hamburger__line}></span>
            <span className={styles.hamburger__line}></span>
        </div>
    )
}

export default Hamburger