import Image from "next/image";
import Link from "next/link";
import styles from "../Logo/Logo.module.scss";
import { motion } from "framer-motion";

const Logo = () => {
  const alt = "Logo Jorik van Ruiswijk";

  return (
    <div className={styles.logo}>
      <Link href="/">
        <a>
          {/* <svg
            className={styles.logo__svg}
            width="49"
            height="45"
            viewBox="0 0 49 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_5_51)">
              <path d="M47.216 23.3227L43.0752 27.4492V17.4071L49 11.4655L47.2291 9.63726L43.0752 13.7768V0H40.536V6.33343L36.4212 2.21997L34.5852 3.99594L40.536 9.95067V21.2594L36.4212 17.1329L34.5852 18.9089L40.536 24.8767V29.9956L34.6372 35.9112V30.0087H32.059V38.4968L27.3973 43.1718L29.2073 45L49 25.1117L47.216 23.3227Z" />
              <path d="M16.954 30.0087H14.4148V35.9112L8.47701 29.9956V24.8767L14.4148 18.9219L12.6309 17.1329L8.47701 21.2594V9.95067L14.4148 3.99594L12.6309 2.21997L8.47701 6.34649V0H5.93782V13.7638L1.82301 9.63726L0 11.4655L5.93782 17.4071V27.4492L1.83604 23.3227L0 25.0987L19.8448 45L21.6157 43.1718L16.954 38.4968V30.0087Z" />
            </g>
            <defs>
              <clipPath id="clip0_5_51">
                <rect width="49" height="45" />
              </clipPath>
            </defs>
          </svg> */}
          <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 4,
              }}
              stroke="#016F62"
              strokeWidth="2.5"
              d="M24.89,39.49l17.81-17.81m-5.61,6V0m-7.54,34.72v-7.77m2.04-10.38l5.5,5.5M31.59,2.81l5.5,5.5m.12,6.6l5.5-5.5m-24.18,30.09L.71,21.68m5.61,6V0m7.54,34.72v-7.77m-2.04-10.38l-5.5,5.5m0-13.75L11.82,2.81M6.2,14.9L.71,9.41"
            />
          </svg>
          {/* 
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="52"
            height="48"
            viewBox="0 0 52 48"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 2,
              }}
              id="Path_79"
              data-name="Path 79"
              d="M12,34.9V52a2,2,0,0,0,2,2H50a2,2,0,0,0,2-2V34.9M13.5,10h37a2.025,2.025,0,0,1,1.925,1.45L56,24H8l3.575-12.55A2.025,2.025,0,0,1,13.5,10ZM24,24v4A8,8,0,0,1,8,28V24m32,0v4a8,8,0,0,1-16,0V24m32,0v4a8,8,0,0,1-16,0V24"
              transform="translate(-6 -8)"
              fill="rgba(0,0,0,0)"
              stroke="#016F62"
              strokeLinecap="square"
              strokeLinejoin="square"
              strokeWidth="4"
            />
          </svg> */}
        </a>
      </Link>
    </div>
  );
};

export default Logo;
