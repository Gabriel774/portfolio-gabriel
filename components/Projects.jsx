import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import styles from "../styles/Projects.module.css";
import { projects } from "./data";
import vector from "../public/img/Coding-_Flatline.png";
import codeIcon from "../public/img/coding.png";

export default function Projects() {
  const Project = (props) => {
    return (
      <motion.a
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1 }}
        className={styles.containerB}
        style={{ zIndex: props.zIndex }}
        href={props.link}
        target="_blank"
        rel="noreferrer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className={styles.card} style={{ background: props.color }}>
          {props.name}
          {props.desc}
        </div>
      </motion.a>
    );
  };

  return (
    <section id="projects" className={styles.projects}>
      <motion.h1
        className={styles.title}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Projetos <span className={styles.nbsp}>&nbsp;</span>{" "}
        <Image height={45} width={45} alt="Ícone Projetos" src={codeIcon} />
      </motion.h1>
      <div className={styles.projectsDescContainer}>
        <motion.h2
          className={styles.subTitle}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Abaixo você pode conferir alguns dos projetos que já fiz (clique para
          acessá-los), inclui meus projetos pessoais e profissionais. Já
          trabalhei nos mais diversos projetos incluindo APIs, Web sites e
          aplicações mobile. Confira também o meu{" "}
          <a
            style={{ textDecoration: "underline", color: "rgb(70, 70, 192)" }}
            target="_blank"
            rel="noreferrer"
            href="https://github.com/gabriel774"
          >
            GitHub
          </a>
          .
        </motion.h2>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Image src={vector} alt="Vetor projetos" className={styles.vector} />
        </motion.span>
      </div>
      <motion.div className={styles.container}>
        {projects.map((project, i) => {
          return (
            <Project
              key={i}
              zIndex={projects.length - i}
              name={project.name}
              desc={project.desc}
              link={project.link}
              color={project.color}
            />
          );
        })}
      </motion.div>
    </section>
  );
}
