import { motion } from "framer-motion"
import contactIcon from '../public/img/correspondencia.png'
import styles from '../styles/contact.module.css'
import Image from 'next/image'
import vector from '../public/img/Sending-emails_Flatline.png'

export default function Contact() {
    return (
        <section id='contact' className={styles.contact}>
            <motion.h1
                className={styles.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
            >
                Contato <span className={styles.nbsp}>&nbsp;</span>
                <Image
                    height={45}
                    width={45}
                    src={contactIcon}
                    alt="Ícone Contato"
                />
            </motion.h1>
            <div className={styles.desc}>
                <motion.h2
                    className={styles.subTitle}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    Caso queira entrar em contato comigo, é só me chamar em alguns dos meios abaixo e
                    vou responder o mais rápido possível. Abaixo também é possível fazer o download do
                    meu Curriculum Vitae.
                </motion.h2>

                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <Image src={vector} alt="Vetor Email" />
                </motion.span>
            </div>
            <div className={styles.buttons}>
                <motion.a
                    href="https://www.linkedin.com/in/gabriel-santos-de-sousa-4b72aa208/"
                    style={{ margin: '15px', padding: '0', width: '100%' }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    target='_blank'
                >
                    <button className={styles.button}>Linkedin</button>
                </motion.a>

                <motion.a
                    href="mailto:gabrielsantossousa774@gmail.com"
                    style={{ margin: '15px', padding: '0', width: '100%' }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <button className={`${styles.button} ${styles.btngreen}`}>
                        E-mail
                    </button>
                </motion.a>

                <motion.a
                    href=""
                    style={{ margin: '15px', padding: '0', width: '100%' }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    target='_blank'
                >
                    <button className={`${styles.button} ${styles.btnpurple}`}>
                        Curriculum Vitae
                    </button>
                </motion.a>
            </div>
        </section>
    )
}