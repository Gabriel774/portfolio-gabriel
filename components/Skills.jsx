import { motion } from "framer-motion"
import skillsIcon from '../public/img/habilidades.png'
import styles from '../styles/skills.module.css'
import Image from 'next/image'
import ilustration from '../public/img/skills.png'
import { skillsData } from "./data"

export default function skills() {

    const Skill = (props) => {
        return (
            <motion.div
                className={styles.skill}
                style={{ backgroundColor: props.color }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ scale: 1.2 }}
            >
                <Image
                    src={props.src}
                    alt={props.alt}
                    className={styles.icon}
                />
                <h3 style={{ color: props.textColor, fontSize: '22pt' }}>{props.name}</h3>
            </motion.div>
        )
    }

    return (
        <section className={styles.skills} id='skills'>
            <motion.h1
                className={styles.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
            >
                Tecnologias <span className={styles.nbsp}>&nbsp;</span> <Image height={45} width={45} src={skillsIcon} />
            </motion.h1>
            <div className={styles.desc}>
                <motion.h2
                    className={styles.subTitle}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}>
                    Abaixo você pode conferir as Tecnologias e Ferramentas com as quais eu trabalho.
                    Diariamente estou empenhado em aprender coisas novas e evoluir, para assim desenvolver
                    aplicações cada vez melhores.
                </motion.h2>
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <Image src={ilustration} width={300} height={300} alt="Roda de Tecnologias" />
                </motion.span>
            </div>

            <div className={styles.skillsContainer}>
                {skillsData.map((skill, i) => {
                    return <Skill
                        key={i}
                        name={skill.name}
                        src={skill.src}
                        alt={skill.alt}
                        color={skill.color}
                        textColor={skill.textColor}
                    />
                })}
            </div>
        </section>
    )
}