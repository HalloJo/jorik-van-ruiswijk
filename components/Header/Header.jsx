import { useState } from 'react'
import Hamburger from '../Hamburger/Hamburger'
import styles from '../Header/Header.module.scss'
import Logo from '../Logo/Logo'
import NavigationList from '../NavigationList/NavigationList'
import { navigation } from '../../data/NavigationData'

const Header = () => {

    return (
        <header className={styles.header}>
            <nav className={styles.header__navigation}>
                <div className={styles.header__logoWrapper}>
                    <Logo />
                    <p className={styles.header__name}>Jorik</p>
                </div>
                <Hamburger />
                <NavigationList navigation={navigation} />
            </nav>
            <p className={styles.title}>Hero content</p>
      </header>
    )
}

export default Header