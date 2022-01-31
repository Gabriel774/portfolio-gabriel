import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'
import styles from '../styles/Projects.module.css'
import data from './data'
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
            >
                <div className={styles.card} style={{ background: props.color }}>
                    {props.name}
                    {props.desc}
                </div>
            </motion.a>
        )
    }

    return (
        <section className={styles.projects}>
            <h1 className={styles.title}>Projetos &nbsp; <Image height={45} width={45} src={codeIcon} /> </h1>
            <div className={styles.projectsDescContainer}>
                <h2 className={styles.subTitle}>Abaixo você pode conferir alguns dos projetos que já fiz (clique para acessá-los). Confira também o meu <a style={{ textDecoration: 'underline', color: 'rgb(70, 70, 192)' }} target='_blank' href="https://github.com/gabriel774">GitHub</a>.</h2>
                <Image src={vector} className={styles.vector} />
            </div>
            <motion.div initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                className={styles.container}>
                {data.map((project, i) => {
                    return <Project
                        key={i}
                        zIndex={data.length - i}
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