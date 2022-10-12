import Hamburger from '../Hamburger/Hamburger'
import styles from '../Header/Header.module.scss'
import Logo from '../Logo/Logo'

const Header = () => {

    return (
        <header className={styles.header}>
            <nav className={styles.header__navigation}>
                <div className={styles.header__logoWrapper}>
                    <Logo />
                    <p className={styles.header__name}>Jorik</p>
                </div>
                <Hamburger />
            </nav>
            <p className={styles.title}>Hero</p>

      </header>
    )
}

export default Header