import Logo from '../Logo/Logo'
import NavigationList from '../NavigationList/NavigationList'
import { navigation } from '../../data/NavigationData'
import Hamburger from '../Hamburger/Hamburger'
import styles from '../Navigation/Navigation.module.scss'

const Navigation = () => {
    return (
        <nav className={styles.navigation}>
            <div className={styles.navigation__logoWrapper}>
                <Logo />
            </div>
            <Hamburger />
            {/* <NavigationList navigation={navigation} /> */}
            </nav>
    )
}

export default Navigation