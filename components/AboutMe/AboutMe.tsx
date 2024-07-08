"use client";
import { motion } from "framer-motion";
import AboutMeSvg from "./AboutMeSvg";
const variants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
};

const AboutMe = () => {
  return (
    <section id="about" className="px-4 max-w-7xl flex flex-col mx-auto md:flex-row justify-center items-center gap-8 py-6 md:py-12 container">
      <div className="md:basis-[50%]">
        <motion.h2
          initial={variants.initial}
          whileInView={variants.whileInView}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
        >
          About.
        </motion.h2>
        <motion.p
          initial={variants.initial}
          whileInView={variants.whileInView}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="mb-3 sm:text-lg lg:text-xl"
        >
          I&apos;m Murad Yusubov, a seasoned full-stack web developer with a
          strong focus on frontend technologies. Coding has been my passion
          since childhood, and every day I dive into new projects to deepen my
          skills.
        </motion.p>
        <motion.p
          initial={variants.initial}
          whileInView={variants.whileInView}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="mb-3 sm:text-lg lg:text-xl"
        >
          For frontend development, I rely on React, TypeScript, Next.js, and
          Tailwind CSS to craft intuitive and sleek user interfaces. On the
          backend, I leverage Node.js, Express.js, Python, and cloud platforms
          like AWS and Firebase to build robust and scalable applications.
        </motion.p>
        <motion.p
          className="sm:text-lg lg    :text-xl"
          initial={variants.initial}
          whileInView={variants.whileInView}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
        >
          Coding isn&apos;t just a job for me it&apos;s a fundamental part of
          who I am. I can&apos;t imagine my life without it.
        </motion.p>
      </div>
      <motion.div
        initial={variants.initial}
        whileInView={variants.whileInView}
        transition={{ duration: 0.5, delay: 0.8 }}
        viewport={{ once: true }}
        className="max-w-[350px] md:basis-[50%] w-full mx-auto"
      >
        <AboutMeSvg className="w-full h-full" />
      </motion.div>
    </section>
  );
};

export default AboutMe;
