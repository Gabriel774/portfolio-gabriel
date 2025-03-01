import { motion } from "framer-motion";
import contactIcon from "../public/img/correspondencia.png";
import styles from "../styles/contact.module.css";
import Image from "next/image";
import vector from "../public/img/Sending-emails_Flatline.png";
import { contactLink } from "./data";

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <motion.h1
        className={styles.title}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Contact <span className={styles.nbsp}>&nbsp;</span>
        <Image height={45} width={45} src={contactIcon} alt="Ícone Contato" />
      </motion.h1>
      <div className={styles.desc}>
        <motion.h2
          className={styles.subTitle}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Let’s chat! Feel free to reach out through any of the contacts below, and you can also download my resume.
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
        {contactLink.map((contact) => {
          return (
            <motion.a
              href={contact.link}
              className={styles.buttonContainer}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              target="_blank"
              rel="noreferrer"
              key={contact.name}
            >
              <button className={`${styles.button}`}>
                <Image height={100} width={100} src={contact.icon} alt="icon" />
                {contact.name}
              </button>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}
