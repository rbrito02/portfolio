import WorkCard from "./WorkCard";
import workData from "../../lib/workData";
import { motion } from "framer-motion";

const About = () => {
	return (
		<motion.section
			id="about"
			className="max-w-contentContainer mx-auto pt-10 mdl:pt-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4 "
		>
			<div className="flex mb-3">
				<motion.h1
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1.5 }}
					className="text-textLight text-2xl font-semibold tracking-wide"
				>
					About Me
				</motion.h1>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1.5 }}
					className="w-60 mt-4 ml-6 h-0.5 bg-slate-500"
				></motion.div>
			</div>
			<section className="flex gap-16">
				<div className="w-1/2 text-base md:max-w-[650px] text-textDark font-medium flex flex-col gap-4">
					<motion.p
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.75 }}
					>
						Hiya! My name is Raudy and I'm a Sophomore studying{" "}
						<span className="text-textGreen">Computer Science </span>
						at the University of Central Florida.
					</motion.p>{" "}
					<motion.p
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.95 }}
					>
						I began programming all the way back in middle school, and began
						designing web applications in high school using{" "}
						<span className="text-textGreen">React</span>. Since then I've been
						developing mockups and web applications for wherever my mind may
						bring me.
					</motion.p>
					<motion.p
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 1.15 }}
					>
						To further my skills, I've joined the development team for{" "}
						<span className="text-textGreen">KnightHacks,</span> a UCF student
						organization dedicated to software development and hosting
						hackathons for Central Florida.
					</motion.p>
					<motion.p
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 1.35 }}
					>
						Recently, I've had the oppurtunity to demonstrate my skills while
						competing at Shellhacks 2023, Florida's largest hackathon each year.
						As a first-time hacker I placed 1st in{" "}
						<span className="text-textGreen">Microsoft's </span> Mixed Reality
						challenge and 2nd in{" "}
						<span className="text-textGreen">Assurant's </span> Digital
						Immersion challenge.
					</motion.p>
				</div>

				<section className="flex flex-col">
					{workData.map(
						(
							work: {
								company: string;
								position: string;
								description: string;
								date: string;
								skills: string[] | undefined;
								link: string | undefined;
							},
							index: number
						) => (
							<WorkCard
								key={index}
								company={work.company}
								position={work.position}
								description={work.description}
								date={work.date}
								skills={work.skills}
								link={work.link}
							/>
						)
					)}
				</section>
			</section>
		</motion.section>
	);
};

export default About;
