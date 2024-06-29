"use client";
import { Button } from "@/components/ui/button";
import HeroTypeWriter from "./HeroTypeWriter";
import { motion } from "framer-motion";
import me from "@/public/me.jpg";
import Image from "next/image";
import { AuroraBackground } from "../ui/aurora-background";
import Link from "next/link";
const Hero = () => {
  return (
    <AuroraBackground>
      <div className="z-10 container overflow-x-hidden flex flex-col-reverse md:flex-row items-center justify-center relative text-primary gap-6 md:gap-12 lg:gap-24">
        <div>
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="font-medium text-2xl sm:text-3xl md:text-4xl mb-6"
          >
            Hi, I am
            <br />
            <span className="text-4xl sm:text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-red-500 to-pink-600 font-semibold">
              Murad Yusubov
            </span>
            ,
            <br />
            <HeroTypeWriter />
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mb-4 block max-w-[400px] md:max-w-lg text-lg sm:text-xl md:text-2xl"
          >
            A full-stack web developer who loves to code. Skilled in React,
            Next.js, Tailwind CSS, Node.js, AWS, and various databases.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="buttons max-w-[169.55px] mx-auto flex flex-wrap items-center gap-2 justify-center"
          >
            <Button>Resume</Button>
            <Button asChild variant={"outline"}>
              <a target="_blank" href="https://github.com/Biolater">
                Github
              </a>
            </Button>
            <Button className="flex-grow" asChild variant={"secondary"}>
              <Link href="#contact">Contact Me</Link>
            </Button>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
          className="order-1 hero__image max-w-[300px] max-h-[300px] lg:max-w-[400px] lg:max-h-[400px] xl:max-w-[450px] xl:max-h-[450px] flex"
        >
          <Image
            quality={100}
            priority
            src={me}
            alt="me"
            className="rounded-full object-cover"
          />
        </motion.div>
      </div>
    </AuroraBackground>
  );
};

export default Hero;
