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
import tsIcon from "../public/img/ts.png";
import sqlIcon from "../public/img/sql.png";
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
      <span style={{ width: 120, height: 85, marginTop: 5, marginBottom: 15 }}>
        <Image src={traderLogo} width={120} height={85} alt="Trader" />
      </span>
    ),
    link: "https://trader-project.vercel.app/register",
    color: "rgb(46, 46, 46)",
    desc: (
      <p className={styles.cardDesc} style={{ color: "white" }}>
        Trader is a simulation of a day trading website. This is a full-stack project, inspired by
        a reimagined version of a challenge from COD3R's Vue.js course.
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
        <span style={{ color: "rgb(65, 184, 131)" }}>VUE</span>CALCULATOR
      </h1>
    ),
    link: "https://gabriel774.github.io/calculadora-vue/",
    color: "linear-gradient(90deg,#283e51,#4b79a1)",
    desc: (
      <p className={styles.cardDesc} style={{ color: "white" }}>
        A fully functional calculator developed in COD3R's Vue.js course.
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
        Stopwatch & Timer
      </h1>
    ),
    link: "https://cronometro-timer.vercel.app",
    color: "RGB(31,31,31)",
    desc: (
      <p className={styles.cardDesc} style={{ color: "#d8e6f4" }}>
        A stopwatch and timer project, developed as a reimagining of an old project of mine, adding a timer option and animations. Built with ReactJS.
      </p>
    ),
  },
];

export const courses = [
  {
    name: "Technologist - Software development",
    institution: "Universidade Anhembi Morumbi (UAM)",
    date: "Feb 2022 - Dec 2024",
    icon: uamIcon,
    alt: "Universidade Anhembi Morumbi (UAM)",
    color: "#007C6B",
    link: "https://portal.anhembi.br/graduacao/analise-e-desenvolvimento-de-sistemas/",
  },
  {
    name: "Technical diploma - Computer software engineering",
    institution: "ETEC Professor Aprígio Gonzaga",
    date: "Fevereiro 2020 - Junho 2021",
    icon: etecIcon,
    alt: "Icon Etec",
    color: "#19347C",
    link: "https://www.cps.sp.gov.br/cursos-etec/desenvolvimento-de-sistemas/",
  },
  {
    name: "ReactJS COD3R Course",
    institution: "Udemy / Cod3r",
    date: "Apr 2021",
    icon: udemyIcon,
    alt: "Icon Udemy",
    color: "#a435f0",
    link: "https://www.udemy.com/certificate/UC-d7737b23-51ef-43ae-a2e7-71338090ecfd/",
  },
  {
    name: "VueJS COD3r Course",
    institution: "Udemy / Cod3r",
    date: "Dec 2020",
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
    name: "VueJS",
    src: vueIcon,
    alt: "Icon VueJS",
    color: "#30324d",
    textColor: "#4cb987",
  },
  {
    name: "JavaScript",
    src: jsIcon,
    alt: "Icon JavaScript",
    color: "#f0dc4e",
    textColor: "#30362e",
  },
  {
    name: "TypeScript",
    src: tsIcon,
    alt: "Icon TypeScript",
    color: "#0079cd",
    textColor: "white",
  },
  {
    name: "NodeJS",
    src: nodeIcon,
    alt: "Icon NodeJS",
    color: "#393939",
    textColor: "#539e43",
  },
  {
    name: "Laravel",
    src: laravelIcon,
    alt: "Icon Laravel",
    color: "#ef3c2d",
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
];

export const contactLink = [
  {
    name: "LinkedIn",
    icon: linkedinIcon,
    link: "https://linkedin.com/in/gabriel-santos-developer",
  },
  {
    name: "E-mail",
    link: "mailto:gabrielsantossousa774@gmail.com",
  },
  {
    name: "Resume",
    link: "https://docs.google.com/document/d/1sRwd79RSdqV1FkebShCBLoMQsQf_OeGx/edit?usp=sharing&ouid=101426528786034359214&rtpof=true&sd=true",
  },

];
