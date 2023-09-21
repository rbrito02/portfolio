import React from "react";

interface WorkCardProps {
	company: string;
	position: string;
	description: string;
	date: string;
	skills?: string[];
}

const WorkCard: React.FC<WorkCardProps> = ({
	company,
	position,
	description,
	date,
	skills,
}) => {
	return (
		<section className="flex group gap-2 hover:bg-slate-800/50 hover:shaodw-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg">
			{/**Left section */}
			<div>
				<span className="text-sm text-textLight">{date}</span>
			</div>
			{/**Right section */}
			<div className="flex flex-col">
				<h3 className="text-lg font-titleFont tracking-wide text-white group-hover:text-textGreen">
					{position} | {company}
					<>{/**Arrow Icon */}</>
				</h3>
				<p className="text-base md:max-w-[650px] text-textDark font-medium">
					{description}
				</p>

				<div className="flex gap-2">
					{skills?.map((skill) => (
						<span className="text-sm text-textLight">{skill}</span>
					))}
				</div>
			</div>
		</section>
	);
};

export default WorkCard;
