import Head from 'next/head'
import styles from '../styles/Home.module.css'
import LandingPage from '../components/LandingPage'
import Projects from '../components/Projects'
import Navbar from '../components/NavBar'
import Skills from '../components/skills'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Gabriel Santos portfolio</title>
        <meta name="description" content="Site de portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <LandingPage />
        <Projects />
        <Skills />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  )
}
