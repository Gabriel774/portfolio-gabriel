import styles from '../styles/Home.module.css'
import Image from 'next/image'
import avatar from '../public/img/profile-pic.png'
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
                    Desenvolvedor Full-Stack
                </h3>
            </div>
            <div className={styles.iconsContainer}>
                {icons.map((icon, i) =>
                    <Icon
                        key={i}
                        src={icon.src}
                        link={icon.link}
                        alt={icon.alt}
                    />
                )}
            </div>
            <div>
            </div>
            <h4 className={styles.desc}>
                Sou apaixonado por tecnologia em geral desde que me conheço por gente, atuo como desenvolvedor
                há dois anos e estudo diariamente para criar aplicações cada vez melhores, comecei fazendo
                um curso técnico de Desenvolvimento de Sistemas, e atualmente estou cursando
                tecnólogo em Análise e Desenvolvimento de Sistemas na Universidade Anhembi Morumbi.
            </h4>
        </div>
    </section>
}