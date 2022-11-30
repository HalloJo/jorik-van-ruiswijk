import Head from "next/head";
import Navigation from "../components/Navigation/Navigation";
import Header from "../components/Header/Header";
import styles from "../styles/Home.module.scss";
import Work from "../components/Work/Work";
import Me from "../components/Me/Me";
import Contact from "../components/Contact/Contact";
import CustomCursor from "../components/CustomCursor/CustomCursor";
import Footer from "../components/Footer/Footer";
import Script from "next/script";

const Home = () => {
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

        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`}
        />

        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
  
            gtag('config', '${process.env.GOOGLE_ANALYTICS_ID}');

          `}
        </Script>
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

      <Footer />

      <CustomCursor />
    </div>
  );
};

export default Home;
