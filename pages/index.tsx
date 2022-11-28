import Head from "next/head";
import Navigation from "../components/Navigation/Navigation";
import Header from "../components/Header/Header";
import styles from "../styles/Home.module.scss";
import Work from "../components/Work/Work";
import Me from "../components/Me/Me";
import Wave from "../components/Wave/Wave";
import Contact from "../components/Contact/Contact";
import { useEffect, useState } from "react";
import { motion as m, Variants } from "framer-motion";

const Home = () => {
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
        stiffness: 400,
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

    // window.addEventListener("resize", () => {
    //   let vh = window.innerHeight * 0.01;
    //   document.documentElement.style.setProperty("--vh", `${vh}px`);
    // });

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Jorik - Design & Development</title>
        <meta name="title" content="Jorik - Design & Development" />
        <meta
          name="description"
          content="Need help with design or development? Jorik can help you with identity and websites. Just what you need."
        />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Jorik - Design & Development" />
        <meta
          property="og:description"
          content="Need help with design or development? Jorik can help you with identity and websites. Just what you need."
        />
        <meta
          property="og:image"
          content="https://jorikvanruiswijk.nl/share_image.jpg"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Jorik - Design & Development" />
        <meta
          property="twitter:description"
          content="Need help with design or development? Jorik can help you with identity and websites. Just what you need."
        />
        <meta
          property="twitter:image"
          content="https://jorikvanruiswijk.nl/share_image.jpg"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>

      <header className={styles.header}>
        <Navigation />
        <Header />
        {/* <Wave color="#016f62" /> */}
      </header>

      <main className={styles.main}>
        <Work />
        <Me />
        <Contact />
      </main>

      <m.div
        variants={mouseVariant}
        animate="default"
        className={`${styles.cursor} ${mouseDown && styles.down}`}
      />
    </div>
  );
};

export default Home;
