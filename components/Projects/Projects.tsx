"use client";
import JobHubImage from "@/assets/Project_Images/JobHub.jpg";
import SpaceImage from "@/assets/Project_Images/SpaceImage.jpg";
import GamingImage from "@/assets/Project_Images/GamingImage.png";
import CompanyImage from "@/assets/Project_Images/CompanyImage.jpg";
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
      cardImg: SpaceImage,
      title: "SpaceOne - Discover Space with NASA APIs",
      description:
        "Developed a web application to explore space news, view NASA's Astronomy Picture of the Day, and connect with a community through real-time messaging.",
      githubLink: "https://github.com/Biolater/space-one",
      demoLink: "https://space-one-15043.web.app/",
    },
    {
      cardImg: GamingImage,
      title: "OnlyGamers Inc. - Gaming Platform",
      description:
        "Developed a marketplace for gamers to connect with top players via instructional videos, with a polished UI, Stripe integration, and GraphQL APIs.",
      githubLink: null,
      demoLink: "https://www.only-gamers.com/",
    },
    {
      cardImg: CompanyImage,
      title: "CompanyEasier - Find & Track Company Info",
      description:
        "Created a platform for users to search and favorite companies, view related news, and manage accounts using React, Firebase, and REST APIs.",
      githubLink: "https://github.com/Biolater/companyEasierFireBase",
      demoLink: "https://companyeasier.web.app/",
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
    <section id="projects" className="px-4 py-6 md:py-12 container mx-auto">
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
              transition={{ duration: 0.5, delay: index * 0.2 }}
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
