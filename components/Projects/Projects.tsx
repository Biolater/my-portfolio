"use client";
import JobHubImage from "@/assets/Project_Images/JobHub.jpg";
import SpaceImage from "@/assets/Project_Images/SpaceImage.jpg";
import GamingImage from "@/assets/Project_Images/GamingImage.png";
import CompanyImage from "@/assets/Project_Images/CompanyImage.jpg";
import HealthBarImage from "@/assets/Project_Images/HealthBarImage.jpg";
import BudgetBuddyImage from "@/assets/Project_Images/BudgetBuddyApp.jpg";
import ProjectCard from "./ProjectCard";
import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

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
      cardImg: HealthBarImage,
      title: "Health Bar - Health Awareness Platform",
      description:
        "Developed a web application to promote health awareness, featuring health news, diseases & conditions information, an AI-powered symptom checker, community interactions, and personalized user accounts.",
      githubLink: "https://github.com/Biolater/Health-Bar",
      demoLink: "https://main.dt7psbukvsr7k.amplifyapp.com/",
    },
    {
      cardImg: BudgetBuddyImage,
      title: "Student Budget Buddy",
      description:
        "Developed a web application to help students manage their finances, featuring expense tracking, budget management, financial insights, savings goals, and educational resources, built with Next.js, TypeScript, and Tailwind CSS.",
      githubLink: "https://github.com/Biolater/Student-Budget-Buddy",
      demoLink: "https://student-bugdet-buddy-lyje.vercel.app/",
    },

    {
      cardImg: GamingImage,
      title: "OnlyGamers Inc. - Gaming Platform",
      description:
        "Developed a marketplace for gamers to connect with top players via instructional videos, with a polished UI, Stripe integration, and GraphQL APIs.",
      githubLink: null,
      demoLink: "https://www.only-gamers.com/",
    },
  ];
  const [projectsInView, setProjectsInView] = useState(false);
  const projectsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(projectsRef);
  useEffect(() => {
    if (isInView && !projectsInView) {
      setProjectsInView(true);
    }
  }, [isInView, projectsInView]);
  return (
    <section
      id="projects"
      className="px-4 max-w-7xl py-6 md:py-12 container mx-auto"
    >
      <div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
          Projects.
        </h2>
        <motion.div
          ref={projectsRef}
          className="projects flex gap-4 flex-wrap justify-center"
        >
          {projects.map((project, index) => (
            <motion.div
              className="sm:max-w-[287px] md:max-w-[300px]"
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: projectsInView ? 1 : 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
              key={index}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
