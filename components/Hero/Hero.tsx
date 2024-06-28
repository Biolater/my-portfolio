import { Button } from "@/components/ui/button";
const Hero = () => {
  return (
    <>
      <h1 className="font-medium text-2xl mb-6">
        Hi, I am
        <br />
        <span className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-red-500 to-pink-600 font-semibold">
          Murad Yusubov
        </span>
        ,
        <br />
        Fullstack web developer
      </h1>
      <p className="mb-2 block text-lg">
        A full-stack web developer who loves to code. Skilled in React, Next.js,
        Tailwind CSS, Node.js, AWS, and various databases.
      </p>
      <div className="buttons flex items-center gap-2 justify-center">
        <Button>Resume</Button>
        <Button asChild variant={"outline"}>
          <a target="_blank" href="https://github.com/Biolater">
            Github
          </a>
        </Button>
      </div>
    </>
  );
};

export default Hero;
