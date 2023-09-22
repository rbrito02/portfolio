import React from "react";

interface SkillTagProps {
	skill: string;
}

const SkillTag: React.FC<SkillTagProps> = ({ skill }) => {
	return (
		<div className="rounded-full bg-textGreen/30 text-textGreen  px-2 py-1 mt-2">
			{skill}
		</div>
	);
};

export default SkillTag;
