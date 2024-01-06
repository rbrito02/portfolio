"use client";
import Link from "next/link";
import React from "react";
import Logo from "@/components/Logo";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
	const iconStyles = { color: "red", fontSize: "1.5em" };
	return (
		<header className="w-full px-32 py-8 font-medium flex items-center justify-between">
			<nav className="flex gap-2">
				<motion.div
					initial={{ y: -100, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.5 }}
				>
					<Link href="/">Home</Link>
				</motion.div>
				<motion.div
					initial={{ y: -100, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.6 }}
				>
					<Link href="/about">About</Link>
				</motion.div>
				<motion.div
					initial={{ y: -100, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.7 }}
				>
					<Link href="/projects">Projects</Link>
				</motion.div>
				<motion.div
					initial={{ y: -100, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.8 }}
				>
					<Link href="/blog">Blog</Link>
				</motion.div>
			</nav>
			<Logo />
			<nav className="flex gap-2">
				<Link href="/" target="_blank">
					<FaGithub style={iconStyles} />
				</Link>
				<Link href="/" target="_blank">
					<FaLinkedin style={iconStyles} />
				</Link>
				<Link href="/" target="_blank">
					<FaGithub style={iconStyles} />
				</Link>
			</nav>
		</header>
	);
};

export default Navbar;
