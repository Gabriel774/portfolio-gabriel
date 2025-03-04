import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import styles from "../styles/Projects.module.css";
import { projects, jobs } from "./data";
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

  const Job = (props) => {
    return (
      <motion.a
        whileHover={{ scale: 1.1 }}
        className={styles.job}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className={styles.jobHeader}>
          <h2 className={styles.jobCompany}>
            {props.job.company} • {props.job.title}
          </h2>

          <p className={styles.jobPeriod}>
            {props.job.period}
          </p>
        </div>

        <div className={styles.jobDescription}>
          {props.job.description}
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
        Experience <span className={styles.nbsp}>&nbsp;</span>{" "}
        <Image height={45} width={45} alt="Experience Icon" src={codeIcon} />
      </motion.h1>
      <div className={styles.projectsDescContainer}>
        <motion.h2
          className={styles.subTitle}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Below are some of my full-time roles so far.
          I am 𝗰𝗼𝗺𝗺𝗶𝘁𝘁𝗲𝗱 𝘁𝗼 𝗮𝗱𝗱𝗶𝗻𝗴 𝘃𝗮𝗹𝘂𝗲 𝘁𝗼 𝗲𝘃𝗲𝗿𝘆 𝗽𝗿𝗼𝗱𝘂𝗰𝘁 𝗜 𝘄𝗼𝗿𝗸 on by writing clean, maintainable code,
          implementing tests, and refactoring legacy code to improve performance and scalability.
        </motion.h2>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Image src={vector} alt="Projects" className={styles.vector} />
        </motion.span>
      </div>

      <motion.div className={styles.jobs}>
        {jobs.map((job) => {
          return (
            <Job
              key={job.company}
              job={job}
            />
          );
        })}
      </motion.div>

      <motion.h1
        className={styles.sectionTitle}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Personal Projects
      </motion.h1>

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
