import styles from "../styles/Projects.module.css";
import contactStyles from "../styles/contact.module.css";
import homeIcon from "../public/img/home.png";
import codeIcon from "../public/img/coding.png";
import skillsIcon from "../public/img/habilidades.png";
import contactIcon from "../public/img/correspondencia.png";
import educationIcon from "../public/img/education.png";
import githubIcon from "../public/img/25231.png";
import linkedinIcon from "../public/img/linkedin.png";
import emailIcon from "../public/img/email.png";
import jsIcon from "../public/img/js.png";
import cssIcon from "../public/img/css.png";
import reactIcon from "../public/img/logo-react-icon.png";
import vueIcon from "../public/img/vue-logo.png";
import htmlIcon from "../public/img/html.png";
import phpIcon from "../public/img/php.png";
import illustratorIcon from "../public/img/ai.png";
import tsIcon from "../public/img/ts.png";
import sqlIcon from "../public/img/sql.png";
import psIcon from "../public/img/ps.png";
import uamIcon from "../public/img/uam.jpg";
import etecIcon from "../public/img/T.png";
import udemyIcon from "../public/img/udemy.png";
import traderLogo from "../public/img/trader-logo.png";
import nodeIcon from "../public/img/nodejs-logo-FBE122E377-seeklogo.com.png";
import laravelIcon from "../public/img/laravel.jpeg";
import Image from "next/image";

export const projects = [
  {
    name: (
      <h1
        className={styles.cardTitle}
        style={{
          fontFamily: "Oswald",
          color: "white",
          fontWeight: "400",
          marginTop: "10px",
          marginBottom: "22px",
        }}
      >
        Winner Idiomas
      </h1>
    ),
    link: "https://www.winneridiomas.com.br/",
    color: "#19462c",
    desc: (
      <p className={styles.cardDesc} style={{ color: "white" }}>
        Winner Idiomas é um projeto profissional desenvolvido enquanto
        trabalhava na SignoWeb. O foco do site é a venda de cursos de inglês.
        Possui um blog de notícias e todo o conteúdo do site é gerenciável por
        um sistema interno.
      </p>
    ),
  },
  {
    name: (
      <span style={{ width: 120, height: 85, marginTop: 5, marginBottom: 15 }}>
        <Image src={traderLogo} width={120} height={85} alt="Trader" />
      </span>
    ),
    link: "https://trader-project.vercel.app/register",
    color: "rgb(46, 46, 46)",
    desc: (
      <p className={styles.cardDesc} style={{ color: "white" }}>
        Trader é uma simulação de um site de day trade, este é um projeto full
        stack, cujo a ideia vem de uma reimaginação de um desafio do curso da
        COD3R de VueJS
      </p>
    ),
  },
  {
    name: (
      <h1
        className={styles.cardTitle}
        style={{
          fontFamily: "Oswald",
          color: "white",
          fontWeight: "400",
          marginTop: "10px",
        }}
      >
        <span style={{ fontFamily: "Oswald", color: "#3498DB" }}>N</span>UNTIUM
      </h1>
    ),
    link: "https://gabriel774.github.io/nuntium",
    color: "#2b2d42",
    desc: (
      <p className={styles.cardDesc} style={{ color: "white" }}>
        O Nuntium é um projeto original de site um fictício de notícias, foi
        desenvolvido para treino do framework VueJS, Vue Router (SPA para o Vue)
        e CSS flex-box.
      </p>
    ),
  },
  {
    name: (
      <h1
        className={`${styles.cardTitle} ${styles.minorText}`}
        style={{
          fontFamily: "Major Mono Display",
          color: "black",
          marginTop: "10px",
          marginTop: "25px",
          marginBottom: "39px",
        }}
      >
        ProcuraBooks
      </h1>
    ),
    link: "https://gabriel774.github.io/ProcuraBooks",
    color: "#ff8331",
    desc: (
      <p className={styles.cardDesc} style={{ color: "black" }}>
        ProcuraBooks é um projeto original de um sebo fictício, foi desenvolvido
        para treinar o desenvolvimento de uma LandingPage com VueJS.
      </p>
    ),
  },
  {
    name: (
      <h1
        className={`${styles.cardTitle} ${styles.minorText}`}
        style={{
          fontFamily: "Roboto mono",
          color: "black",
          marginTop: "10px",
          marginTop: "25px",
          marginBottom: "39px",
          color: "white",
        }}
      >
        CALCULADORA<span style={{ color: "rgb(65, 184, 131)" }}>VUE</span>
      </h1>
    ),
    link: "https://gabriel774.github.io/calculadora-vue/",
    color: "linear-gradient(90deg,#283e51,#4b79a1)",
    desc: (
      <p className={styles.cardDesc} style={{ color: "white" }}>
        Uma calculadora totalmente funcional, foi desenvolvida em resposta ao
        curso de VueJS da COD3R.
      </p>
    ),
  },
  {
    name: (
      <h1
        className={`${styles.cardTitle} ${styles.minorTextB}`}
        style={{
          fontFamily: "'Press Start 2P', cursive",
          color: "#d8e6f4",
          marginTop: "10px",
          marginTop: "40px",
          marginBottom: "42px",
        }}
      >
        MatadorDeMonstros
      </h1>
    ),
    link: "https://gabriel774.github.io/MatadorDeMonstros/",
    color: "#30344c",
    desc: (
      <p className={styles.cardDesc} style={{ color: "#d8e6f4" }}>
        Um jogo de turnos no qual seu objetivo é derrotar um monstro, foi
        desenvolvido em resposta a um desafio do curso da COD3R de VueJS.
      </p>
    ),
  },
  {
    name: (
      <h1
        className={`${styles.cardTitle} ${styles.minorText}`}
        style={{
          fontFamily: "arial",
          color: "#62b1ff",
          marginTop: "10px",
          marginTop: "30px",
          marginBottom: "42px",
        }}
      >
        Cronômetro & Timer
      </h1>
    ),
    link: "https://cronometro-timer.vercel.app",
    color: "RGB(31,31,31)",
    desc: (
      <p className={styles.cardDesc} style={{ color: "#d8e6f4" }}>
        Projeto de um cronômetro e timer, foi desenvolvido como reimaginação de
        um projeto antigo meu, adicionando a opção timer e animações, foi
        desenvolvido em ReactJS
      </p>
    ),
  },
];

