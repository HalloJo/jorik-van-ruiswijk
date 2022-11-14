import styles from "../Hamburger/Hamburger.module.scss";

type HamburgerProps = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

const Hamburger = ({ open, setOpen }: HamburgerProps) => {
  return (
    <div className={styles.hamburger} onClick={() => setOpen(!open)}>
      <span className={styles.hamburger__line}></span>
      <span className={styles.hamburger__line}></span>
      <span className={styles.hamburger__line}></span>
    </div>
  );
};

export default Hamburger;
