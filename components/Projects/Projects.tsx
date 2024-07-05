"use client";
import { motion } from "framer-motion";
import JobHubImage from "@/assets/Project_Images/JobHub.jpg";
import ProjectCard from "./ProjectCard";
const Projects = () => {
  const projects = [
    {
      cardImg: JobHubImage,
      title: "JobHub - Job Search & Matching Platform",
      description:
        "Developed a web application to connect job seekers with employers, featuring efficient search tools and personalized matching algorithms.",
      githubLink: "https://github.com/Biolater/jobhub",
      demoLink: "https://newmain.d2uhr2kwe1sd1q.amplifyapp.com/",
    },
    {
      cardImg: JobHubImage,
      title: "JobHub - Job Search & Matching Platform",
      description:
        "Developed a web application to connect job seekers with employers, featuring efficient search tools and personalized matching algorithms.",
      githubLink: "https://github.com/Biolater/jobhub",
      demoLink: "https://newmain.d2uhr2kwe1sd1q.amplifyapp.com/",
    },
    {
      cardImg: JobHubImage,
      title: "JobHub - Job Search & Matching Platform",
      description:
        "Developed a web application to connect job seekers with employers, featuring efficient search tools and personalized matching algorithms.",
      githubLink: "https://github.com/Biolater/jobhub",
      demoLink: "https://newmain.d2uhr2kwe1sd1q.amplifyapp.com/",
    },
    {
      cardImg: JobHubImage,
      title: "JobHub - Job Search & Matching Platform",
      description:
        "Developed a web application to connect job seekers with employers, featuring efficient search tools and personalized matching algorithms.",
      githubLink: "https://github.com/Biolater/jobhub",
      demoLink: "https://newmain.d2uhr2kwe1sd1q.amplifyapp.com/",
    },
  ];
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
        <div className="projects flex gap-4 flex-wrap justify-center">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
