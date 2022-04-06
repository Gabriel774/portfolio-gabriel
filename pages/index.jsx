import Head from 'next/head'
import styles from '../styles/Home.module.css'
import LandingPage from '../components/LandingPage'
import Projects from '../components/Projects'
import Education from '../components/Education'
import Navbar from '../components/NavBar'
import Skills from '../components/Skills'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Gabriel Santos - Portfólio</title>
        <meta name="description" content="Meu Portfólio de desenvolvedor." />
        <meta name="theme-color" content="#30344c" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <LandingPage />
        <Projects />
        <Education />
        <Skills />
        <Contact />
      </main>

      <footer className={styles.footer} />
    </div>
  )
}