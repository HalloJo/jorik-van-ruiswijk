import Head from "next/head";
import Navigation from "../components/Navigation/Navigation";
import Header from "../components/Header/Header";
import styles from "../styles/Home.module.scss";
import Work from "../components/Work/Work";
import Me from "../components/Me/Me";
import Wave from "../components/Wave/Wave";
import Contact from "../components/Contact/Contact";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    // window.addEventListener("resize", () => {
    //   let vh = window.innerHeight * 0.01;
    //   document.documentElement.style.setProperty("--vh", `${vh}px`);
    // });
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Jorik - Design & Development</title>
        <meta name="title" content="Jorik - Design & Development" />
        <meta
          name="description"
          content="Need help with design or development? Jorik can help you with identity and websites. Just what you need."
        />

        <meta name="og:type" content="website" />
        <meta name="og:title" content="Jorik - Design & Development" />
        <meta
          name="og:description"
          content="Need help with design or development? Jorik can help you with identity and websites. Just what you need."
        />
        <meta
          name="og:image"
          content="https://jorikvanruiswijk.nl/share_image.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Jorik - Design & Development" />
        <meta
          name="twitter:description"
          content="Need help with design or development? Jorik can help you with identity and websites. Just what you need."
        />
        <meta
          name="twitter:image"
          content="https://jorikvanruiswijk.nl/share_image.jpg"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>

      <header className={styles.header}>
        <Navigation />
        <Header />
        <Wave color="#fff" />
      </header>

      <main className={styles.main}>
        <Work />
        <Me />
        <Contact />
      </main>
    </div>
  );
};

export default Home;
