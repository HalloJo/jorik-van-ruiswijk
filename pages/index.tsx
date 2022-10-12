import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header/Header'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jorik - Design & Development</title>
        <meta name="description" content="Need help with design or development? Jorik can help you with identity and websites. Just what you need." />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>

     <Header />

      <main className={styles.main}>
        <p className={styles.title}>Work</p>
        <p className={styles.title}>Jorik / Tech stack</p>
        <p className={styles.title}>Contact</p>
        
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export default Home
