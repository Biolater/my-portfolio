"use client";
import { Card, CardHeader, CardContent } from "../ui/card";
import HTML_LOGO from "@/assets/Skills/HTML_LOGO.png";
import CSS_LOGO from "@/assets/Skills/CSS_LOGO.png";
import JS_LOGO from "@/assets/Skills/JS_LOGO.png";
import TS_LOGO from "@/assets/Skills/TYPESCRIPT_LOGO.png";
import TAILWINDCSS_LOGO from "@/assets/Skills/TAILWINDCSS_LOGO.png";
import AWS_LOGO from "@/assets/Skills/AWS_LOGO.jpg";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
const MY_SKILLS = [
  {
    name: "HTML",
    logo: HTML_LOGO,
  },
  {
    name: "CSS",
    logo: CSS_LOGO,
  },
  {
    name: "JavaScript",
    logo: JS_LOGO,
  },
  {
    name: "TypeScript",
    logo: TS_LOGO,
  },
  {
    name: "React.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Redux Toolkit",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  },
  {
    name: "Tailwind CSS",
    logo: TAILWINDCSS_LOGO,
  },
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "AWS",
    logo: AWS_LOGO,
  },
  {
    name: "Firebase",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "PostgreSQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "Python",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "pandas",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Pandas_logo.svg/1280px-Pandas_logo.svg.png",
    objectFit: "contain",
  },
  {
    name: "NumPy",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
  },
  {
    name: "Matplotlib",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg",
  },
  {
    name: "scikit-learn",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/500px-Scikit_learn_logo_small.svg.png",
  },
];

const Skills = () => {
  const [skillsInView, setSkillsInView] = useState(false);
  const skillsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(skillsRef);
  useEffect(() => {
    if (isInView && !skillsInView) {
      setSkillsInView(true);
    }
  }, [isInView, skillsInView]);
  return (
    <section
      id="skills"
      className="px-4 py-6 container max-w-7xl mx-auto md:py-12"
    >
      <div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
          Skills.
        </h2>
        <motion.div
          layout
          ref={skillsRef}
          className="skills justify-center flex flex-wrap gap-4"
        >
          {MY_SKILLS.map((skill, index) => (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: skillsInView ? 1 : 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              key={index}
              className="card__container w-[250px] sm:w-full sm:max-w-[230px] min-w-[150px]"
            >
              <Card className="w-full transition-all origin-bottom duration-300 hover:scale-[1.05] md:hover:scale-[1.03]">
                <CardHeader className="items-center justify-center">
                  <Image
                    quality={100}
                    className={`h-[100px] object-contain`}
                    width={100}
                    height={100}
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                  />
                </CardHeader>
                <CardContent>
                  <p className="text-center">{skill.name}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