export const courses = [
  {
    name: "Tecnólogo - Análise e Desenvolvimento de Sistemas",
    institution: "Universidade Anhembi Morumbi (UAM)",
    date: "Fevereiro 2022 - Junho 2025",
    icon: uamIcon,
    alt: "Icon Universidade Anhembi Morumbi (UAM)",
    color: "#007C6B",
    link: "https://portal.anhembi.br/graduacao/analise-e-desenvolvimento-de-sistemas/",
  },
  {
    name: "Curso Técnico - Desenvolvimento de Sistemas",
    institution: "ETEC Professor Aprígio Gonzaga",
    date: "Fevereiro 2020 - Junho 2021",
    icon: etecIcon,
    alt: "Icon Etec",
    color: "#19347C",
    link: "https://www.cps.sp.gov.br/cursos-etec/desenvolvimento-de-sistemas/",
  },
  {
    name: "Curso ReactJS + Redux",
    institution: "Udemy / Cod3r",
    date: "Julho 2021 - Setembro 2021",
    icon: udemyIcon,
    alt: "Icon Udemy",
    color: "#a435f0",
    link: "https://www.udemy.com/certificate/UC-d7737b23-51ef-43ae-a2e7-71338090ecfd/",
  },
  {
    name: "Curso VueJS (incl. Vue Router & Vuex)",
    institution: "Udemy / Cod3r",
    date: "Fevereiro 2021 - Junho 2021",
    icon: udemyIcon,
    alt: "Icon Udemy",
    color: "#a435f0",
    link: "https://www.udemy.com/certificate/UC-4357b2c5-673d-4b48-b73c-a375e0440674/",
  },
];

export const links = [
  { name: "Home", alt: "Go to home", src: homeIcon, link: "lp-scroll" },
  {
    name: "Experience",
    alt: "Go to my experiences",
    src: codeIcon,
    link: "projects-scroll",
  },
  {
    name: "Education",
    alt: "Go to education",
    src: educationIcon,
    link: "education-scroll",
  },
  {
    name: "Technologies",
    alt: "Go to Technologies",
    src: skillsIcon,
    link: "skills-scroll",
  },
  {
    name: "Contact",
    alt: "Go to Contact",
    src: contactIcon,
    link: "contact-scroll",
  },
];

export const icons = [
  {
    src: githubIcon,
    link: "https://github.com/gabriel774",
    alt: "Acessar GitHub",
  },
  {
    src: linkedinIcon,
    link: "https://linkedin.com/in/gabriel-santos-developer",
    alt: "Acessar Linkedin",
  },
  {
    src: emailIcon,
    link: "mailto:gabrielsantossousa774@gmail.com",
    alt: "Enviar email",
  },
];

export const skillsData = [
  {
    name: "ReactJS",
    src: reactIcon,
    alt: "Icon React",
    color: "#222222",
    textColor: "#5fd9f9",
  },
  {
    name: "Laravel",
    src: laravelIcon,
    alt: "Icon Laravel",
    color: "#ef3c2d",
    textColor: "white",
  },
  {
    name: "VueJS",
    src: vueIcon,
    alt: "Icon VueJS",
    color: "#30324d",
    textColor: "#4cb987",
  },
  {
    name: "NodeJS",
    src: nodeIcon,
    alt: "Icon NodeJS",
    color: "#393939",
    textColor: "#539e43",
  },
  {
    name: "TypeScript",
    src: tsIcon,
    alt: "Icon TypeScript",
    color: "#0079cd",
    textColor: "white",
  },
  {
    name: "PHP",
    src: phpIcon,
    alt: "Icon PHP",
    color: "#4d5b92",
    textColor: "white",
  },
  {
    name: "JavaScript",
    src: jsIcon,
    alt: "Icon JavaScript",
    color: "#f0dc4e",
    textColor: "#30362e",
  },
  {
    name: "MySQL",
    src: sqlIcon,
    alt: "Icon MySQL",
    color: "#4478a2",
    textColor: "white",
  },
  {
    name: "CSS3",
    src: cssIcon,
    alt: "Icon CSS",
    color: "#32aadc",
    textColor: "white",
  },
  {
    name: "HTML5",
    src: htmlIcon,
    alt: "Icon HTML",
    color: "#f06428",
    textColor: "white",
  },
  {
    name: "Illustrator",
    src: illustratorIcon,
    alt: "Icon Illustrator",
    color: "#1b0a02",
    textColor: "#ff7919",
  },
  {
    name: "Photoshop",
    src: psIcon,
    alt: "Icon Photoshop",
    color: "#292848",
    textColor: "#23d4fe",
  },
];

export const contactLink = [
  {
    name: "LinkedIn",
    link: "https://linkedin.com/in/gabriel-santos-developer",
    color: "",
  },
  {
    name: "Resume",
    link: "https://drive.google.com/file/d/1MTn3azxuNUpQ7issfGpKa95ommQPgyUz/view?usp=sharing",
    color: contactStyles.btnpurple,
  },
  {
    name: "E-mail",
    link: "mailto:gabrielsantossousa774@gmail.com",
    color: contactStyles.btngreen,
  },
];
