"use client"
import styled from "styled-components";
import { animate, motion, transform, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

const Container = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 1fr;
  align-items: center;
  background-color: #121212; /* Dark background */
  border: 1px solid green; /* Temporary border for visibility */
`;

const Title = styled(motion.h1)`
  width: 100%;
  height: 100%;
  font-weight: 800;
  display: flex;
  overflow: hidden;
  position: relative; /* To contain absolutely positioned BG elements */
  color: #ffffff; /* Text color */
  border: 1px solid blue; /* Temporary border for visibility */
`;

const BG = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%; /* Ensure it covers the full width */
  height: 100%; /* Ensure it covers the full height */
  pointer-events: none;
  mix-blend-mode: screen;
  background-color: #ff0000; /* Temporary background color */
`;

const Letter = styled(motion.div)`
  position: relative;
  padding: 1.25vw 0.2vw;
  mix-blend-mode: multiply;
  display: inline-block; /* To keep letters inline */
  border: 1px solid red; /* Temporary border for visibility */
  background-color: #ffffff; /* Temporary background color */
`;

const Spacer = styled(motion.div)`
  width: 2.5vw;
  height: 2.5vw;
`;

const titleV = {
    visible: (custom) => ({
        transition: {
            delayChildren: custom,
            staggerChildren: 0.15,
        },
    }),
};

const letterV = {
    hidden: {
        y: 165,
    },
    visible: {
        y: 0,
        transition: {
            stiffness: 30,
            mass: 0.5,
            damping: 5.5,
            duration: 0.6,
            ease: "easeOut",
            type: "tween",
        },
    },
};

const bgV = {
    hidden: {
        scaleY: 0,
        originY: 1,
        transition: {
            duration: 0.3,
        },
    },
    visible: {
        scaleY: [0, 0.85],
        originY: 1,
        transition: {
            repeat: Infinity,
            repeatType: "reverse",
            duration: 2,
            ease: "linear",
        },
    },
};

export default function Banner({ title = "Raudy Brito" }) {
    const phase = useMotionValue(0);

    const backgroundColor = useTransform(
        phase,
        [0, 1, 2, 3],
        ["#ffffff", "#ff0000", "#00ff00", "#0000ff"] // Example colors
    );

    useEffect(() => {
        animate(phase, [1, 1, 2, 2, 3, 3], {
            type: "tween",
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
            duration: 6,
        });
    }, [phase]);

    return (
        <Container>
            <Title custom={0} variants={titleV}>
                {[...title].map((letter, index) => (
                    <Letter
                        variants={letterV}
                        key={letter + index}
                    >
                        <BG style={{ backgroundColor }} variants={bgV} />
                        {letter === " " ? <Spacer /> : letter}
                    </Letter>
                ))}
            </Title>
        </Container>
    );
}

