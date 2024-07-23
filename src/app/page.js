"use client"
import HeroSection from "./components/HeroSection";
import Lenis from "lenis";
import { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import EmailSection from "./components/EmailSection";
import { useScroll } from "framer-motion";

export default function Home() {

    const container = useRef();
    const lenis = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"]
    },)

    useEffect(
        () => {
            lenis.current = new Lenis({
                duration: 2.5,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            })

            const snapScroll = (e) => {
                e.preventDefault();

                // Calculates current scroll position
                const scrollTop = lenis.current.scroll;
                const windowHeight = window.innerHeight;

                // Determines target section based on scroll direction
                if (e.deltaY > 0) {
                    // Down
                    lenis.current.scrollTo(scrollTop + windowHeight);
                } else {
                    // Up
                    lenis.current.scrollTo(scrollTop - windowHeight);
                }
            };

            //Listen to mouse wheel
            window, addEventListener('wheel', snapScroll, { passive: false });


            function raf(time) {
                lenis.current.raf(time)
                requestAnimationFrame(raf)
            }

            requestAnimationFrame(raf)

            // Cleanup event listener
            return () => {
                window.removeEventListener('wheel', snapScroll)
            };
        }, [])

    // handles navbar smooth snap scrolling
    const handleLinkClick = (e, target) => {
        e.preventDefault();
        const element = document.querySelector(target);
        if (element) {
            lenis.scrollTo(element);
        }
    }

    return (
        <main className="flex min-h-screen flex-col bg-[#121212]">
            <Navbar />
            <div className="container ref={container} relative min-h-screen">
                <HeroSection scrollYProgress={scrollYProgress} />
                <EmailSection scrollYProgress={scrollYProgress} />
            </div>
        </main>
    );
}
