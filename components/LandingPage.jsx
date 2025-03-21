import styles from "../styles/Home.module.css";
import Image from "next/image";
import avatar from "../public/img/profile-pic.png";
import { motion } from "framer-motion";
import { icons } from "./data";

export default function landingPage() {
  const Icon = (props) => {
    return (
      <motion.a
        style={{ position: "relative", margin: "0px 10px" }}
        whileHover={{ top: -10 }}
        href={props.link}
        target="_blank"
      >
        <Image src={props.src} height={65} width={65} alt={props.alt} />
      </motion.a>
    );
  };

  return (
    <section id="lp" className={styles.landingPage}>
      <div className={styles.content}>
        <Image
          height={250}
          width={250}
          src={avatar}
          alt="Avatar"
          className={styles.img}
        />
        <div style={{ minHeight: "150px" }}>
          <h1 className={styles.title}>Gabriel Santos</h1>
          <h3 className={styles.subtitle}>Full Stack Developer</h3>
        </div>
        <div className={styles.iconsContainer}>
          {icons.map((icon, i) => (
            <Icon key={i} src={icon.src} link={icon.link} alt={icon.alt} />
          ))}
        </div>
        <div></div>
        <h4 className={styles.desc}>
          I’m a 𝘀𝗼𝗳𝘁𝘄𝗮𝗿𝗲 𝗱𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿 with 4 𝘆𝗲𝗮𝗿𝘀 𝗼𝗳 𝗲𝘅𝗽𝗲𝗿𝗶𝗲𝗻𝗰𝗲 designing and building scalable,
          high-performance applications for both web and mobile platforms.
          I specialize in full-stack development, crafting engaging user
          interfaces and robust back-end systems that drive business success.
        </h4>
      </div>
      <div
        className={styles.scrollLink}
        style={{ marginBottom: 20 }}
        id="projects-scroll"
      />
    </section>
  );
}
