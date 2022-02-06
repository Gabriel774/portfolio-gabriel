import styles from '../styles/Projects.module.css'
import homeIcon from '../public/img/home.png'
import codeIcon from '../public/img/coding.png'
import skillsIcon from '../public/img/habilidades.png'
import contactIcon from '../public/img/correspondencia.png'
import githubIcon from '../public/img/25231.png'
import linkedinIcon from '../public/img/linkedin.png'
import emailIcon from '../public/img/email.png'
import jsIcon from '../public/img/js.png'
import cssIcon from '../public/img/css.png'
import reactIcon from '../public/img/logo-react-icon.png'
import vueIcon from '../public/img/vue-logo.png'
import htmlIcon from '../public/img/html.png'
import phpIcon from '../public/img/php.png'
import illustratorIcon from '../public/img/ai.png'
import tsIcon from '../public/img/ts.png'
import sqlIcon from '../public/img/sql.png'
import psIcon from '../public/img/ps.png'


export const projects = [
    {
        name: <h1 className={styles.cardTitle} style={{ fontFamily: 'Oswald', color: 'white', fontWeight: '400', marginTop: '10px' }}> <span style={{ fontFamily: 'Oswald', color: '#3498DB' }}>N</span>UNTIUM</h1>,
        link: 'https://gabriel774.github.io/nuntium',
        color: '#2b2d42',
        desc: <p className={styles.cardDesc} style={{ color: 'white' }}>O Nuntium é um projeto original de site um fictício de notícias, foi desenvolvido para treino do framework VueJS, Vue Router (SPA para o Vue) e CSS flex-box.</p>,
    },
    {
        name: <h1 className={`${styles.cardTitle} ${styles.minorText}`} style={{ fontFamily: 'Major Mono Display', color: 'black', marginTop: '10px', marginTop: '25px', marginBottom: '39px' }}>ProcuraBooks</h1>,
        link: 'https://gabriel774.github.io/ProcuraBooks',
        color: '#ff8331',
        desc: <p className={styles.cardDesc} style={{ color: 'black' }}>ProcuraBooks é um projeto original de um sebo fictício, foi desenvolvido para treinar o desenvolvimento de uma LandingPage com VueJS.</p>,
    },
    {
        name: <h1 className={`${styles.cardTitle} ${styles.minorText}`} style={{ fontFamily: 'Roboto mono', color: 'black', marginTop: '10px', marginTop: '25px', marginBottom: '39px', color: 'white' }}>CALCULADORA<span style={{ color: 'rgb(65, 184, 131)' }}>VUE</span></h1>,
        link: 'https://gabriel774.github.io/calculadora-vue/',
        color: 'linear-gradient(90deg,#283e51,#4b79a1)',
        desc: <p className={styles.cardDesc} style={{ color: 'white' }}>Uma calculadora totalmente funcional, foi desenvolvida em resposta ao curso de VueJS da COD3R.</p>,
    },
    {
        name: <h1 className={`${styles.cardTitle} ${styles.minorTextB}`} style={{ fontFamily: "'Press Start 2P', cursive", color: '#d8e6f4', marginTop: '10px', marginTop: '40px', marginBottom: '42px' }}>MatadorDeMonstros</h1>,
        link: 'https://gabriel774.github.io/MatadorDeMonstros/',
        color: '#30344c',
        desc: <p className={styles.cardDesc} style={{ color: '#d8e6f4' }}>Um jogo de turnos no qual seu objetivo é derrotar um monstro, foi desenvolvido em resposta a um desafio do curso da COD3R de VueJS.</p>,
    },
]

export const links = [
    { name: 'Início', alt: 'Ir para o início', src: homeIcon, link: 'lp' },
    { name: 'Projetos', alt: 'Ir para os projetos', src: codeIcon, link: 'projects' },
    { name: 'Tecnologias', alt: 'Ir para tecnologias', src: skillsIcon, link: 'skills' },
    { name: 'Contato', alt: 'Ir para contatos', src: contactIcon, link: 'contact' },
]

export const icons = [
    { src: githubIcon, link: 'https://github.com/gabriel774', alt: 'Acessar GitHub' },
    { src: linkedinIcon, link: 'https://www.linkedin.com/in/gabriel-santos-de-sousa-4b72aa208/', alt: 'Acessar Linkedin' },
    { src: emailIcon, link: 'mailto:gabrielsantossousa774@gmail.com', alt: 'Enviar email' }
]

export const skillsData = [
    { name: 'JavaScript', src: jsIcon, alt: 'Ícone JavaScript', color: '#f0dc4e', textColor: '#30362e' },
    { name: 'CSS3', src: cssIcon, alt: 'Ícone CSS', color: '#32aadc', textColor: 'white' },
    { name: 'HTML5', src: htmlIcon, alt: 'Ícone HTML', color: '#f06428', textColor: 'white' },
    { name: 'ReactJS', src: reactIcon, alt: 'Ícone React', color: '#222222', textColor: '#5fd9f9' },
    { name: 'VueJS', src: vueIcon, alt: 'Ícone VueJS', color: '#30324d', textColor: '#4cb987' },
    { name: 'PHP', src: phpIcon, alt: 'Ícone PHP', color: '#4d5b92', textColor: 'white' },
    { name: 'Illustrator', src: illustratorIcon, alt: 'Ícone Illustrator', color: '#1b0a02', textColor: '#ff7919' },
    { name: 'MySQL', src: sqlIcon, alt: 'Ícone MySQL', color: '#4478a2', textColor: 'white' },
    { name: 'Photoshop', src: psIcon, alt: 'Ícone Photoshop', color: '#292848', textColor: '#23d4fe' },
    { name: 'TypeScript', src: tsIcon, alt: 'Ícone PHP', color: '#0079cd', textColor: 'white' },
]