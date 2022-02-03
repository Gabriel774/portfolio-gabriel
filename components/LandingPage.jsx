import React, { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import avatar from '../public/img/eu.jpg'
import { motion } from 'framer-motion'
import { icons } from './data'

export default function landingPage() {
    const [text, setText] = useState("")
    const [text2, setText2] = useState("")
    const [showLine, setShowLine] = useState(false)
    const [opa, setOpa] = useState(0)

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

    const writeText = () => {
        const FullText1 = "Gabriel Santos"
        const FullText2 = "Desenvolvedor Web"

        let i = 0
        const letters = setInterval(() => {
            setText(text += FullText1[i])
            i++
            if (i == FullText1.length) {
                clearInterval(letters)
                setShowLine(true)
                i = 0
            }
        }, 75)
        setTimeout(() => {
            const letters2 = setInterval(() => {
                setText2(text2 += FullText2[i])
                i++
                if (i == FullText2.length) {
                    clearInterval(letters2)
                    setOpa(1)
                    i = 0
                }

            }, 75)
        }, 1050)
    }

    useEffect(() => {
        writeText()
    }, [])


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
            <div style={{ minHeight: '150px' }}>
                <h1 className={styles.title}>
                    {text}
                    {!showLine && <span className={styles.line}>|</span>}
                </h1>
                <h3 className={styles.subtitle}>
                    {text2}
                    {showLine && <span className={styles.line}>|</span>}
                </h3>
            </div>
            <div className={styles.iconsContainer} style={{ opacity: opa }}>
                {icons.map((icon, i) => {
                    return <Icon key={i} src={icon.src} link={icon.link} alt={icon.alt} />
                })}
            </div>
            <div style={{ opacity: opa }}>
            </div>
            <h4 className={styles.desc} style={{ opacity: opa }}>
                Adoro tecnologia desde a minha infância, com a programação  encontrei a possibilidade de
                transformar esta paixão em trabalho, desde então estudo diariamente para criar aplicações cada
                vez melhores. <br /> Abaixo você pode conferir um pouco mais do meu trabalho e informações de
                contato, muito obrigado pela sua visita!
            </h4>
        </div>
    </section>
}