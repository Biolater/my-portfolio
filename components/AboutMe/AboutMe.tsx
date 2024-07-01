'use client'
import { motion } from "framer-motion";
const variants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  transition: {
    delay: 1,
  }
};

const AboutMe = () => {
  return (
    <section id="#about" className="p-4 container">
      <motion.h1
        variants={variants}
        initial="initial"
        whileInView="whileInView"
        className="text-3xl font-bold mb-4"
      >
        About Me
      </motion.h1>
      <motion.p
        variants={variants}
        initial="initial"
        whileInView="whileInView"
        className="mb-3"
      >
        I&apos;m Murad Yusubov, a seasoned full-stack web developer with a
        strong focus on frontend technologies. Coding has been my passion since
        childhood, and every day I dive into new projects to deepen my skills.
      </motion.p>
      <motion.p
        variants={variants}
        initial="initial"
        whileInView="whileInView"
        className="mb-3"
      >
        For frontend development, I rely on React, TypeScript, Next.js, and
        Tailwind CSS to craft intuitive and sleek user interfaces. On the
        backend, I leverage Node.js, Express.js, Python, and cloud platforms
        like AWS and Firebase to build robust and scalable applications.
      </motion.p>
      <motion.p variants={variants} initial="initial" whileInView="whileInView">
        Coding isn&apos;t just a job for me it&apos;s a fundamental part of who
        I am. I can&apos;t imagine my life without it.
      </motion.p>
    </section>
  );
};

export default AboutMe;
