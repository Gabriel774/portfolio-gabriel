import styles from '../styles/Projects.module.css'

const projects = [
    {
        name: <h1 className={styles.cardTitle} style={{ fontFamily: 'Oswald', color: 'white', fontWeight: '400', marginTop: '10px' }}> <span style={{ fontFamily: 'Oswald', color: '#3498DB' }}>N</span>UNTIUM</h1>,
        link: 'https://gabriel774.github.io/nuntium',
        color: '#2b2d42',
        desc: <p className={styles.cardDesc} style={{ color: 'white' }}>O Nuntium é um site fictício de notícias, este projeto foi desenvolvido para treino do framework VueJS, Vue Router (SPA para o Vue) e CSS flex-box.</p>,
        marginT: '10px'
    },
    {
        name: <h1 className={styles.cardTitle} style={{ fontFamily: 'arial' }}> <span style={{ color: 'blue' }}>N</span>UNTIUM</h1>,
    },
    {
        name: <h1 className={styles.cardTitle} style={{ fontFamily: 'arial' }}> <span style={{ color: 'blue' }}>N</span>UNTIUM</h1>,
    },
]

export default projects