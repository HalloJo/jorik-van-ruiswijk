import { useState } from 'react'
import HeroArt from '../HeroArt/HeroArt'
import styles from '../Header/Header.module.scss'


const Header = () => {

    return (
        <header className={styles.header}>
            <div className={styles.header__content}>
                <HeroArt />
                <div className={styles.header__contentText}>
                    <h1 className={styles.header__name}>Jorik</h1>
                    <p className={styles.header__subTitle}>Design & Development</p>
                </div>
            </div>
            <div className={styles.header__callToActions}>

            </div>
      </header>
    )
}

export default Header