import styles from "../styles/Projects.module.css";
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
        a reimagined version of a challenge from the Vue.js course from COD3R.
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
        A fully functional calculator developed in the Vue.js course from COD3R.
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
    date: "Feb 2020 - Jun 2021",
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
    color: '#0A66C2',
    link: "https://linkedin.com/in/gabriel-santos-developer",
  },
  {
    name: "E-mail",
    color: '#218163',
    link: "mailto:gabrielsantossousa774@gmail.com",
  },
  {
    name: "Resume",
    color: '#30344c',
    link: "https://docs.google.com/document/d/1sRwd79RSdqV1FkebShCBLoMQsQf_OeGx/edit?usp=sharing&ouid=101426528786034359214&rtpof=true&sd=true",
  },

];

export const jobs = [
  {
    company: "OtimizeMe",
    title: "Full stack engineer",
    period: "Oct 2 023 - Present",
    description: (<div>
      <p>
        As a 𝗙𝘂𝗹𝗹-𝗦𝘁𝗮𝗰𝗸 𝗦𝗼𝗳𝘁𝘄𝗮𝗿𝗲 𝗘𝗻𝗴𝗶𝗻𝗲𝗲𝗿, I develop 𝗶𝗻𝗻𝗼𝘃𝗮𝘁𝗶𝘃𝗲 𝘀𝗼𝗹𝘂𝘁𝗶𝗼𝗻𝘀 for a 𝗣𝗮𝘆𝗺𝗲𝗻𝘁 𝗘𝗻𝗮𝗯𝗹𝗲𝗿 𝗽𝗹𝗮𝘁𝗳𝗼𝗿𝗺. My work focuses on building scalable,
        high-performance applications that enhance user experience and platform efficiency.
      </p>

      <p>
        💻 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗱 𝗮𝗻𝗱 𝗺𝗮𝗶𝗻𝘁𝗮𝗶𝗻𝗲𝗱 𝗰𝗼𝗿𝗲 𝗳𝗲𝗮𝘁𝘂𝗿𝗲𝘀 like the 𝗰𝗵𝗲𝗰𝗸𝗼𝘂𝘁 𝗮𝗽𝗽𝗹𝗶𝗰𝗮𝘁𝗶𝗼𝗻 𝗮𝗻𝗱 𝗱𝗮𝘀𝗵𝗯𝗼𝗮𝗿𝗱, enabling businesses to manage products,
        checkouts, upsells, and order bumps, driving customer engagement and acquisition.
      </p>

      <p>
        💰 P𝗹𝗮𝘆𝗲𝗱 𝗮 𝗸𝗲𝘆 𝗿𝗼𝗹𝗲 in the creation of the 𝗮𝗳𝗳𝗶𝗹𝗶𝗮𝘁𝗲, 𝘀𝘂𝗽𝗽𝗹𝗶𝗲𝗿, and 𝗮𝗳𝗳𝗶𝗹𝗶𝗮𝘁𝗶𝗼𝗻 𝗺𝗮𝗻𝗮𝗴𝗲𝗿 𝘀𝘆𝘀𝘁𝗲𝗺𝘀, significantly 𝗲𝘅𝗽𝗮𝗻𝗱𝗶𝗻𝗴 𝗽𝗹𝗮𝘁𝗳𝗼𝗿𝗺
        𝗰𝗮𝗽𝗮𝗯𝗶𝗹𝗶𝘁𝗶𝗲𝘀 and driving 𝗿𝗲𝘃𝗲𝗻𝘂𝗲 𝗴𝗿𝗼𝘄𝘁𝗵 𝗯𝘆 𝗮𝘁𝘁𝗿𝗮𝗰𝘁𝗶𝗻𝗴 𝗻𝗲𝘄 𝘂𝘀𝗲𝗿𝘀.
      </p>

      <p>
        🔧 𝗥𝗲𝗳𝗮𝗰𝘁𝗼𝗿𝗲𝗱 𝗹𝗲𝗴𝗮𝗰𝘆 𝗰𝗼𝗱𝗲, improving application performance, maintainability, and user experience,
        leading to 𝗵𝗶𝗴𝗵𝗲𝗿 𝗲𝗻𝗴𝗮𝗴𝗲𝗺𝗲𝗻𝘁 and 𝘀𝗺𝗼𝗼𝘁𝗵𝗲𝗿 𝗱𝗲𝘃𝗲𝗹𝗼𝗽𝗺𝗲𝗻𝘁 𝗳𝗼𝗿 𝗰𝘂𝗿𝗿𝗲𝗻𝘁 𝗮𝗻𝗱 𝗳𝘂𝘁𝘂𝗿𝗲 𝘁𝗲𝗮𝗺 𝗺𝗲𝗺𝗯𝗲𝗿𝘀.
      </p>
    </div>)
  },
  {
    company: "SignoWeb",
    title: "Full stack engineer",
    period: "Apr 2022 - May 2023",
    description: (<div>
      <p>
        Developed and maintained 𝘄𝗲𝗯 𝗮𝗻𝗱 𝗺𝗼𝗯𝗶𝗹𝗲 𝗮𝗽𝗽𝗹𝗶𝗰𝗮𝘁𝗶𝗼𝗻𝘀 𝗳𝗼𝗿 𝗱𝗶𝘃𝗲𝗿𝘀𝗲 𝗶𝗻𝗱𝘂𝘀𝘁𝗿𝗶𝗲𝘀, focusing on performance, scalability,
        and seamless user experiences. Worked with 𝗥𝗲𝗮𝗰𝘁𝗝𝗦, 𝗥𝗲𝗮𝗰𝘁 𝗡𝗮𝘁𝗶𝘃𝗲, 𝗣𝗛𝗣, and 𝗟𝗮𝗿𝗮𝘃𝗲𝗹, integrating third-party services
        to enhance functionality. Mentored junior developers, fostering best practices in development.
      </p>

      <p>
        🧹 𝗨𝗯𝗲𝗿-𝗹𝗶𝗸𝗲 𝗽𝗹𝗮𝘁𝗳𝗼𝗿𝗺 𝗳𝗼𝗿 𝗱𝗼𝗺𝗲𝘀𝘁𝗶𝗰 𝘀𝗲𝗿𝘃𝗶𝗰𝗲𝘀 – Led 𝗯𝗮𝗰𝗸-𝗲𝗻𝗱 𝗮𝗻𝗱 𝗺𝗼𝗯𝗶𝗹𝗲 𝗱𝗲𝘃𝗲𝗹𝗼𝗽𝗺𝗲𝗻𝘁, implementing 𝗹𝗼𝗰𝗮𝘁𝗶𝗼𝗻-𝗯𝗮𝘀𝗲𝗱 𝘀𝗲𝗿𝘃𝗶𝗰𝗲 𝗮𝘃𝗮𝗶𝗹𝗮𝗯𝗶𝗹𝗶𝘁𝘆,
        𝘂𝘀𝗲𝗿 𝗿𝗮𝘁𝗶𝗻𝗴𝘀 𝗮𝗻𝗱 𝗿𝗲𝘃𝗶𝗲𝘄𝘀, and dedicated versions for service owners and providers.
      </p>

      <p>
        🗣️ 𝗙𝗼𝗿𝗲𝗶𝗴𝗻 𝗹𝗮𝗻𝗴𝘂𝗮𝗴𝗲 𝗰𝗼𝘂𝗿𝘀𝗲 𝘄𝗲𝗯𝘀𝗶𝘁𝗲 – Developed an educational platform featuring 𝗖𝗮𝗺𝗯𝗿𝗶𝗱𝗴𝗲 𝗘𝗻𝗴𝗹𝗶𝘀𝗵 𝗰𝗲𝗿𝘁𝗶𝗳𝗶𝗰𝗮𝘁𝗶𝗼𝗻𝘀 and interactive learning resources.
      </p>
    </div>)
  }
];
