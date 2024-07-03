import { Card, CardHeader, CardContent } from "../ui/card";
import HTML_LOGO from "@/assets/Skills/HTML_LOGO.png";
import CSS_LOGO from "@/assets/Skills/CSS_LOGO.png";
import JS_LOGO from "@/assets/Skills/JS_LOGO.png";
import TS_LOGO from "@/assets/Skills/TYPESCRIPT_LOGO.png";
import TAILWINDCSS_LOGO from "@/assets/Skills/TAILWINDCSS_LOGO.png";
import AWS_LOGO from "@/assets/Skills/AWS_LOGO.jpg";
import Image from "next/image";
const SKILLS = [
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
    name: "Python",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
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
    name: "Tailwind CSS",
    logo: TAILWINDCSS_LOGO,
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
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
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
    name: "Express.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "Redux Toolkit",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  }
];
const Skills = () => {
  return (
    <section id="skills" className="px-4 py-6 container mx-auto md:py-12">
      <div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
          My Skills
        </h2>
        <div className="skills justify-center flex flex-wrap gap-4">
          {SKILLS.map((skill, index) => (
            <Card
              className="max-w-[230px] w-full transition-all origin-bottom duration-300 hover:scale-[1.05] md:hover:scale-[1.03] min-w-[150px]"
              key={index}
            >
              <CardHeader className="items-center justify-center">
                <Image
                  quality={100}
                  className="h-[100px] object-cover"
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
