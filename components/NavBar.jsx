import { motion } from 'framer-motion'
import * as Scroll from 'react-scroll'
import React from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import { links } from './data'

export default function Navbar() {
    let LinkReact = Scroll.Link

    const NavLink = (props) => {
        return (
            <abbr title={props.name}>
                <LinkReact to={props.link} smooth={true} duration={500}>
                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className={styles.link}
                    >
                        <Image
                            src={props.src}
                            alt={props.alt}
                            width={35}
                            height={35}
                        />
                    </motion.div>
                </LinkReact>
            </abbr>
        )
    }

    return (
        <motion.nav
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            animate={{ opacity: 1 }}
            className={styles.nav}
        >
            {links.map((dataLink, i) => {
                return <NavLink
                    key={i}
                    name={dataLink.name}
                    src={dataLink.src}
                    link={dataLink.link}
                    alt={dataLink.alt}
                />
            })}
        </motion.nav >
    )
}