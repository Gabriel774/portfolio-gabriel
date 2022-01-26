import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import LandingPage from '../components/LandingPage'
import homeIcon from '../public/img/home.png'
import codeIcon from '../public/img/coding.png'
import skillsIcon from '../public/img/habilidades.png'
import contactIcon from '../public/img/correspondencia.png'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Gabriel Santos portfolio</title>
        <meta name="description" content="Site de portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={styles.nav}>
        <a className={styles.link}> <abbr title="Início"><Image src={homeIcon} /></abbr> </a>
        <a className={styles.link}> <abbr title="Projetos"><Image src={codeIcon} /></abbr> </a>
        <a className={styles.link}> <abbr title="Tecnologias"><Image src={skillsIcon} /></abbr> </a>
        <a className={styles.link}> <abbr title="Contato"><Image src={contactIcon} /></abbr> </a>
      </nav>
      <nav className={styles.navMobile}>
        <a className={styles.link}><Image src={homeIcon} /></a>
        <a className={styles.link}><Image src={codeIcon} /></a>
        <a className={styles.link}><Image src={skillsIcon} /></a>
        <a className={styles.link}><Image src={contactIcon} /></a>
      </nav>

      <main className={styles.main}>
        <LandingPage />
        <LandingPage />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  )
}
