import styles from '../styles/Home.module.css'
import Image from 'next/image'
import avatar from '../public/img/eu.jpg'
import { motion } from 'framer-motion'
import { icons } from './data'

export default function landingPage() {

    const Icon = (props) => {
        return (
            <motion.a
                style={{ position: 'relative', margin: '0px 10px' }}
                whileHover={{ top: -10 }}
                href={props.link}
                target='_blank'

            >
                <Image
                    src={props.src}
                    height={65}
                    width={65}
                    alt={props.alt}
                />
            </motion.a>
        )
    }

    return <section id='lp' className={styles.landingPage}>
        <div className={styles.banner} />
        <div className={styles.content}>
            <Image
                height={250}
                width={250}
                src={avatar}
                alt='Avatar'
                className={styles.img}
            />
            <div style={{ minHeight: '150px' }} >
                <h1 className={styles.title}>
                    Gabriel Santos
                </h1>
                <h3 className={styles.subtitle}>
                    Desenvolvedor
                </h3>
            </div>
            <div className={styles.iconsContainer}>
                {icons.map((icon, i) => {
                    return <Icon key={i} src={icon.src} link={icon.link} alt={icon.alt} />
                })}
            </div>
            <div>
            </div>
            <h4 className={styles.desc}>
                Adoro tecnologia desde a minha infância, após fazer um curso técnico de Análise e
                Desenvolvimento de Sistemas descobri a programação e com ela encontrei a possibilidade de
                transformar esta paixão em trabalho, desde então estudo diariamente para criar aplicações cada
                vez melhores. <br /> Abaixo você pode conferir um pouco mais do meu trabalho e informações de
                contato, muito obrigado pela sua visita!
            </h4>
        </div>
    </section>
}