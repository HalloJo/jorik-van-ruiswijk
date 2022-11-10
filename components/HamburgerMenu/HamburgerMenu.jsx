import { useRef } from 'react'
import CloseButton from '../CloseButton/CloseButton'
import styles from '../HamburgerMenu/HamburgerMenu.module.scss'

const HamburgerMenu = ({navigation, open, setOpen}) => {
        
    return (
        <nav className={`${styles.hamburgerMenu} ${open ? styles.open : null}`}>
            <ul className={styles.hamburgerMenu__list}>
                {navigation.map((item)=> {
                    const {label, id} = item
                    return (
                        <a className={styles.hamburgerMenu__link} key={label} href={id} onClick={()=>setOpen(!open)}>
                            <li className={styles.hamburgerMenu__label}>{label}</li>
                        </a>
                    )
                })}
            </ul>
            <CloseButton open={open} setOpen={setOpen} />
        </nav>
    )
}

export default HamburgerMenu