import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Redirects</title>
        <meta name="description" content="redirects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Learning <a href="https://docs.netlify.com/routing/redirects/">Redirects</a> at Netlify!
        </h1>

        <div className={styles.grid}>
          <a href="https://docs.netlify.com/routing/redirects/" className={styles.card}>
            <h2>Netlify Docs &rarr;</h2>
            <p>Find in-depth information about Netlify.</p>
          </a>

          <a href="https://explorers.netlify.com/" className={styles.card}>
            <h2>Learn at Jamstack Explorers &rarr;</h2>
            <p>Learn about Jamstack and Netlify in an interactive course!</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.netlify.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </footer>
    </div>
  )
}
