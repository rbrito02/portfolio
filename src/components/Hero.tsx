"use client";
import { motion } from "framer-motion";
import "./styles/scroll.css";

const Hero = () => {
  return (
    <div className="container flex gap-3 items-center justify-center ">
      <span className="h-28 text-[#5f6368] text-3xl font-bold flex items-center">
        I&apos;m A
      </span>
      <div className="scrolling-words-container flex items-center font-4xl font-bold">
        <div className="scrolling-words-box h-28 m-auto overflow-hidden text-3xl">
          <ul className="mx-0 p-0">
            <li className="flex items-center justify-start h-28 list-none text-[#ea4335]">
              Developer
            </li>
            <li className="flex items-center justify-start h-28 list-none text-[#4285f4]">
              Student
            </li>
            <li className="flex items-center justify-start h-28 list-none text-[#34a853]">
              Fullstack Engineer
            </li>
            <li className="flex items-center justify-start h-28 list-none text-[#fbbc04]">
              Musician
            </li>
            <li className="flex items-center justify-start h-28 list-none text-[#ea4335]">
              Developer
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Hero;
