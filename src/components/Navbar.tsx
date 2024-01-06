import Link from "next/link";
import React from "react";
import Logo from "@/components/Logo";

const Navbar = () => {
    return (
        <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
            <nav>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/blog">Blog</Link>
            </nav>
            <Logo />
            <nav>
                <Link href="/" target="_blank">T</Link>
                <Link href="/" target="_blank">T</Link>
                <Link href="/" target="_blank">T</Link>
                <Link href="/" target="_blank">T</Link>
            </nav>
        </header>
    );
};

export default Navbar;

