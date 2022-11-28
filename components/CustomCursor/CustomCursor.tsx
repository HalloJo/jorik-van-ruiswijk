import { motion as m, Variants } from "framer-motion";
import { useState, useEffect } from "react";
import styles from "../CustomCursor/CustomCursor.module.scss";

const CustomCursor = () => {
  type MousePositionProps = {
    x: number;
    y: number;
  };

  const [mousePosition, setMousePosition] = useState<MousePositionProps>({
    x: 0,
    y: 0,
  });
  const [mouseDown, setMouseDown] = useState<boolean>(false);

  const mouseMove = (event) => {
    setMousePosition({
      x: event.clientX - 7.5,
      y: event.clientY - 7.5,
    });
  };

  const mouseVariant: Variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
      transition: {
        type: "spring",
        damping: 30,
        stiffness: 600,
      },
    },
  };

  useEffect(() => {
    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mousedown", () => {
      setMouseDown(true);
    });
    window.addEventListener("mouseup", () => {
      setMouseDown(false);
    });

    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    window.addEventListener("resize", () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    });

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <m.div
      variants={mouseVariant}
      animate="default"
      className={`${styles.cursor} ${mouseDown && styles.down}`}
    />
  );
};

export default CustomCursor;
