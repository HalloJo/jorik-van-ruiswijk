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
