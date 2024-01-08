"use client";
import { motion } from "framer-motion";
import "./styles/scroll.css";

const Hero = () => {
  return (
    <div className="container flex gap-2">
      <span className="text-[#5f6368] text-3xl font-bold h-[3rem]">
        I&apos;m A
      </span>
      <div className="scrolling-words-container">
        <div className="scrolling-words-box">
          <ul>
            <li className="text-[#ea4335]">Devloper</li>
            <li className="text-[#4285f4]">Student</li>
            <li className="text-[#34a853]">Fullstack Engineer</li>
            <li className="text-[#fbbc04]">Musician</li>
            <li className="text-[#ea4335]">Developer</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Hero;
