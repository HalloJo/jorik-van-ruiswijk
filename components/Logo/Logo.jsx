import Image from 'next/image'
import Link from 'next/link'
import styles from '../Logo/Logo.module.scss'

const Logo = () => {

    const alt = "Logo Jorik van Ruiswijk"

    return (
        <div className={styles.logo}>
            <Link href="/">
                <a>
                    <svg className={styles.logo__svg} width="49" height="45" viewBox="0 0 49 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_5_51)">
                        <path d="M47.216 23.3227L43.0752 27.4492V17.4071L49 11.4655L47.2291 9.63726L43.0752 13.7768V0H40.536V6.33343L36.4212 2.21997L34.5852 3.99594L40.536 9.95067V21.2594L36.4212 17.1329L34.5852 18.9089L40.536 24.8767V29.9956L34.6372 35.9112V30.0087H32.059V38.4968L27.3973 43.1718L29.2073 45L49 25.1117L47.216 23.3227Z" />
                        <path d="M16.954 30.0087H14.4148V35.9112L8.47701 29.9956V24.8767L14.4148 18.9219L12.6309 17.1329L8.47701 21.2594V9.95067L14.4148 3.99594L12.6309 2.21997L8.47701 6.34649V0H5.93782V13.7638L1.82301 9.63726L0 11.4655L5.93782 17.4071V27.4492L1.83604 23.3227L0 25.0987L19.8448 45L21.6157 43.1718L16.954 38.4968V30.0087Z" />
                        </g>
                        <defs>
                        <clipPath id="clip0_5_51">
                        <rect width="49" height="45" />
                        </clipPath>
                        </defs>
                    </svg>
                </a>
            </Link>
        </div>
    )
}

export default Logo