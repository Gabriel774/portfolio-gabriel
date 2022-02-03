import { motion } from "framer-motion"
import skillsIcon from '../public/img/habilidades.png'
import styles from '../styles/skills.module.css'
import Image from 'next/image'

export default function skills() {
    return (
        <section className={styles.skills} id='skills'>
            <motion.h1
                className={styles.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.6 }}
            >
                Tecnologias &nbsp; <Image height={45} width={45} src={skillsIcon} />
            </motion.h1>
        </section>
    )
}