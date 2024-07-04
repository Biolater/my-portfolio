import { Hero, AboutMe, Skills, Projects } from "@/components/index";
export default function Home() {
  return (
    <main className="flex flex-col gap-10">
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
    </main>
  );
}
