import { motion } from "framer-motion";
import FeaturedProject from "./FeaturedProject";
import featuredData from "../../lib/featuredData";

const Projects = () => {
	return (
		<section
			id="projects"
			className="max-w-contentContainer mx-auto pt-12 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4"
		>
			<div className="flex mb-3">
				<motion.h1
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ delay: 0.25 }}
					className="text-textLight text-2xl font-semibold tracking-wide"
				>
					Projects
				</motion.h1>
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ delay: 0.25 }}
					className="w-60 mt-4 ml-6 h-0.5 bg-slate-500"
				></motion.div>
			</div>
			<div className="flex flex-col gap-8">
				{featuredData.map((project, index) => (
					<FeaturedProject
						key={index}
						isImageLeft={project.isImageLeft}
						image={project.image}
						name={project.name}
						description={project.description}
						technologies={project.technologies}
						githubLink={project.githubLink}
					/>
				))}
			</div>
		</section>
	);
};

export default Projects;
