import { useRef } from 'react'
import styles from '../HamburgerMenu/HamburgerMenu.module.scss'

const HamburgerMenu = ({navigation}) => {

    const hamburgerMenuRef = useRef(null)
    
    console.log(hamburgerMenuRef.current);
    
        
    return (
        <nav className={styles.hamburgerMenu} ref={hamburgerMenuRef}>
            <ul className={styles.hamburgerMenu__list}>
                {navigation.map((item)=> {
                    const {label, id} = item
                    return (
                        <a className={styles.hamburgerMenu__link} key={label} href={id}>
                            <li className={styles.hamburgerMenu__label}>{label}</li>
                        </a>
                    )
                })}
            </ul>
            <p>Close</p>
        </nav>
    )
}

export default HamburgerMenu