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
                repeatDelay: 2,
              }}
              stroke="#016F62"
              strokeWidth="2.5"
              d="M24.89,39.49l17.81-17.81m-5.61,6V0m-7.54,34.72v-7.77m2.04-10.38l5.5,5.5M31.59,2.81l5.5,5.5m.12,6.6l5.5-5.5m-24.18,30.09L.71,21.68m5.61,6V0m7.54,34.72v-7.77m-2.04-10.38l-5.5,5.5m0-13.75L11.82,2.81M6.2,14.9L.71,9.41"
            />
          </svg>
        </a>
      </Link>
    </div>
  );
};

export default Logo;
