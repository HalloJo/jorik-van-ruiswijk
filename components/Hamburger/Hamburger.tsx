import { useEffect } from "react";
import styles from "../Hamburger/Hamburger.module.scss";

type HamburgerProps = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

const Hamburger = ({ open, setOpen }: HamburgerProps) => {
  useEffect(() => {
    const HTML = document.querySelector("html");
    if (HTML) {
      HTML.style.overflow = open ? "hidden" : "auto";
    }
  }, [open]);

  return (
    <div className={styles.hamburger} onClick={() => setOpen(!open)}>
      <span className={styles.hamburger__line}></span>
      <span className={styles.hamburger__line}></span>
      <span className={styles.hamburger__line}></span>
    </div>
  );
};

export default Hamburger;
