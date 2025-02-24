import styles from "../styles/NavMobile.module.css";
import hamburgerIcon from "../public/img/hamburger.png";
import * as Scroll from "react-scroll";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { links } from "./data";
import returnArrow from "../public/img/seta-esquerda.png";

export default function NavMobile() {
  const [modalToggle, setModalToggle] = useState(false);
  let LinkReact = Scroll.Link;

  const HamburgerButton = ({ toggle }) => {
    return (
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        className={styles.hamburger}
        onClick={() => toggle()}
      >
        <Image
          width={30}
          height={30}
          src={hamburgerIcon}
          className={styles.hamburgerIcon}
        />
      </motion.div>
    );
  };

  const Modal = ({ active }) => {
    return (
      <motion.div
        style={{ display: active ? "flex" : "none" }}
        className={styles.modal}
        id="modal"
        initial={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        animate={{ opacity: 1 }}
        onClick={(e) => {
          if (e.target.id === "modal") {
            setModalToggle(false);
            document.querySelector("html").style.overflowY = "scroll";
          }
        }}
      >
        <motion.div className={styles.menu}>
          {links.map((link) => {
            return (
              <LinkReact
                to={link.link}
                onClick={() => {
                  setModalToggle(false);
                  document.querySelector("html").style.overflowY = "scroll";
                }}
                key={link.link}
                smooth={true}
                duration={100}
              >
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  className={styles.menuLink}
                >
                  <Image src={link.src} alt={link.alt} width={35} height={35} />
                  <h3 className={styles.menuLinkTitle}>{link.name}</h3>
                </motion.div>
              </LinkReact>
            );
          })}

          <motion.div
            whileTap={{ scale: 0.9 }}
            className={styles.menuLink}
            onClick={() => {
              setModalToggle(false);
              document.querySelector("html").style.overflowY = "scroll";
            }}
          >
            <Image src={returnArrow} alt={"Go back"} width={35} height={35} />
            <h3 className={styles.menuLinkTitle}>Go back</h3>
          </motion.div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <>
      <Modal active={modalToggle} />
      <HamburgerButton
        toggle={() => {
          document.querySelector("html").style.overflow = "hidden";
          setModalToggle(true);
        }}
      />
    </>
  );
}
