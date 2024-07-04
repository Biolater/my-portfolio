"use client";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section id="projects" className="px-4 py-6 md:py-12 container mx-auto">
      <div>
        <motion.h2
          initial={{
            opacity: 0,
            y: 100,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
        >
          My Projects
        </motion.h2>
      </div>
    </section>
  );
};

export default Projects;
