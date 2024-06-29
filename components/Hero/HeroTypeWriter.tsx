"use client";
import Typewriter from "typewriter-effect";

const HeroTypeWriter = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Fullstack Developer",
          "React & Next.js Expert",
          "AWS & Firebase Expert",
          "Frontend Enthusiast",
          "Interactive App Builder",
          "Innovative Tech Solutions",
          "Efficient Backend Creator",
          "Clean Code Advocate",
          "Lifelong Tech Learner",
        ],
        autoStart: true,
        loop: true,
        delay: 50,
      }}
    />
  );
};

export default HeroTypeWriter;
