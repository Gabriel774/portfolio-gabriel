import { motion } from "framer-motion";
import * as Scroll from "react-scroll";
import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { links } from "./data";


export default function Navbar() {
  let LinkReact = Scroll.Link;

  const NavLink = (props) => {
    const [showTooltip, setShowTooltip] = useState(false);

    return (
      <div className={styles.navLinkContainer}>
        <LinkReact to={props.link} smooth={true} duration={100}>
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onMouseOver={() => setShowTooltip(true)}
            onMouseOut={() => setShowTooltip(false)}
            className={styles.link}
          >
            <Image src={props.src} alt={props.alt} width={35} height={35} />
          </motion.div>
        </LinkReact>
        <motion.div
          style={{ display: showTooltip ? "flex" : "none" }}
          className={styles.tooltip}
        >
          {props.name}
        </motion.div>
      </div>
    );
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      animate={{ opacity: 1 }}
      className={styles.nav}
    >
      {links.map((dataLink, i) => {
        return (
          <NavLink
            key={i}
            name={dataLink.name}
            src={dataLink.src}
            link={dataLink.link}
            alt={dataLink.alt}
          />
        );
      })}
    </motion.nav>
  );
}
