import React, { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import avatar from '../public/img/eu.jpg'
import githubIcon from '../public/img/iconmonstr-github-1.svg'
import linkedinIcon from '../public/img/linkedin.png'
import emailIcon from '../public/img/email.png'

export default function landingPage() {
    const [text, setText] = useState("")
    const [text2, setText2] = useState("")
    const [showLine, setShowLine] = useState(false)
    const [opa, setOpa] = useState(0)

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
        }, 100)
        setTimeout(() => {
            const letters2 = setInterval(() => {
                setText2(text2 += FullText2[i])
                i++
                if (i == FullText2.length) {
                    clearInterval(letters2)
                    setOpa(1)
                    i = 0
                }

            }, 100)
        }, 1400)
    }

    useEffect(() => {
        writeText()
    }, [])


    return <section id='lp' className={styles.landingPage}>
        <div className={styles.banner} />
        <div className={styles.content}>
            <Image height={250} width={250} src={avatar} className={styles.img} />
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
            <div style={{ opacity: opa }}>
            </div>
            <h4 className={styles.desc} style={{ opacity: opa }}>Adoro tecnologia desde a minha infância, com a programação  encontrei a possibilidade de transformar essa paixão em trabalho, desde então estudo diariamente para criar aplicações cada vez melhores. <br /> Abaixo você pode conferir um pouco mais do meu trabalho e informações de contato, Muito obrigado pela sua visita!</h4>
        </div>
    </section>
}