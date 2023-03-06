import Head from "next/head";
import Work from "../components/Work/Work";
import Me from "../components/Me/Me";
import Script from "next/script";
import PageWrapper from "../components/PageWrapper/PageWrapper";
import Hero from "../components/Hero/Hero";
import Brands from "../components/Brands/Brands";

const Home = () => {
  return (
    <>
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
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id="google-analytics" strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
  
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });

          `}
      </Script>

      <PageWrapper>
        <Hero />
        <Work />
        <Me />
        <Brands />
      </PageWrapper>
    </>
  );
};

export default Home;
