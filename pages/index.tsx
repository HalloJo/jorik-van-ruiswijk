import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jorik - Design and Development</title>
        <meta name="description" content="Need help with design or development? Jorik can help you with identity and websites. Just what you need." />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Edu+QLD+Beginner:wght@400;500;600;700&family=Manrope:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>

      <header className={styles.header}>
        <p className={styles.title}>
          Navigation
        </p>
        <p className={styles.title}>
          Hero
        </p>

      </header>

      <main className={styles.main}>
        <p className={styles.title}>Work</p>
        <p className={styles.title}>Jorik / Tech stack</p>
        <p className={styles.title}>Contact</p>
        
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
