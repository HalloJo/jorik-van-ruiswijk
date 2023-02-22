import Image from "next/image";
import Link from "next/link";
import styles from "../Logo/Logo.module.scss";
import { motion } from "framer-motion";

const Logo = () => {
  const alt = "Logo Jorik van Ruiswijk";

  return (
    <div className={styles.logo}>
      <Link href="/">
        <a className={styles.logo__link}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.706 30.036">
            <g
              id="Group_30"
              data-name="Group 30"
              transform="translate(-243 -45.482)"
            >
              <path
                id="Path_1"
                data-name="Path 1"
                d="M40.626,15.567l-2.764,2.754v-6.7l3.955-3.966-1.182-1.22L37.862,9.2V0H36.167V4.227L33.42,1.482,32.195,2.667l3.972,3.975V14.19L33.42,11.436l-1.225,1.185L36.167,16.6v3.417L32.23,23.969V20.03H30.509V25.7L27.4,28.816l1.208,1.22L41.816,16.761Z"
                transform="translate(233.889 45.482)"
              />
              <path
                id="Path_2"
                data-name="Path 2"
                d="M11.316,20.03H9.621v3.94L5.658,20.021V16.6L9.621,12.63,8.431,11.436,5.658,14.19V6.642L9.621,2.667,8.431,1.482,5.658,4.236V0H3.963V9.187L1.217,6.433,0,7.653l3.963,3.966v6.7L1.225,15.567,0,16.752,13.246,30.036l1.182-1.22L11.316,25.7Z"
                transform="translate(243 45.482)"
              />
            </g>
          </svg>

          {/* <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="40"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 2,
                delay: 2.5,
              }}
              stroke="#b5b5b5"
              strokeWidth="2.5"
              d="M24.89,39.49l17.81-17.81m-5.61,6V0m-7.54,34.72v-7.77m2.04-10.38l5.5,5.5M31.59,2.81l5.5,5.5m.12,6.6l5.5-5.5m-24.18,30.09L.71,21.68m5.61,6V0m7.54,34.72v-7.77m-2.04-10.38l-5.5,5.5m0-13.75L11.82,2.81M6.2,14.9L.71,9.41"
            />
          </svg> */}
        </a>
      </Link>
    </div>
  );
};

export default Logo;
