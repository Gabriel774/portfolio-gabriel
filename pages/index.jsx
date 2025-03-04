import Head from "next/head";
import styles from "../styles/Home.module.css";
import LandingPage from "../components/LandingPage";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Navbar from "../components/NavBar";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import NavMobile from "../components/NavMobile";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Gabriel Santos - Portfolio</title>
        <meta name="description" content="Meu Portfólio de desenvolvedor" />
        <meta name="theme-color" content="#30344c" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <div id="lp-scroll" />

      <div className={styles.banner} />

      <main className={styles.main}>
        <LandingPage />

        <Projects />

        <div className={styles.scrollLink} id="education-scroll" />

        <Education />

        <div className={styles.scrollLink} id="skills-scroll" />

        <Skills />

        <div className={styles.scrollLink} id="contact-scroll" />

        <Contact />
      </main>

      <Navbar />
      <NavMobile />
      <footer className={styles.footer} />
    </div>
  );
}
