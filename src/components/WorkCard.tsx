import React from "react";
import SkillTag from "./SkillTag";
import { FaArrowUp } from "react-icons/fa6";
import { motion } from "framer-motion";

interface WorkCardProps {
	company: string;
	position: string;
	description: string;
	date: string;
	skills?: string[];
	link?: string;
}

const WorkCard: React.FC<WorkCardProps> = ({
	company,
	position,
	description,
	date,
	skills,
	link,
}) => {
	const cardContent = (
		<motion.section
			className={`flex group gap-2 rounded-lg hover:bg-slate-800/50 hover:shaodw-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg py-4 px-6 ${
				link ? "cursor-pointer" : ""
			}`}
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
		>
			{/**Left section */}
			<div>
				<span className="text-sm text-textLight">{date}</span>
			</div>
			{/**Right section */}
			<div className="flex flex-col ">
				<div className="flex text-lg font-titleFont text-white gap-0.5">
					<h3 className=" tracking-wide group-hover:text-textGreen">
						{position} | {company}
					</h3>
					<span className="group-hover:text-textGreen mt-1 group-hover:-translate-y-1 group-hover:translate-x-1 transition ease-linear duration-150 rotate-45">
						{" "}
						<FaArrowUp />
					</span>
				</div>
				<p className="text-base md:max-w-[650px] text-textDark font-medium">
					{description}
				</p>

				<div className="flex flex-wrap gap-2">
					{skills?.map((skill, index) => (
						<SkillTag key={index} skill={skill} />
					))}
				</div>
			</div>
		</motion.section>
	);
	return link ? (
		<a href={link} target="_blank">
			{cardContent}
		</a>
	) : (
		cardContent
	);
};

export default WorkCard;
