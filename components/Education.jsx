import styles from "../styles/Education.module.css";
import { motion } from "framer-motion";
import illustration from "../public/img/books.png";
import educationIcon from "../public/img/education.png";
import Image from "next/image";
import { courses } from "../components/data";

export default function Education() {
  const Course = (props) => {
    return (
      <motion.a
        target="_blank"
        rel="noreferrer"
        href={props.link}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={styles.course}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        style={{ backgroundColor: props.color }}
      >
        <Image
          src={props.icon}
          alt={props.alt}
          className={styles.courseIcon}
          width={70}
          height={70}
        />
        <div className={styles.courseText}>
          <h3 className={styles.courseName}>{props.name}</h3>
          <h4 className={styles.courseDesc}>{props.institution}</h4>
          <h4 className={styles.courseDesc}>{props.date}</h4>
        </div>
      </motion.a>
    );
  };

  return (
    <section id="education" className={styles.education}>
      <motion.h1
        className={styles.title}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Education <span className={styles.nbsp}>&nbsp;</span>
        <Image width={45} height={45} src={educationIcon} alt="Ícone Capelo" />
      </motion.h1>
      <div className={styles.desc}>
        <motion.h2
          className={styles.subTitle}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Aqui você pode conferir as principais formações e cursos que completei
          ou estou cursando, procuro sempre estudar algo novo e avançar em minha
          jornada no universo da programação.
        </motion.h2>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Image src={illustration} width={300} height={300} alt="Livros" />
        </motion.span>
      </div>
      <div className={styles.coursesContainer}>
        {courses.map((course, i) => {
          return (
            <Course
              key={i}
              name={course.name}
              institution={course.institution}
              date={course.date}
              icon={course.icon}
              color={course.color}
              alt={course.alt}
              link={course.link}
            />
          );
        })}
      </div>
    </section>
  );
}
