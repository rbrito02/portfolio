import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

interface FeaturedProjectProps {
	isImageLeft: boolean;
	image: string;
	name: string;
	description: string;
	technologies: string[];
	githubLink?: string;
}

const FeaturedProject: React.FC<FeaturedProjectProps> = (props) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			transition={{ delay: 1 }}
			whileInView={{ opacity: 1 }}
			className="flex gap-4 group"
		>
			<div
				className={`${
					props.isImageLeft ? "w-1/3" : "w-1/3 order-last relative"
				}`}
			>
				<div className="bg-textGreen/40 w-full h-full flex justify-center">
					<div className="h-full w-5/6">
						<img src={props.image} alt={props.name} />
					</div>
				</div>
			</div>
			<div className="w-1/2 flex flex-col ml">
				<div className="flex gap-2">
					<h2 className="text-xl text-violet-400 ">{props.name}</h2>
					<a
						href={props.githubLink}
						className="group-hover:text-textGreen group-hover:-translate-y-1 group-hover:translate-x-1 transition ease-linear duration-150"
					>
						{props.githubLink ? <AiFillGithub size={25} /> : null}
					</a>
				</div>

				<p className="text-md">{props.description}</p>
				<div className="flex flex-wrap gap-2 text-sm text-slate-400">
					{props.technologies.map((tech, index) => (
						<span key={index}>{tech}</span>
					))}
				</div>
			</div>
		</motion.div>
	);
};

export default FeaturedProject;
