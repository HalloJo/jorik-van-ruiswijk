import styles from "../ContactArt/ContactArt.module.scss";
import { motion, Variants } from "framer-motion";

const ContactArt = () => {
  const animateSVG: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <div className={styles.contactArt}>
      <motion.svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 282.17 247.4"
        variants={animateSVG}
        whileInView="visible"
        initial="hidden"
      >
        <motion.path
          className={styles.contactArt__svg}
          fill="none"
          stroke="#F9F2E9"
          strokeWidth="4"
          d="M58.94,119.63c-11.94,0-21.61-9.68-21.61-21.61M182.47,44.61c-6.29-2.47-13.72-1.16-18.81,3.93s-6.39,12.52-3.93,18.81c6.29,2.47,13.72,1.16,18.81-3.93,5.09-5.09,6.39-12.52,3.93-18.81Zm-97.69,105.48c-2.74-6.27-8.99-10.65-16.27-10.65-7.28,0-13.53,4.38-16.27,10.65,2.74,6.27,8.99,10.65,16.27,10.65s13.53-4.38,16.27-10.65Zm177.44,39.33c-2.74-6.27-8.99-10.65-16.27-10.65-7.28,0-13.53,4.38-16.27,10.65,2.74,6.27,8.99,10.65,16.27,10.65s13.53-4.38,16.27-10.65Zm-25.83-60.69c4.15-1.81,7.04-5.95,7.04-10.76,0-4.81-2.9-8.95-7.04-10.76-4.15,1.81-7.04,5.95-7.04,10.76s2.9,8.95,7.04,10.76Zm-115.72,106.56c0-5.24-4.25-9.48-9.48-9.48s-9.48,4.25-9.48,9.48,4.25,9.48,9.48,9.48,9.48-4.25,9.48-9.48Zm-83.35-55.39c0-4.15-3.37-7.52-7.52-7.52s-7.52,3.37-7.52,7.52,3.37,7.52,7.52,7.52,7.52-3.37,7.52-7.52ZM218.98,11.72c0-4.15-3.37-7.52-7.52-7.52s-7.52,3.37-7.52,7.52,3.37,7.52,7.52,7.52,7.52-3.37,7.52-7.52ZM99.7,61.6c-4.15,0-7.52,3.37-7.52,7.52s3.37,7.52,7.52,7.52m93.99,108.17c-4.15,0-7.52,3.37-7.52,7.52s3.37,7.52,7.52,7.52M20.97,43.07c0-5.24-4.25-9.48-9.48-9.48s-9.48,4.25-9.48,9.48,4.25,9.48,9.48,9.48,9.48-4.25,9.48-9.48Zm-9.45,10.87v44.53c0,11.69,9.47,21.16,21.16,21.16h54.1M127.68,37.96v37.84m9.51,110.24h-56.38c-12.08,0-21.87,9.79-21.87,21.87v7.21m110.16-43.57v21.06c0,8.81-7.15,15.96-15.96,15.96h-52.4c-8.81,0-15.96,7.15-15.96,15.96v22.88m119.17-100.08h12.05c7.37,0,13.35,5.98,13.35,13.35v53.78c0,7.37,5.98,13.35,13.35,13.35h39.47m-63.19-97.56h28.95c11.58,0,20.96-9.39,20.96-20.96v-17.12M188.94,0V12.84c0,8.16-6.61,14.77-14.77,14.77h-14.63c-8.16,0-14.77,6.61-14.77,14.77v50.1m48.6,0H97.36c-5.84,0-10.58,4.74-10.58,10.58v57.92c0,5.84,4.74,10.58,10.58,10.58h96.02c5.84,0,10.58-4.74,10.58-10.58v-57.92c0-5.84-4.74-10.58-10.58-10.58Zm-106.29,8.1l57.69,37.95,58.7-38.61"
        />
      </motion.svg>
    </div>
  );
};

export default ContactArt;
