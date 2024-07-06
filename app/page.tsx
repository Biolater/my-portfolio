import { Hero, AboutMe, Skills, Projects, Contact } from "@/components/index";
export default function Home() {
  return (
    <main className="flex flex-col gap-10">
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
