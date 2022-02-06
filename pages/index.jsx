import Head from 'next/head'
import styles from '../styles/Home.module.css'
import LandingPage from '../components/LandingPage'
import Projects from '../components/Projects'
import Navbar from '../components/NavBar'
import Skills from '../components/Skills'
import Contact from '../components/Contact'

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
        <Contact />
      </main>

      <footer className={styles.footer} />
    </div>
  )
}
