import React from "react";
import SkillTag from "./SkillTag";

interface FeaturedProjectProps {
	isImageLeft: boolean;
	image: string;
	name: string;
	description: string;
	technologies: string[];
	githubLink: string;
}

const FeaturedProject: React.FC<FeaturedProjectProps> = (props) => {
	return (
		<div className="flex flex-wrap">
			<div
				className={`${
					props.isImageLeft ? "w-1/2" : "w-1/2 order-last relative"
				}`}
			>
				<div className="absolute top-0 left-0 w-100% h-100% bg-green-300 mix-blend-multiply z-2 transition "></div>
				<img src={props.image} alt={props.name} />
			</div>
			<div className="w-1/2">
				<h2>{props.name}</h2>
				<p>{props.description}</p>
				<div>
					{props.technologies.map((tech, index) => (
						<SkillTag key={index} skill={tech} />
					))}
				</div>
				<a href={props.githubLink}>Github Link</a>
			</div>
		</div>
	);
};

export default FeaturedProject;
