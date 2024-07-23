"use client"
import HeroSection from "./components/HeroSection";
import Lenis from "lenis";
import { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import EmailSection from "./components/EmailSection";
import { useScroll } from "framer-motion";

export default function Home() {

    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"]
    },)

    useEffect(
        () => {
            const lenis = new Lenis()

            function raf(time) {
                lenis.raf(time)
                requestAnimationFrame(raf)
            }

            requestAnimationFrame(raf)
        }, [])

    return (
        <main className="flex min-h-screen flex-col bg-[#121212]">
            <Navbar />
            <div className="container ref={container} relative">
                <HeroSection scrollYProgress={scrollYProgress} />
                <EmailSection scrollYProgress={scrollYProgress} />
            </div>
        </main>
    );
}
