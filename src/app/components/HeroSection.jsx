"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import { TypeAnimation } from "react-type-animation";
import { motion, useTransform } from "framer-motion";
import Link from "next/link";

const HeroSection = ({ scrollYProgress }) => {

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.6])
    const rotate = useTransform(scrollYProgress, [0, 1], [0, -8])
    return (
        <motion.section style={{ scale, rotate }} className="sticky top-0 h-screen lg:py-16 flex flex-col justify-center pb-[10vh]">
            <div className="grid grid-cols-1 sm:grid-cols-12 bg-[#121212]">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
                >
                    <h1 className="text-white mb-4 text-5xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-violet-300">
                            Raudy Brito
                        </span>
                        <br></br>
                        <p className="text-3xl sm: text-3xl lg:text-5xl">
                            <TypeAnimation
                                sequence={[
                                    "Web Developer",
                                    1000,
                                    "AI Engineer",
                                    1000,
                                    "Student at UCF",
                                    1000,
                                    "Software Engineer",
                                    1000,
                                    "Musician", 1000,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                        </p>
                    </h1>
                    <div className="flex gap-2">
                        <Button asChild className="py-3 w-24 mt-4  h-10  rounded-full mr-4 text-white bg-slate" variant="outline">
                            <Link href="#blog">My Blog</Link>
                        </Button>
                        <div className="socials inline-block py-3 w-full sm:w-fit rounded-full mr-4 text-white flex flex-row">
                            <a href="https://www.github.com/rbrito02" target="_blank">
                                <Image src={GithubIcon} alt="Raudy Brito" />
                            </a>
                            <a href="https://www.linkedin.com/in/raudybrito" target="_blank">
                                <Image src={LinkedinIcon} alt="Raudy Brito" />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default HeroSection;
