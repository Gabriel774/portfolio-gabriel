import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'
import styles from '../styles/Projects.module.css'
import { projects } from './data'
import vector from '../public/img/Coding-_Flatline.png'
import codeIcon from '../public/img/coding.png'

export default function Projects() {

    const Project = (props) => {
        return (
            <motion.a
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1 }}
                className={styles.containerB}
                style={{ zIndex: props.zIndex }}
                href={props.link}
                target='_blank'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.65 }}
            >
                <div className={styles.card} style={{ background: props.color }}>
                    {props.name}
                    {props.desc}
                </div>
            </motion.a>
        )
    }

    return (
        <section id='projects' className={styles.projects}>
            <h1 className={styles.title}>Projetos &nbsp; <Image height={45} width={45} alt='Ícone Projetos' src={codeIcon} /> </h1>
            <div className={styles.projectsDescContainer}>
                <h2 className={styles.subTitle}>Abaixo você pode conferir alguns dos projetos que já fiz
                    (clique para acessá-los), em geral, gosto de desenvolver projetos originais já que usam
                    mais da minha criatividade. Confira também o meu <a
                        style={{ textDecoration: 'underline', color: 'rgb(70, 70, 192)' }}
                        target='_blank'
                        href="https://github.com/gabriel774"
                    >
                        GitHub
                    </a>.</h2>
                <Image src={vector} className={styles.vector} />
            </div>
            <motion.div className={styles.container}>
                {projects.map((project, i) => {
                    return <Project
                        key={i}
                        zIndex={projects.length - i}
                        name={project.name}
                        desc={project.desc}
                        link={project.link}
                        color={project.color}
                    />
                }
                )}
            </motion.div>
        </section>
    )
}