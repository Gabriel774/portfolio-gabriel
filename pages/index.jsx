import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import LandingPage from '../components/LandingPage'
import Projects from '../components/Projects'
import homeIcon from '../public/img/home.png'
import codeIcon from '../public/img/coding.png'
import skillsIcon from '../public/img/habilidades.png'
import contactIcon from '../public/img/correspondencia.png'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Gabriel Santos portfolio</title>
        <meta name="description" content="Site de portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.nav initial={{ x: -70, opacity: 0 }} transition={{ duration: 0.5 }} animate={{ x: 0, opacity: 1 }} className={styles.nav}>
        <motion.a href='#lp' whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className={styles.link}> <abbr title="Início"><Image src={homeIcon} /></abbr> </motion.a>
        <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className={styles.link}> <abbr title="Projetos"><Image src={codeIcon} /></abbr> </motion.a>
        <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className={styles.link}> <abbr title="Tecnologias & Ferramentas"><Image src={skillsIcon} /></abbr> </motion.a>
        <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className={styles.link}> <abbr title="Contato"><Image src={contactIcon} /></abbr> </motion.a>
      </motion.nav>

      <nav className={styles.navMobile}>
        <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className={styles.link} className={styles.link}><Image src={homeIcon} /></motion.a>
        <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className={styles.link} className={styles.link}><Image src={codeIcon} /></motion.a>
        <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className={styles.link} className={styles.link}><Image src={skillsIcon} /></motion.a>
        <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className={styles.link} className={styles.link}><Image src={contactIcon} /></motion.a>
      </nav>

      <main className={styles.main}>
        <LandingPage />
        <Projects />
      </main>

      <footer className={styles.footer}></footer>
    </div >
  )
}
