import { useState } from 'react'
import HeroArt from '../HeroArt/HeroArt'
import Button from '../Button/Button'
import styles from '../Header/Header.module.scss'


const Header = () => {

    return (
        <header className={styles.header}>
            <div className={styles.header__content}>
                <HeroArt />
            </div>
            <div className={styles.header__callToActions}>
                <div className={styles.header__contentText}>
                    <h1 className={styles.header__name}>Jorik</h1>
                    <p className={styles.header__subTitle}>Design & Development</p>
                </div>
                <div className={styles.header__buttons}>
                    <Button label={"See work"} href={"#work"} style={"orange"} />
                    <Button label={"See me"} href={"#me"} style={"green"} />
                </div>
            </div>
      </header>
    )
}

export default Header