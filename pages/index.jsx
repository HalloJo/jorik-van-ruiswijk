import Head from 'next/head'
import Navigation from '../components/Navigation/Navigation'
import Image from 'next/image'
import HamburgerMenu from '../components/HamburgerMenu/HamburgerMenu'
import Header from '../components/Header/Header'
import styles from '../styles/Home.module.scss'
import { navigation } from '../data/NavigationData'
import Work from '../components/Work/Work'
import Me from '../components/Me/Me'

const Home = () => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Jorik - Design & Development</title>
        <meta name="description" content="Need help with design or development? Jorik can help you with identity and websites. Just what you need." />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>

      <header>
        <Navigation />
        <Header />
        {/* <HamburgerMenu navigation={navigation}  /> */}
      </header>

      <main className={styles.main}>
        <Work />
        <Me />
        <p className={styles.title}>Contact</p>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export default Home
